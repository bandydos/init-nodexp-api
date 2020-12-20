const express = require('express');

const probs = require('./probs');

const router = express.Router();

router.get('/', (req, res) => res.json({ message: 'API' }));

router.use('/probs', probs);

module.exports = router;