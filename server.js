const express = require('express');

const app = express();

const CLIENT_ID = '13ht3kea0r';
const CLIENT_SECRET_ID = 'vVkCGE4dgDNVfC1o5iZZaIfmwuGPbrREUguOHQmX';

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  console.log('http://localhost:3000/ called');
  res.sendFile('index.html');
});

// localhost:3000/submitComment로 요청 시 동작할 핸들러
app.post('/submitComment', (req, res) => {
  const url = 'https://naveropenapi.apigw.ntruss.com/sentiment-analysis/v1/analyze';
  const request = require('request');

  const options = {
    url,
    body: JSON.stringify(req.body),
    headers: {
      'Content-Type': 'application/json',
      'X-NCP-APIGW-API-KEY-ID': CLIENT_ID,
      'X-NCP-APIGW-API-KEY': CLIENT_SECRET_ID,
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