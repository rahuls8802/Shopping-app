const express = require("express");
const Product = require("../models/product");
const router = express.Router();
const { ensureAuth } = require("../config/auth");
// Welcome page
router.get("/", (req, res) => res.render("welcome"));

// Forget page
router.get("/forget", (req, res) => res.render("forget"));

// Shopping page ensureAuth,
router.get("/shopping", (req, res) => {
  Product.find({}, function (err, products) {
    res.render("shopping", {
      products: products,
    });
  });
});

// Overview page ensureAuth,
router.get("/overview/:id", function (req, res) {
  const dataId = req.params.id;
  Product.findOne({ _id: dataId }, function (err, variable) {
    res.render("overview", {
      variable,
    });
  });
});

// Shopping Search
router.post("", function (req, res) {
  let search = req.body.search;
  Product.findOne({ name: search }, function (err, variable) {
    res.render("shoppingSearch", {
      variable,
    });
    console.log(search);
  });
});

module.exports = router;
