// Express
const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();

// BodyParser
const bodyParser = require('body-parser');
const { response } = require('express');

// Bcrypt -> Passwords

const bcrypt = require('bcryptjs');

//Mongo DB
const { MongoClient } = require('mongodb');

// Mongoose
const mongoose = require('mongoose');
const User = require('./models/User');
const { db } = require('./models/User');
mongoose.connect("mongodb+srv://Megan:MongoDev1.@cluster0.bse9g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

// JWT (Tokens voor users)
const jwt = require('jsonwebtoken');
const JWT_TOKENS = 'hjfdsaioajhbdfg(*&*iuofhjgiogjfkngdmlmvcoppojgsijo$@%HJAFAJHFfbsjfjb('

// Port Localhost
const port = 8000;

// App use
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

// Routing
app.get('/', function (req, res) {
    res.render('index');
});

app.get('/information.handlebars', function (req, res) {
  res.render('information');
});

app.get('/confirm.handlebars', function (req, res) {
  res.render('confirm');
});


// Registreer functie

app.post('/api/register', async (req, res) => {
  console.log(req.body)

const { username, email, password} = req.body

  // User.create functie
  try {
    const response = await User.create({
      username,
      email,
      password,
    })
    console.log('Er is een nieuw account aangemaakt:', response)
  } catch(error) {
    if (error.code === 11000) {

  // Account bestaat al (11000 error = is al in database)

      return res.json({status: 'error', error: 'Deze naam is al in gebruik'})
    } throw error
    
    }

  // Status message wanneer account aanmaken succesvol is

  res.json({status:'ok'});
});

// Login functie

app.post("/login", async (req, res) => {

  try {
    const username  = req.body.username;
    const password = req.body.password;

    // Function die user zoekt aan de hand van ingegeven gegevens in login form

    User.findOne({username: username, password: password}, function(err, user){
      if(!user) {
        return res.status(404).send();
      }

      if(err) {
        console.log(err);
        return res.status(500).send();
      }
      
        //actie wanneer het account gevonden is
        console.log("ingelogd");
        res.json({
          message: 'Ingelogd'
        })

    });
  } catch (error) {
    (error);
  }
});

// Server port

app.listen(port, () =>{
  console.log(`Server started on port ${port}`);
});
