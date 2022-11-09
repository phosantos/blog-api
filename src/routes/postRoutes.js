const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  res.json({ res: 'all posts' });
});

router.post('/', (req, res) => {
  res.json({ msg: 'new post' });
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  res.json({ res: 'single post' });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ msg: `delete ${id}` });
});

module.exports = router;
