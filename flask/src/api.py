#!/usr/bin/env python3

import os
from flask import Flask, request, make_response

app = Flask(__name__)


@app.route("/list", methods=["GET"])
def api():
    body = {"key1": "value1"}
    response = make_response(body, 200)
    return response


if __name__ == "__main__":
    port = int(os.environ.get("FLASK_RUN_PORT", 8081))
    debug = bool(os.environ.get("FLASK_DEBUG", False))
    app.run(host="127.0.0.1", port=port)