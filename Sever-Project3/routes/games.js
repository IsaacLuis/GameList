var express = require("express");
var router = express.Router();

// Models to populate 

router.get('/', (req, res, next) => {
    Post.find()
    /*  
    .populate('contributor')
      .populate('country')
      */
      .sort({createdAt: -1})
      .then((foundGame) => {
          res.json(foundGame)
      })
      .catch((err) => {
          console.log(err)
      })
  });

  module.exports = router;