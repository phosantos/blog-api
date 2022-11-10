const express = require('express');
const router = express.Router();
const {
  post_index,
  post_details,
  post_create,
  post_delete,
} = require('../controllers/postController');

router.get('/', post_index);
router.post('/', post_create);
router.get('/:id', post_details);
router.delete('/:id', post_delete);

module.exports = router;
