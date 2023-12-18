import { validateKorean, validateNotEmpty } from './validation.js'
const SENTIMENT = {
  negative: '부정적',
  positive: '긍정적',
  neutral: '중립적',
};

const targetName = document.getElementById('targetName');
const targetedName = document.getElementById('targetedName');
const comment = document.getElementById('comment');
const submitButton = document.getElementById('post');
const analysisResult = document.getElementById('analysisResult');
const imgPosition = document.getElementById('imgPosition');
const container = document.getElementById('container');
const resultContainer = document.getElementById('resultContainer');

const optionsForm = (body) => ({
  method: 'POST',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
  },
});

const paintResult = (res) => {
  resultContainer.classList.remove('hidden');

  const result = res.document;
  const totalResult = result.sentiment;

  analysisResult.textContent = SENTIMENT[totalResult];
  targetedName.textContent = targetName.value;

  const bgImage = document.createElement('img');
  bgImage.src = `${totalResult}.svg`;
  imgPosition.appendChild(bgImage);

  Object.entries(result.confidence).map((satus) => {
    let bgColor;
    if (satus[0] === 'negative') {
      bgColor = 'bg-rose-600';
    } else if (satus[0] === 'positive') {
      bgColor = 'bg-sky-500';
    } else {
      bgColor = 'bg-zinc-500';
    }
    const rate = document.createElement('p');
    const divEl = document.createElement('div');
    const spanEl = document.createElement('p');

    divEl.className = 'bg-zinc-50 h-4 rounded-full w-full mb-1 flex';
    rate.className = 'px-1 py-1 rounded-lg text-gray-600 text-xs mb-3';
    spanEl.className = `h-full ${bgColor} w-full block rounded-full`;

    rate.textContent = `${SENTIMENT[satus[0]]} : ${Math.round(satus[1])}%`;
    spanEl.style.width = `${Math.round(satus[1])}%`;

    container.appendChild(divEl);
    divEl.appendChild(spanEl);
    container.appendChild(rate);

    return null;
  });
};

const fetchAPI = async (content) => {
  const url = '/submitComment';
  const body = {
    content,
  };

  await fetch(url, optionsForm(body))
    .then((response) => response.json())
    .then((response) => paintResult(response))
    .catch((e) => console.error(e));
};

const submit = () => {
  if (validateKorean(comment.value) && validateNotEmpty(comment.value)) {
    fetchAPI(comment.value)
  }
};

submitButton.addEventListener('click', submit);
