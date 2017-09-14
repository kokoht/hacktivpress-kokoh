const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
mongoose.connect('mongodb://localhost/hpkokoh', function(err){
  if(err) {console.log(err);}
  else {
  console.log('db connected');}
})
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.json({type: 'application/x-www-form-urlencoded'}))

app.use(cors());

// const articles = require('./routers/article')
const user = require('./routes/user')

app.get('/', function(req,res){
  res.send('express is listening')
})

app.use('/user', user)
// app.use('/articles', articles)

app.listen(3000)
