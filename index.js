
//importa el modulo express
const express = require('express');
const motorRender = require('express-handlebars');

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'galeria';

// Create a new MongoClient
const client = new MongoClient(url);

var db = null;

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Conectado al servidor");

  db = client.db(dbName);

 // client.close();
});

//crear la variable app que use express
const app = express();

const dataJson = require('./productos.json');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars',motorRender());
app.set('view engine', 'handlebars');

app.get('/', function(req, res){
  var contexto = {
    titulo: 'Página inicial',
  };
  res.render('home', contexto);
  //res.sendFile(__dirname + '/public/index.html');
});


app.get('/galeria/:categoria?', function(req, res){

  var query = {};
  if(req.params.categoria){
    query.categoria = req.params.categoria;
  }

  const productos = db.collection('productos');

  productos.find(query).toArray(function(err, docs){

    assert.equal(err, null);
    //console.log("Productos Encontrados");
    //console.log(req.params);
    
    var contexto = {
      productos: docs,
      categoria: req.params.categoria,
      
    };
    
    res.render('galeria', contexto);
  });

});



app.get('/galeria/producto/:nombre', function(req, res){

  

  var collection = db.collection('productos');
  collection.find({ nombre: req.params.nombre}).toArray(function(err, docs){
    console.log(docs);

    var contexto ={
      producto: docs [0],
      esAnimacion: req.params.categoria == "Animación",
    };
    res.render('producto', contexto);
  });

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