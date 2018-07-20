//express 모듈 불러온 후 express 변수에 저장
var express = require('express');

//http 모듈 불러온 후 http 변수에 저장
var http = require('http');

//body-parser 모듈 불러온 후 bodyParser 변수에 저장
var bodyParser = require('body-parser');

//express 객체를 app 변수에 저장
var app = express();

//body-parser 미들웨어 사용 , express 서버에서 body-parser 라는 미들웨어를 사용하겠다고 설정하는 코드
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

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

// http://서버주소/message
app.post('/message' , function(req,res){
	//유저가 입력한 데이터
	var msg = req.body.content;
	console.log('전달받은 메시지: '+msg);
	
	var send = {}; //응답할 데이터
	
	switch(msg){
		case '이름':
		send = {
			'message' : {
				'text' : '저의 이름은 양기열입니다.' 
			}
		}
		break;
		
		case '나이':
		send = {
			'message' : {
				'text' : '27살입니다!' 
			}
		}
		break;
		
		case '사는곳':
		send = {
			'message' : {
				'text' : '부천 살아요~' 
			}
		}
		break;
		
		case '정보':
		send = {
			'message' : {
				'text' : '챗봇 연습중입니다!' 
			},
			keyboard: {
				'type' : 'buttons',
				'buttons' : ['테스트1' , '테스트2']
			}
		}
		break;
		
		default:
		send = {
			'message' : {
				'text' : '알수 없는 명령입니다.!' 
			}
		}
		break;
	}
	
	res.json(send); //send변수에 저장된 데이터 전달
});
	
//5000포트로 서버 실행
http.createServer(app).listen(process.env.PORT || 5000, function() {
	console.log('5000 port Server Startup..');
})
