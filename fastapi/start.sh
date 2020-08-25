#!/usr/bin/env sh

apk add --no-cache bash nano gcc libc-dev make
pip install --no-cache-dir -r requirements.txt
uvicorn src.api:app --host=0.0.0.0 --port=8081  