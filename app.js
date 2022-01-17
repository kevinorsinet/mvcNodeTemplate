const express = require('express')
const app = express()

// Config moteur de templating
app.set('view engine', 'ejs');

// Controller
app.get('/', function (req, res) {
  res.render('index')
})

app.listen(3000);