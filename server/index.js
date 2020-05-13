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
app.use("/api", require("./routes/orders"));

const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://local:dawidrw123@cluster0-ehgqo.mongodb.net/test?authSource=admin&replicaSet=Cluster0-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass%20Community&retryWrites=true&ssl=true";

MongoClient.connect(
  uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, db) => {
    console.log("connected to MongoClient");
    app.db = db;


    /////////////PRODUCTION
    if (process.env.NODE_ENV === "production") {
      app.use(express.static("client/build"));
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
