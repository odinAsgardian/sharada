var http = require('http');

var express = require('express');
var cors = require('cors');

var app = express();

app.set('port', 3000);
app.listen(app.get('port'), function(){
		console.log('servidor rodando!');
});
