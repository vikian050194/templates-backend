const port = process.env.PORT || 8080;

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const router = require("./router");
app.use("/", router);

app.listen(port, function () {
    console.info(`Server is started at ${(new Date()).toLocaleString()} on port ${port} `);
});