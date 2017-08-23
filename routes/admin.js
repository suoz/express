var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var csrf = require('csurf');
var csrfProtection = csrf({ cookie:true });
var parseForm = bodyParser.urlencoded({ extended:false });

var mysql = require('mysql');
var db =  require('./db');

// 连接池
var connection = mysql.createPool(db);

/* GET users listing. */
router.get('/', csrfProtection, function(req, res, next) {
    res.render('admin', { csrfToken:req.csrfToken() });
});

/* GET users listing. */
router.get('/refresh', function(req, res, next) {
    var page = req.query.page;
    var pagenumber = req.query.pagenumber;

    if(!page){
        connection.query('select * from baidunews order by newsid limit 0,'+pagenumber,function(err,rows){
            res.json(rows);
        });
    }else{
        connection.query('select * from baidunews order by newsid limit '+ page*pagenumber +','+'pagenumber',function(err,rows){
          res.json(rows);
        });
    }
});

module.exports = router;
