#!/usr/bin/env sh
apk add --no-cache bash nano
pip install --no-cache-dir -r requirements.txt
export FLASK_APP=src/api.py
export FLASK_ENV=development
# export FLASK_RUN_PORT=80
flask run --host=0.0.0.0 --port=8081