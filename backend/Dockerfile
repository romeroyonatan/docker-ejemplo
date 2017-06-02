FROM python:2.7-alpine

ENV FLASK_APP=app.py

ADD . /app

WORKDIR /app

RUN pip install -r requirements.txt

EXPOSE 5000

CMD flask run --host=0.0.0.0