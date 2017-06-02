const express = require('express')
const request = require('request');
const app = express()

// URL del backend que hará el trabajo de cantar el numero
const endpoint = process.env.ENDPOINT

// ubicacion y motor de templates
app.set('views', './views');
app.set('view engine', 'pug');

// Defino el index
app.get('/', function (req, res) {
    let numero = req.query.numero;
    if (numero != undefined && numero >= 0) {
        let path = endpoint + numero;
        console.log('Consultando backend', path);
        request(path, function(error, response, body) {
            if (error) console.error('error:', error);
            res.render('index', { nombre: body, numero: numero });
        });
    } else {
        res.render('index');
    }
})

// inicio servidor
app.listen(3000, function () {
  console.log('Listening on port 3000!')
})
