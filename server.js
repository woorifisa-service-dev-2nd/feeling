const express = require('express');

const request = require('request');

const app = express();

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => res.sendFile('index.html'));

// localhost:3000/submitComment로 요청 시 동작할 핸들러
app.post('/submitComment', (req, res) => {
  const url = 'https://naveropenapi.apigw.ntruss.com/sentiment-analysis/v1/analyze';

  const options = {
    url,
    body: JSON.stringify(req.body),
    headers: {
      'Content-Type': 'application/json',
      'X-NCP-APIGW-API-KEY-ID': process.env.CLIENT_ID,
      'X-NCP-APIGW-API-KEY': process.env.CLIENT_SECRET_ID,
    },
  };

  request.post(options, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      res.send(body);
    }
  });
});

const port = 3000;
app.listen(port, () => console.log(`http://localhost:${port}/ app listening on port ${3000}`));
