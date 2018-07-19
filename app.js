//express 모듈 불러온 후 express 변수에 저장
var express = require('express');

//http 모듈 불러온 후 http 변수에 저장
var http = require('http');

//express 객체를 app 변수에 저장
var app = express();

//http://서버주소/keyboard
app.get('/keyboard' , function(req, res){
	//전달할 데이터
	var data = {
		'type' : 'buttons',
		'buttons' : ['과일','채소','정보']
	};
	
	//JSON 형식으로 응답
	res.json(data);
});

//9090포트로 서버 실행
http.createServer(app).listen(4500, function() {
	console.log('4500 port Server Startup..');
})