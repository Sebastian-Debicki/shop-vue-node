import express from 'express';
import { pool } from '../../db';

const router = express.Router();

router.get('/api/products', async (req, res) => {
  try {
    const products = await pool.query('SELECT * FROM products');

    res.status(200).json(products.rows);
  } catch (err) {
    console.log(err.message);
  }
});

export { router as getProductsRouter };
