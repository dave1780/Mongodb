const mongoose = require('mongoose');

require('dotenv').config('./env');

mongoose.set('strictQuery', false);

const uri = process.env.uri;

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('database is connected');
  })
  .catch(() => {
    console.log('error occured ');
  });
