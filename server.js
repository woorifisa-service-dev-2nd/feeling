// npm install express

const express = require('express');

const request = require('request');

const app = express();
const clientId = 'zl78sn7v7q';
const clientSecret = '9ApZGKipt6crAQkHHWbYhV5Bbd9GHjA5a5seuHaF';
app.use(express.static('public'));
const testBody = {
  content: '안녕하세요반갑습니다',
};
app.get('/', (req, res) => {
  res.sendFile('index.html');
});
app.post('/submitComment', (req, res) => {
  //  const query = '안녕하세요?';
  const url = 'https://naveropenapi.apigw.ntruss.com/sentiment-analysis/v1/analyze';
  const options = {
    url, // url: url과 같음
    //  form: {'source':'ko', 'target':'en', 'text':query},
    body: JSON.stringify(testBody),
    headers: {
      'Content-Type': 'application/json',
      'X-NCP-APIGW-API-KEY-ID': clientId,
      'X-NCP-APIGW-API-KEY': clientSecret,
    },
  };
    // 실제로 POST 요청 전송 부분
  request.post(options, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      console.log(body);
      res.send(body); // 응답 결과를 app.js로 전달하는 코드
    } else {
      res.status(response.statusCode).end();
      console.log('error = ', response.statusCode);
    }
  });
});
app.listen(3000, () => {});
