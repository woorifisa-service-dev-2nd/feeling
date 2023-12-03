const SENTIMENT = {
  negative: '부정적',
  positive: '긍정적',
  neutral: '중간',
};

const targetName = document.getElementById('targetName');
const comment = document.getElementById('comment');
const submitButton = document.getElementById('post');
const analysisResult = document.getElementById('analysisResult');
const sentenceList = document.getElementById('sentenceList');
const imgPosition = document.getElementById('imgPosition');
const container = document.getElementById('container');
const resultContainer = document.getElementById('resultContainer');

let targetedName = '';
let commentContents = '';

const optionsForm = (body) => ({
  method: 'POST',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
  },
});

const fetchAPI = async (contents) => {
  const url = '/submitComment';
  const body = {
    content: contents,
  };

  await fetch(url, optionsForm(body))
    .then((response) => response.json())
    .then((res) => {
      resultContainer.classList.remove('hidden');
      const result = res.document;
      const { sentences } = res;
      const wholeSent = result.sentiment;

      sentences.map((i) => {
        const sentenceElement = document.createElement('p');

        if (SENTIMENT[i.sentiment] === 'positive') {
          sentenceElement.style.color = 'blue';
        } else if (SENTIMENT[i.sentiment] === 'negative') {
          sentenceElement.style.color = 'red';
        } else {
          sentenceElement.style.color = 'black';
        }

        sentenceElement.innerHTML = i.content;
        sentenceElement.classList.add('mb-2');
        sentenceElement.classList.add('text-gray-600');
        sentenceList.appendChild(sentenceElement);
      });

      targetName.textContent = targetedName;
      analysisResult.textContent = SENTIMENT[wholeSent];

      const results = Object.entries(result.confidence);
      const bgImage = document.createElement('img');

      bgImage.src = `${wholeSent}.svg`;
      imgPosition.appendChild(bgImage);

      Object.entries(result.confidence).map((i) => {


        let bgColor;
        if (i[0] === 'negative') {
          bgColor = 'bg-rose-600';
        } else if (i[0] === 'positive') {
          bgColor = 'bg-sky-500';
        } else {
          bgColor = 'bg-zinc-500';
        }

        const divEl = document.createElement('div');
        divEl.className = 'bg-blue-50 h-1.5 rounded-full w-full mb-6';
        const spanEl = document.createElement('span');
        spanEl.className = `h-full ${bgColor} w-full block rounded-full`;
        spanEl.style.width = `${Math.round(i[1])}%`;

        container.appendChild(divEl);
        divEl.appendChild(spanEl);
      });
    })
    .catch((e) => { });
};

submitButton.addEventListener('click', () => {
  if (commentContents !== '') {
    fetchAPI(commentContents);
  }
});

targetName.addEventListener('change', (e) => {
  targetedName = e.target.value;
});

comment.addEventListener('change', (e) => {
  commentContents = e.target.value;
  console.log(commentContents);
});
