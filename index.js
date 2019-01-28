const express = require('express');
require('./services/passport');
const mongoose = require('mongoose');
const keys = require('./config/keys');
mongoose.connect(
  keys.mongoURI,
  () => {
    console.log('Connected to MongoDB');
  }
);

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
});
