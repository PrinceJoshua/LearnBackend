//THIS IS THE CONTROLLER
const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{ //resqest and a respnse from the index or the root
    res.render('index')
});

module.exports = router;