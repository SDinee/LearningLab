#🔹 Lendo cookies
from flask import request

app = Flask(__name__)

@app.route('/')
def index():
    username = request.cookies.get('username')
    # cookies.get evita erro se o cookie não existir
    return f"Usuário: {username}"

#request.cookies é um dicionário com todos os cookies enviados pelo navegador.
#Use .get() para não dar erro caso o cookie não exista.

#🔹 Gravando cookies
from flask import make_response, render_template

@app.route('/')
def index():
    resp = make_response(render_template("index.html"))
    resp.set_cookie('username', 'Sidne')
    return resp

#Cookies são definidos no objeto de resposta.
#(chave, valor) adiciona o cookie ao cabeçalho da resposta.
#O navegador guarda e envia de volta em cada requisição.

#🔹 Segurança
#O valor de cookie pode ser falsificado pelo cliente.
#Por isso, se você precisa guardar informações sensíveis (login, permissões), use sessões em vez de cookies diretos.
#O Flask já tem suporte a sessões com criptografia, usando uma SECRET_KEY.

from flask import Flask, session

app = Flask(__name__)
app.secret_key = "chave_super_secreta"  # usada para assinar os cookies

@app.route('/set')
def set_session():
    session['username'] = 'Sidne'
    return "Sessão criada!"

@app.route('/get')
def get_session():
    return f"Usuário: {session.get('username', 'não logado')}"

@app.route('/logout')
def logout():
    session.pop('username', None)
    return "Sessão encerrada!"

#/set → cria a sessão e guarda username = Sidne
#/get → lê a sessão e mostra o valor.
#/logout → remove a chave username da sessão.


#Expiração automática:
app.config['PERMANENT_SESSION_LIFETIME'] = 1800  # 30 minutos
session.permanent = True

#Sessões são mais seguras que cookies diretos.
#Use session como um dicionário para guardar dados do usuário.
#Configure SECRET_KEY para proteger contra falsificação.
#Pode expirar automaticamente ou ser persistente.