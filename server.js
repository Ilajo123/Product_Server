const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

app.use('/', ((req,res) => {
  res.send('My First Server');
});

app.listen(port, () => {
  console.log(`Listening to port ${port`};
});
