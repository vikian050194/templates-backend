# docker run -it --rm -p 8081:8081 -v $(pwd):/var/www fapi
docker run -it --rm -p 8081:8081 -v $(pwd):/var/www -w "/var/www" python:3.7.5-alpine ./start.sh