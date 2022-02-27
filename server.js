const express = require('express');
const exphbs  = require('express-handlebars');
 const app = express();
 const port = 8000;

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// Routing
app.get('/', function (req, res) {
    res.render('index');
});

app.get('/information', function (req, res) {
  res.render('information');
});

app.get('/rank', function (req, res) {
  res.render('rank');
});

app.get('/agent', function (req, res) {
  res.render('agent');
});

pp.get('/confirm', function (req, res) {
  res.render('confirm');
});

app.listen(port, () =>{
  console.log(`Server started on port ${port}`);
});
