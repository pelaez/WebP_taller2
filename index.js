
//importa el modulo express
const express = require('express');
const motorRender = require('express-handlebars');

//crear la variable app que use express
const app = express();

const dataJson = require('./productos.json');

app.use(express.static('public'));

app.engine('handlebars',motorRender());
app.set('view engine', 'handlebars');

app.get('/', function(req, res){
  var contexto = {
    titulo: 'Página inicial',
  };
  res.render('home', contexto);
  //res.sendFile(__dirname + '/public/index.html');
});

app.get('/galeria', function(req, res){
  res.json({
    name: 'galeria',
    productos:20
  })
});

app.get('/productos',function(req,res){
  res.json({
    error:false,
    data:dataJson.data,
  })
})

app.listen(3000, function(){
  console.log('escuchando el puerto 3000');
});