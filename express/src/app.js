const port = process.env.PORT || 8081;

const express = require("express");
const morgan = require("morgan");
// const logger = require("./logger1");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const loggerOutputPredefinedFormat = "dev";
app.use(morgan(loggerOutputPredefinedFormat));
// app.use(logger);

// app.use("/", express.static("public"));

const router = require("./router");
app.use("/", router);

app.listen(port, function () {
    console.info("Listening on port " + port);
});