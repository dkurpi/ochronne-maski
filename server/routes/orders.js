const express = require("express");
const router = express.Router();
var ObjectId = require("mongodb").ObjectID;

//=================================
//             Orders
//=================================

router.post("/new-order", (req, res, err) => {
  const newOrder = req.body;
  const collection = req.app.db.db("ochronne-maski").collection("zamowienia");
  console.log("newor", newOrder);
  res.json({ isSaved: true });
  collection.insertOne(newOrder);
});

router.get("/orders", (req, res) => {
  const collection = req.app.db.db("ochronne-maski").collection("zamowienia");
  collection
    .find({})
    .toArray()
    .then((response) => {
      const orders = { orders: response };
      res.json({
        orders,
      });
    });
});

router.post("/AdminLogin", (req, res) => {
  const _login = "kacztex";
  const _password = "kacztex123";
  const { login, password } = req.body;
  if (login === _login && password === _password)
    res.json({
      isAuth: true,
      key: "eyJrIjoiT0tTcG1pUlY2RnVKZTFVaDFsNFZXdE9ZWmNrMkZYbk",
    });
  else res.json({ isAuth: false });
});

router.put("/orderModify", (req, res) => {
  const { target, status } = req.body;
  const collection = req.app.db.db("ochronne-maski").collection("zamowienia");
  const obj = ObjectId(target);
  collection.updateOne(
    { _id: obj },
    {
      $set: {
        status: status,
      },
    },
    {}
  );
  res.json({
    message: "Modified",
  });
});

module.exports = router;
