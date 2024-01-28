const express = require('express')
const router = express.Router()

// const{} = require('../controller/CV');
const {executeCvService} = require('../controller/cvController');

router.route('/downloacv').get(executeCvService);


module.exports = router;