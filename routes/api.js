const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');

router.get('/store', storeController.index);
router.post('/store', storeController.store);
router.delete('/store/:id', storeController.destroy);

module.exports = router;