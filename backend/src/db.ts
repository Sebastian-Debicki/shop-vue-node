import { Pool } from 'pg';

export const pool = new Pool({
  user: 'postgres',
  host: 'db',
  database: 'shop',
  password: 'postgres',
  port: 5432,
});

const connect = async () => {
  try {
    pool.connect().then(() => console.log('Postgres DB connected.'));
  } catch (err) {
    console.log(err);
  }
};

connect();
