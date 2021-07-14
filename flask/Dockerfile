# docker image build --tag flask-app .

# pip3 install --upgrade virtualenv
# virtualenv -p python3 venv
# source venv/bin/activate
# activate_venv=". venv/bin/activate"
# eval $activate_venv
# pip3 install --no-cache-dir -r requirements.txt

# export FLASK_ENV=development
# export FLASK_DEBUG=0
# export FLASK_RUN_PORT=8081

# flask run --host=127.0.0.1 --port=8081
# ./src/api.py

# docker run -it --rm -p 8081:8081 -v $(pwd):/var/www flask-app
# docker run -it --rm -p 8081:8081 -v $(pwd):/var/www -w "/var/www" python:3.7.5-alpine ./start.sh

# apk add --no-cache bash nano
# pip install --no-cache-dir -r requirements.txt
# export FLASK_APP=src/api.py
# export FLASK_ENV=development
# export FLASK_DEBUG=0
# export FLASK_RUN_PORT=8081
# flask run --host=0.0.0.0 --port=8081
# flask run --host=0.0.0.0

FROM python:3.7.5-alpine
RUN apk add --no-cache bash nano
COPY ./requirements.txt /var/www/requirements.txt
RUN pip install --no-cache-dir -r /var/www/requirements.txt
WORKDIR /var/www/
ENV FLASK_APP=src/api.py
ENV FLASK_ENV=development
ENV PORT=8081
EXPOSE ${PORT}
CMD [ "flask", "run", "--host=0.0.0.0", "--port=8081" ]
# ENTRYPOINT [ "flask", "run", "--host=0.0.0.0", "--port=8081" ]
# COPY . .