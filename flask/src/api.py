from flask import Flask, request, make_response

app = Flask(__name__)

@app.route('/list', methods=['GET'])
def api():
    body = {"key1": "value1"}
    response = make_response(body, 200)
    return response