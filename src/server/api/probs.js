const express = require('express');

const router = express.Router();

const problem = () => `${Math.floor(Math.random() * 100)} problems, but a server aint one.`;

router.get('/', (req, res) => {
    res.json([problem(), problem(), problem()]);
})

module.exports = router;