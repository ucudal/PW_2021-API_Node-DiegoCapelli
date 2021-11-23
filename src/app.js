var express = require('express');

var app = express();
var cors = require('cors');
app.use(express.json());
app.use(cors());


app.get('/experiencia-laboral', function(req, res) {

  
  const cvData1 = {
    empresa: "Empresa X", puesto: "Fullstack Developer",
    descripcion: "Webs basadas en PHP ,Java spring MVC,primafaces,webservices en java (JAX-RS,java EE),base de datos Oracle SQL,PL/SQL , despliegue y generación de aplicación para servidores Wildfly y Apache Tomcat",
    fechaInicio: new Date("2014-04-04"),
    fechaFin: new Date("2016-04-04")
  };

  const cvData2 = {
    empresa: "Empresa Y", puesto: "Fullstack Developer",
    descripcion: "De todo un poco",
    fechaInicio: new Date("2017-04-04"),
    fechaFin: new Date("2019-04-04")
  };

  const cvData3 = {
    empresa: "Empresa Z", puesto: "Fullstack Developer",
    descripcion: "Programar saladamente de todo un Poco",
    fechaInicio: new Date("2020-04-04"),
    fechaFin: new Date("2021-04-04")
  };

  res.writeHead(200, { "Content-Type": "application/json" });
  var otherArray = [cvData1, cvData2, cvData3];
  var json = JSON.stringify({
    "experiencia-laboral": otherArray,
  });

  res.end(json);
});


app.post('/enviar-formulario', function(req, res) {
 
console.log(req.body.nombreContacto);
  if (req.body.nombreContacto == null || req.body.nombreContacto=='') {
     
    res.statusCode = 400;
  //  var json = JSON.stringify('Falta el nombre de contacto');
    res.end('Falta el nombre de contacto');
  } else {
    
    res.cookie('PW_2021-CV_Contacto', req.body.nombreContacto);

    var fs = require('fs')
    var writeData = fs.createWriteStream('data.txt', {
      flags: 'a' // 'a' means appending (old data will be preserved)
    })
  let dataToSave = req.body.nombreContacto + ',' + req.body.email + ',' +
            req.body.lastname + ',' + req.body.phone + ',' +
            req.body.motive +'\n';
    writeData.write(dataToSave)
    writeData.end();
 


    /*
        
    
        var readStream = fs.createReadStream('data.txt');
    
        readStream.on('data', function(chunk) {
          console.log(chunk.toString());
    
        });
    
    
    */



    var json = JSON.stringify("Datos agregados con exito");
    res.end(json);
  }


});

app.post('/*', function(req, res) {

  res.statusCode = 404;
  res.end("404 - No fue encontrado");

});


app.listen(process.env.PORT || 3000, (a) => {
  console.log("Servidor disponible en http://localhost:3000")
});

module.exports = app;