#Se você quiser mexer no objeto de resposta antes de devolver, use make_response():
from flask import Flask,make_response, render_template

app = Flask(__name__)

@app.errorhandler(404)
def not_found(error):
    # cria objeto de resposta com HTML e status 404
    resp = make_response(render_template('error.html'), 404)

    # adiciona cabeçalho extra na resposta
    resp.headers['X-Something'] = 'A value'

    # retorna o objeto de resposta final
    return resp

#String → vira resposta com 200 OK e Content-Type: text/html.
#Dicionário ou lista → vira JSON automaticamente com jsonify().
#Tupla → pode incluir resposta + status + headers.