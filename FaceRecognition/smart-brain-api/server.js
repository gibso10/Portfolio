const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'Zooyork1',
      database : "'smart-brain'"
    }
  });



const app = express();
app.use(bodyParser.json());
app.use(cors());



app.get('/', (req, res) => { res.send(database.users)});
app.post('/signin', signin.handleSignin(db, bcrypt));
app.post('/register', register.handleRegister(db, bcrypt)); 
app.get('/profile/:id', (req, res) => { profile.handleProfileGet(req, res, db)}); //Can take out the req,res and place it in the .js file like examples above
app.put('/image', (req, res) => { image.handleImage(req, res, db)});
app.post('/imageurl', (req, res) => { image.handleApiCall(req, res)});

// bcrypt.hash("bacon", null, null, function(err, hash) {
//     // Store hash in your password DB.
// });

// // Load hash from your password DB.
// bcrypt.compare("bacon", hash, function(err, res) {
//     // res == true
// });
// bcrypt.compare("veggies", hash, function(err, res) {
//     // res = false
// });

app.listen(3000, () => {
    console.log('app is running on port 3000')
})

/*
/ --> res = this is working
/singin --> POST = success/fail
/register --> POST = user
/profile/:userId --> GET = user
/image --> PUT --> user

*/