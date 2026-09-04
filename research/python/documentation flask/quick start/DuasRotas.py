from flask import Flask
from markupsafe import escape

app = Flask(__name__)

@app.route('/')
def index():
    return 'Index Page'

#Quando você acessa http://localhost:5000/ (sem nada depois da barra), o Flask chama a função index().
#Essa função retorna o texto simples "Index Page"

@app.route('/hello')
def hello():
    return 'Hello, World'

#Quando você acessa http://localhost:5000/hello, o Flask chama a função hello().
#Essa função retorna o texto "Hello, World".