var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('hometeach_nav', { title: 'Express' });
});

module.exports = router;
