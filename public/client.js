const RESULT = {
  negative: '부정적',
  positive: '긍정적',
};

const targetName = document.getElementById('targetName');
const comment = document.getElementById("comment");
const submitButton = document.getElementById("post");
const analysisResult = document.getElementById('analysisResult');

let targetedName = '';
let commentContents = '';

targetName.addEventListener('change', (e) => {
  targetedName = e.target.value;
});

comment.addEventListener('change', (e) => {
  commentContents = e.target.value;
  console.log(commentContents);
});

const optionsForm = (body) => ({
  method: 'POST',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
  },
});

const sentiment = async (contents) => {
  const url = '/submitComment';
  const body = {
    content: contents,
  };

  await fetch(url, optionsForm(body))
    .then((response) => response.json())
    .then((res) => {
      const result = res.document;
      const wholeSent = result.sentiment;
      const wholeConfPos = result.confidence.positive * 100;
      const wholeConfNeu = result.confidence.neutral * 100;
      const wholeConfNeg = result.confidence.negative * 100;
      analysisResult.textContent = `${targetedName}에 대한 평가는 전반적으로 ${RESULT[wholeSent]} 입니다. 긍정적인 응답은 ${wholeConfPos}%, 중립적인 응답은
      ${wholeConfNeu}, 부정적인 응답은 ${wholeConfNeg}입니다.`;
    })
    .catch((e) => console.log('error', e));
};

submitButton.addEventListener('click', () => {
  if (commentContents !== '') {
    sentiment(commentContents);
  }
});
