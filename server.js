const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

app.get('/', (req,res) => {
  res.send('My First Server');
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT`};
});
