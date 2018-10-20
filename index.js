var express = require('express'),
	app = express(),
	port = process.env.PORT || 3001,
	bodyParser = require('body-parser');


app.get('/', function(req,res){
	console.log("get request on index");
	res.send("yeet");
})




app.listen(port);

console.log("app started on port " + port);