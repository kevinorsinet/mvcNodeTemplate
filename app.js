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
  const head = {
    title: "Acceuil"
  }
  console.log(user.name);
  // res.render('index', user)
  // res.render('index', {user: user})
  // res.render('index', { toto: user})
  res.render('index', {user, head})
})

app.get('/contact', function(req,res){
  const head = {
    title: "Contact"
  }
  res.render('contact' , {head})
})

app.get('/articles', function (req, res) {
  res.render('articles')
})

app.get('/*', function (req,res) {
  res.render('404')
})

app.listen(3000);