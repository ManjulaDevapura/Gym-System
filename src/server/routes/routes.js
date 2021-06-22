var express = require('express');
var router = express.Router();

const { validate } = require('../controllers/UserValidation');

// user validation
router.post('/userValidation', validate);

module.exports = router;
