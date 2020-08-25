#!/usr/bin/env sh

# pip3 install --upgrade virtualenv
# virtualenv -p python3 venv
# source venv/bin/activate
# activate_venv=". venv/bin/activate"
# eval $activate_venv
# pip3 install --no-cache-dir -r requirements.txt

export FLASK_ENV=development
export FLASK_DEBUG=0
export FLASK_RUN_PORT=8081

flask run --host=127.0.0.1 --port=8081
# ./src/api.py