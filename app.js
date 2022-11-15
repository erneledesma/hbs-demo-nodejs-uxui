
const express = require('express')
const app = express()

const hbs = require('hbs');

app.use(express.static(__dirname + './public'))

hbs.registerPartials(__dirname + '/views/parciales', function (err) {});

// Express HBS engine
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
     
    res.render('home')
})

app.get('/nosotros', (req, res) => {
     
    res.render('nosotros')
})




app.listen(3000)
console.log('Escuchando en el puerto 3000')