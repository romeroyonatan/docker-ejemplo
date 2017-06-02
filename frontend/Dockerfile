FROM node:6-alpine

ENV ENDPOINT=http://backend:5000/

ADD . /app

WORKDIR app

RUN npm install

CMD node app.js