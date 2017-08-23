var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

// 防止xss攻击
var xss = require('xss');

// 防止csrf攻击
var csrf = require('csurf');
var csrfProtection = csrf({ cookie:true });
var parseForm = bodyParser.urlencoded({ extended:false });

var mysql = require('mysql');
var db =  require('./db');

// 连接池
var connection = mysql.createPool(db);

// 后台管理页
router.get('/', csrfProtection, function(req, res, next) {
    res.render('admin', { csrfToken:req.csrfToken() });
});

// 刷新news
router.get('/refresh', function(req, res, next) {
    var page = req.query.page - 1;
    var pagenumber = req.query.pagenumber;

    connection.query('select * from baidunews order by newsid limit '+ page*pagenumber +','+pagenumber,function(err,rows){
        res.json(rows);
    });
});

// 添加news
router.post('/insert', function(req, res, next){
    var newstitle = xss(req.body.newstitle);
    var newstime = xss(req.body.newstime);
    var newsimg = xss(req.body.newsimg);
    var newstype = xss(req.body.newstype);

    connection.query('insert into table baidunews value(?,?,?,?)', [newstitle,newstime,newsimg,newstype], function(err, result){
        console.log(result);
        // res.json(result);
    });
});

// 编辑news
router.post('/update', function(req, res, next){
    var newsid = req.body.newsid;
    var newstitle = xss(req.body.newstitle);
    var newstime = xss(req.body.newstime);
    var newsimg = xss(req.body.newsimg);
    var newstype = xss(req.body.newstype);

    connection.query("update baidunews set newstitle=?,newstime=?,newsimg=?,newstype=? where newsid=?", [newstime,newstitle,newsimg,newstype,newsid], function(err, result) {
        console.log(result);
        // res.json(result);
    });
});

// 删除news
router.get('/delete', function(req, res, next){
    var newsid = req.query.newsid;

    connection.query('delete from baidunews where newsid='+newsid, function(err, result) {
        res.json(result.affectedRows);
    });
});

module.exports = router;
