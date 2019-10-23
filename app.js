const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport')
const config = require('./config/database')
const { PORT } = process.env
require("./config/passport")(passport);

const userRoutes = require('./routes/users');
const adminRoutes = require('./routes/admin');

//connection to database
const options = {
  useNewUrlParser: true
}

mongoose.connect(config.mLab_database, options)
  .then(() => console.log('Connected to DB'))
  .catch(err => console.log(`Error connecting to DB: ${err}`))

app.use(cors());

// Add middleware to console log every request
app.use(function (req, res, next) {
  console.log(req.method, req.url);
  next();
});


// Set static directory before defining routes and allow angular to be on the same port
app.use(express.static(path.join(__dirname, 'public')));


// Enable parsing of posted forms
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session())


// Add some routing
app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

const port = PORT || 8000
app.listen(port, () => console.log(`Server running on http://localhost:${port}`))