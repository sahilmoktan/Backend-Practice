var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index");
});

/* GET login page. */
router.get("/login", function (req, res) {
  // login vayepaxi profile page show gardinu
  // yedi login navaye, yo route bata aru route ma lanu like /error to show fail
  // flash message allow u to see error all over other routes too
  req.flash("errorName", 'errorData');
  req.flash("age", 12);
  res.send('error stored')
});

router.get("/check", function (req, res) {
  console.log(req.flash("errorName"), req.flash('age'));
  res.send('error in cansole')

});

module.exports = router;
