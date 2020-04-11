const http = require("http");
const url = require("url");
const port = process.env.PORT || 8080;

http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "application/json" });

    const { query } = url.parse(req.url, true);
    const { id } = query;

    const result = {
        next: parseInt(id) + 1
    };

    res.write(JSON.stringify(result));
    res.end();
}).listen(port);

console.info(`Server is listening on port ${port}`);