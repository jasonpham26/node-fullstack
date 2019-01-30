const express = require('express');
const cookieSession = require('cookie-session');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const passport = require('passport');
require('./models/User');
require('./services/passport');

mongoose.connect(
  keys.mongoURI,
  () => {
    console.log('Connected to MongoDB');
  }
);

const app = express();

// Make use of cookie
app.use(
  cookieSession({
    // How long cookie gonna exist
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
});
