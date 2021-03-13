import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('It works!');
});

const portNumber = 3000;
app.listen(portNumber, () => {
  console.log(`Backend is listening on port: http://localhost:${portNumber}`);
});
