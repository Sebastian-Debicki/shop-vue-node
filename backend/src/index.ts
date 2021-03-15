import { app } from './app';

const portNumber = 3000;
app.listen(portNumber, () => {
  console.log(`Backend is listening on port: http://localhost:${portNumber}`);
});
