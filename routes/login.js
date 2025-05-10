const usersDB = {
  users: require('../data/user'),
  setUsers: function (data) {this.users = data}
}

const express = require('express');

const router = express.Router();

router.post('/', async (req,res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({"message": "Username and Password Required"})
  }
 
  const foundUser = await usersDB.users.find(person => person.username === username);
  if (!foundUser) {
    return res.sendStatus(401);
  }
  if (foundUser) {
    if (foundUser.password === password) {
      res.send(204).json({"message": "foundMatch"})
    } else {
      return res.sendStatus(401);
    }
  }
  
});

module.exports = router;