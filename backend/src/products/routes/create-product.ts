import express from 'express';

import { pool } from '../../db';

const router = express.Router();

router.post('/api/products', async (req, res) => {
  try {
    const { description } = req.body;

    const newProduct = await pool.query(
      'INSERT INTO products (description) VALUES ($1) RETURNING *',
      [description]
    );

    res.status(201).json(newProduct);
  } catch (err) {
    console.log(err.message);
  }
});

export { router as createProductRouter };
