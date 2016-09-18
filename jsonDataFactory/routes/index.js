var express = require('express');
var router = express.Router();

var Mock=require('mockjs');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/mockjsNumber,function(req,res,next){
	var callback=req.query.callback;
	var data=Mock.mock({
		 "number|+1": 202
	})
	var ret=JSON.stringify(data,null,4);
	ret=callback+'('+ret+')';
	req.send(ret);
})
router.get('/mockjsNumMinMax,function(req,res,next){
	var callback=req.query.callback;
	var data=Mock.mock({
		 "number|1-100": 100
	});
	var ret=JSON.stringify(data,null,4);
	ret=callback+'('+ret+')';
	req.send(ret);
})
router.get('/mockjsNumDminDmax,function(req,res,next){
	var callback=req.query.callback;
	var data=Mock.mock({
		 "number|1-100.1-10": 100
	});
	var ret=JSON.stringify(data,null,4);
	ret=callback+'('+ret+')';
	req.send(ret);
})
Router.get('/mockjsUserInformation',funtion(){
	var callback=req.query.callback;
	var data=Mock.mock({
		name: '@chineseName',
    		ip: '@ip',
    		email: '@email',
    		avatar: '@image'
	})
})

module.exports = router;
