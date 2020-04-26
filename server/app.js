const express = require("express");
const app = express();
const cors = require("cors");

const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors());

app.get("/", function (req, res) {
  res.json({
    message: "Hello World",
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
