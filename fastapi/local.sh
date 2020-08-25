#!/usr/bin/env sh

# pip3 install --upgrade virtualenv
# virtualenv -p python3 venv
# activate_venv=". venv/bin/activate"
# eval $activate_venv
# pip3 install --no-cache-dir -r requirements.txt

uvicorn src.api:app --host=127.0.0.1 --port=8081  
# ./src/api.py