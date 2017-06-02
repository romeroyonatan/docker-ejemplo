from flask import Flask
from singing_girl import sing


app = Flask(__name__)


@app.route("/<int:number>")
def hello(number):
    return sing(number)


if __name__ == "__main__":
    app.run()
