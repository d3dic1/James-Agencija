import express from 'express';

const router = express.Router();

// Placeholder route
router.get('/', (_req, res) => {
  res.json({ message: 'Content API placeholder' });
});

export default router; 