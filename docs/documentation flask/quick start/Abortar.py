from flask import Flask,abort

app = Flask(__name__)

@app.route('/login')
def login():
    abort(401)  # acesso negado
    # qualquer código depois disso não será executado

#abort(codigo) → encerra a requisição imediatamente com o código HTTP indicado.
#Exemplo: 401 (não autorizado), 403 (proibido), 404 (não encontrado), 500 (erro interno).