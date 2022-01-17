const express = require('express')
const app = express()

// Config moteur de templating
app.set('view engine', 'ejs');


// Controller
app.get('/', function (req, res) {
  // Data
  const user = {
    name: "Kévin",
    age: 27
  }
  console.log(user.name);
  // res.render('index', user)
  // res.render('index', {user: user})
  // res.render('index', { toto: user})
  res.render('index', {user})
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