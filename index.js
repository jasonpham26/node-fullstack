const express = require('express');

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});
const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT);
