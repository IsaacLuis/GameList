var express = require("express");
var router = express.Router();

const User = require('../models/User.model')
const Games = require('../models/Games.model')

// games_pick
router.post('/add-wish/:userId', (req, res, next) => {




  User.findByIdAndUpdate(req.params.userId, {
    $addToSet: { games_pick: req.body.game }
  },
    { new: true })
    .then((updatedUser) => {
      return updatedUser.populate('games_pick')
    })
    // .then((populated) => {
    //     return populated.populate('posts')
    // })
    .then((second) => {
      res.json(second)
    })
    .catch((err) => {
      console.log(err)
    })


})





module.exports = router;