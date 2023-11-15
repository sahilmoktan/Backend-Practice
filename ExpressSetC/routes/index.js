var express = require("express");
var router = express.Router();

const userModel = require("./users");

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index");
});

/* GET login page. */
router.get("/login", function (req, res) {
  // login vayepaxi profile page show gardinu
  // yedi login navaye, yo route bata aru route ma lanu like /error to show fail
  // flash message allow u to see error all over other routes too
  req.flash("errorName", "errorData");
  req.flash("age", 12);
  res.send("error stored");
});

router.get("/check", function (req, res) {
  console.log(req.flash("errorName"), req.flash("age"));
  res.send("error in cansole");
});

router.get("/create", async function (req, res) {
  let userdatea = await userModel.create({
    username: "safaleo",
    nickname: "lama",
    discription: "smallgirl, class 11",
    categories: ["music", "guitaring", "computer"],
  });
  res.send(userdatea);
});

router.get("/find", async function (req, res) {
  var a = new RegExp('^Safal$', 'i')

  let foundData = await userModel.find({
    username: a,
  });
  res.send(foundData);
});

router.get("/findcat", async function (req, res) {
  
  let foundData = await userModel.find({
    categories: {$all: ['music']}
  });
  res.send(foundData);
});

router.get("/findbyDate", async function (req, res) {
  var date1 = new Date ('2023-11-14')
  var date2 = new Date ('2023-11-15')
  let foundData = await userModel.find({
  datecreated: {$gte: date1, $lte:date2}
  })
  res.send(foundData);

})

module.exports = router;
