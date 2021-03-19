import { createConnection } from 'typeorm';

import { app } from './app';

createConnection()
  .then(() => console.log('DB connection success!'))
  .catch((err) => console.log(err));

const portNumber = 3000;
app.listen(portNumber, () => {
  console.log(`Backend is listening on port: http://localhost:${portNumber}`);
});
