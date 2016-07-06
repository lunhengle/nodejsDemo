/**
 * Created by lunhengle on 2016/7/5.
 * 测试我的最新话题.
 */
var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/test', function (req, res) {
    request('http://127.0.0.1:8080/base/d/app/social/getNewSubjectTopicByPage?topicId=1&page=1&pageLimit=10', function (error, response, body) {
        var jsonObject = JSON.parse(body);
        var object = jsonObject.object;
        for (var i = 0; i < object.length; i++) {
            console.log("####################");
            console.log(object[i]);
            console.log("$$$$$$$$$$$$$$$$$$$$");
        }
        res.render('tests', {object: object, title: '这是一个json测试'});
    });
});
module.exports = router;
