var express = require("express");
const Photo = require("../models/Photo");
var router = express.Router();

router.get("/", function (req, res, next) {
  Photo.find((err, photo) => {
    res.render("form.twig", {
      title: "Contact list",
      cont: photo,
    });
  });
});
router.post("/add", function (req, res, next) {
  new Photo({
    url: req.body.url,
    description: req.body.description,
    datecreation: req.body.datecreation,
  }).save((err, newcontact) => {
    if (err) console.log("error message : " + err);
    else {
      console.log(newcontact);

      res.json(" : Phone  :" + newcontact._id + " added");
    }
  });
});

module.exports = router;
