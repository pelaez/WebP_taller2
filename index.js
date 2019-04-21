
//importa el modulo express
var express = require('express');
var motorRender = require('express-handlebars');

//crear la variable app que use express
var app = express();

app.use(express.static('public'));

app.engine('handlebars',motorRender());
app.set('view engine', 'handlebars');

app.get('/', function(req, res){

  res.sendFile(__dirname + '/public/index.html');
});


app.listen(3000, function(){
  console.log('escuchando el puerto 3000');
});