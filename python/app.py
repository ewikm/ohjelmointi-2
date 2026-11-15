import json
from flask import Flask

app = Flask(__name__)
@app.route('/')
def index():
    return "lisää luku esim. /5"

@app.route("/<maara>")
def hello(maara):
    try:
        n = int(maara)

        if n <0:
            raise ValueError
        tulos = ""
        for i in range(n):
            tulos = tulos + "hello world!<br>"
        return tulos
    except ValueError:
        return "Virhe: anna kokonaisluku joka on 0 tai suurempi"

if __name__=="__main__":
    app.run(debug=True, host='127.0.0.2', port=5000)
    