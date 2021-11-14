var express = require('express');

var app = express();
var cors = require('cors');
app.use(express.json());
app.use(cors());
 
 
app.get('/experiencia-laboral', function (req, res) {

  const cvData1 = { empresa: "La Nasa", puesto: "EL mas salado de todos",
                     descripcion: "programar saladamente", 
                     fechaInicio: new Date("2014-04-04"), 
                     fechaFin: new Date("2014-04-04") };

  const cvData2 = { empresa: "La Nasa", puesto: "EL mas salado de todos", 
                    descripcion: "programar saladamente",
                    fechaInicio: new Date("2014-04-04"),
                    fechaFin: new Date("2014-04-04") };


  res.writeHead(200, { "Content-Type": "application/json" });
  var otherArray = [cvData1, cvData2];
  var json = JSON.stringify({
    "experiencia-laboral": otherArray,
  });

  res.end(json);
});


app.post('/enviar-formulario', function (req, res) {
 
  if (req.body.nombreContacto == null) {
    res.statusCode = 400;
    res.end("Falta el nombre del Contacto");
  } else {
    res.cookie('PW_2021-CV_Contacto', req.body.nombreContacto);
    res.end("datos agregados con exito");
  }


});

app.post('/*', function (req, res) {

  res.statusCode = 404;
  res.end("No fue encontrado");

});


app.listen(process.env.PORT || 3000, (a) => {
  console.log("Servidor disponible en http://localhost:3000")
});

module.exports = app;