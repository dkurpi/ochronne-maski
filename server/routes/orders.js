const express = require("express");
const router = express.Router();
var ObjectId = require("mongodb").ObjectID;

//=================================
//             Orders
//=================================

router.post("/newOrder", (req, res, err) => {
  const newOrder = req.body;
  const collection = req.app.db.db("ochronne-maski").collection("zamowienia");
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

router.post("/adminLogin", (req, res) => {
  const _login = process.env.LOGIN;
  const _password = process.env.PASSWORD;
  const { login, password } = req.body;
  if (login === _login && password === _password)
    res.json({
      isAuth: true,
      key: process.env.ADMIN_KEY,
    });
  else res.json({ isAuth: false });
});

router.put("/modifyOrder", (req, res) => {
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
