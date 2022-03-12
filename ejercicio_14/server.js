/**
* En este ejercicio tendréis que crear una aplicación node con express que 
* mostrará una lista de nombres al entrar en una url en concreto.
* De esta manera veremos cómo confeccionar de manera correcta el manejador de 
* rutas con Express y cómo mostrar los elementos en una lista.
* Tendréis que crear una lista de nombres con una función para devolverlos. 
* Crearéis la carpeta controllers en la raíz del proyecto. Dentro de esta, irá el archivo que contenga la función para devolver los nombres.
* Por último, tendréis que crear las plantillas par poder mostrar los nombres mediante HTML.
* Tendréis que subir el proyecto al campus.
 */

const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public/'));

app.listen(port, function() {
    console.log('Servidor web escuchando en el puerto 3000');
  });


app.get('/',(req,res) => {
    res.render('index.html');
}); 

console.log('Servidor iniciado');