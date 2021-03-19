import express from 'express';
import { getRepository } from 'typeorm';

import { User } from '../../entity';

const router = express.Router();

router.get('/users', async (req, res) => {
  const users = await getRepository(User).find();

  res.status(200).send({
    users,
  });
});

export { router as getUsersRouter };
