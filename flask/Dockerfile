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