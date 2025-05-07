const express = require('express');
const app = express();
const logEvents = require('./middleware/logEvents');
const PORT  = process.env.PORT || 3000;
const cors = require('cors')
const corsOption = require('./config/corsOptions');
const credentials = require('./config/credentials');

app.use((req,res,next) => {
  logEvents(`${req.method} - ${req.headers.origin} - ${req.url}`, 'serverLog.txt');
  next();
});
app.use(express.urlencoded({extended: false}));
app.use(credentials);
app.use(cors(corsOption));
app.get('/', (req,res,next) => {
  res.send('Hi');
});

app.listen(PORT, () => {
  console.log(`Listening to PORT ${PORT}`)
});


