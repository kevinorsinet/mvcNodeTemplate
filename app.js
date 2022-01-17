const express = require('express')
const app = express()

// Config moteur de templating
app.set('view engine', 'ejs');

// Controller
app.get('/', function (req, res) {
  res.render('index')
})

app.get('/contact', function(req,res){
  res.render('contact')
})

app.get('/articles', function (req, res) {
  res.render('articles')
})

app.get('/*', function (req,res) {
  res.render('404')
})

app.listen(3000);