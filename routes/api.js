var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('api test');
});
router.get('/login', function(req, res, next) {
    console.log(req);
    res.status(200);
    
});
module.exports = router;