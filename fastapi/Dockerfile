# docker image build --tag fastapi-app .

# docker run -it --rm -p 8081:8081 -v $(pwd):/var/www fastapi-app
# docker run -it --rm -p 8081:8081 -v $(pwd):/var/www -w "/var/www" python:3.7.5-alpine ./start.sh

# pip3 install --upgrade virtualenv
# virtualenv -p python3 venv
# activate_venv=". venv/bin/activate"
# eval $activate_venv
# pip3 install --no-cache-dir -r requirements.txt

# uvicorn src.api:app --host=127.0.0.1 --port=8081
# ./src/api.py

# apk add --no-cache bash nano gcc libc-dev make
# pip install --no-cache-dir -r requirements.txt
# uvicorn src.api:app --host=0.0.0.0 --port=8081

FROM python:3.7.5-alpine
RUN apk add --no-cache bash nano gcc libc-dev make
COPY ./requirements.txt /var/www/requirements.txt
RUN pip install --no-cache-dir -r /var/www/requirements.txt
WORKDIR /var/www/
ENV PORT=8081
EXPOSE ${PORT}
CMD [ "uvicorn", "src.api:app", "--host=0.0.0.0", "--port=8081" ]
# ENTRYPOINT [ "uvicorn", "src.api:app", "--host=0.0.0.0", "--port=8081" ]
# COPY . .