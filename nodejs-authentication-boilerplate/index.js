const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors')

const PORT = process.env.PORT || 3001;
const app = express();

const dotenv = require('dotenv');
dotenv.config();

// Static directory
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}))
//Models, routes & middleware
app.use(require('./routes/users'));


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
