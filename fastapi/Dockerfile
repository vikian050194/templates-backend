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