from flask import url_for
from flask import Flask
from markupsafe import escape

app = Flask(__name__)

@app.route('/')
def index():
    return 'index'

@app.route('/login')
def login():
    return 'login'

@app.route('/user/<username>')
def profile(username):
    return f'{username}\'s profile'

with app.test_request_context():
    print(url_for('index'))
    print(url_for('login'))
    print(url_for('login', next='/'))
    print(url_for('profile', username='John Doe'))
    
#O test_request_context() cria um contexto de requisição falso.
#Isso permite usar funções como url_for() mesmo fora de uma requisição real (por exemplo, dentro de um shell Python).
    
#url_for('nome_da_funcao') gera automaticamente a URL associada àquela função.
#Isso evita que você tenha que escrever as URLs manualmente.
#Exemplo: url_for('login') gera /login.
