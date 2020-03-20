const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

//////////////MONGODB
const MongoClient = require("mongodb").MongoClient;
const uri =
  // "mongodb+srv://local :<dawidrw123>@cluster1-qkch5.mongodb.net/test?retryWrites=true&w=majority";
  "mongodb+srv://local:dawidrw123@cluster0-ehgqo.mongodb.net/test?authSource=admin&replicaSet=Cluster0-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass%20Community&retryWrites=true&ssl=true";

MongoClient.connect(
  uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  (err, db) => {
    console.log("connected to MongoClient");

    ///////APIS
    app.post("/api/new-order", (req, res, err) => {
      const newOrder = req.body;

      const collection = db.db("ochronne-maski").collection("zamowienia");
      console.log("newor", newOrder);
      res.json({ isSaved: true });
      collection.insertOne(newOrder);
    });

    app.get("/api/orders", (req, res) => {
      const collection = db.db("ochronne-maski").collection("zamowienia");

      collection
        .find({})
        .toArray()
        .then(response => {
          const orders = { orders: response };
          res.json({
            orders
          });
          console.log(response);
        });
    });

    app.post("/api/AdminLogin", (req, res) => {
      const _login = "kacztex";
      const _password = "kacztex123";

      const { login, password } = req.body;
      console.log(login, password);

      if (login === _login && password === _password)
        res.json({
          isAuth: true,
          key: "eyJrIjoiT0tTcG1pUlY2RnVKZTFVaDFsNFZXdE9ZWmNrMkZYbk"
        });
      else res.json({ isAuth: false });
    });
    /////////////PRODUCTION
    if (process.env.NODE_ENV === "production") {
      // Set static folder
      app.use(express.static("client/build"));

      // index.html for all page routes
      app.get("*", (req, res) => {
        res.sendFile(
          path.resolve(__dirname, "../client", "build", "index.html")
        );
      });
    }

    const port = process.env.PORT || 5000;

    app.listen(port, () => {
      console.log(`Server Running at ${port}`);
    });
  }
);
