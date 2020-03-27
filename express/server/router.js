const router = require("express").Router();

if (process.env.NODE_ENV === "production") {
    router.route("/")
        .get(function (req, res) {
            res.status(200).end();
        });
}

module.exports = router;