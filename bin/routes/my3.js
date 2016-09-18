/**
 * Created by 李俊文 on 2016/9/14.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('my3', { title: 'Express' });
});

module.exports = router;
