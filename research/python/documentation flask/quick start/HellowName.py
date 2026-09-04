from flask import Flask
from flask import request
from markupsafe import escape
#request: permite acessar dados da requisição feita pelo navegador (como parâmetros, formulários, cabeçalhos).
#escape: função que protege contra injeção de código malicioso. Se alguém tentar enviar HTML ou JavaScript no parâmetro, o escape transforma em texto simples, evitando ataques

# Aqui você cria a aplicação Flask
app = Flask(__name__)

@app.route("/Hellow")
#Cria uma rota chamada /hello.
#Isso significa que, ao acessar http://localhost:5000/hello, o Flask vai executar a função logo abaixo.

def hello():
    name = request.args.get("name", "Flask")
    return f"Hello, {escape(name)}!"

# Só roda o servidor se o arquivo for executado diretamente
if __name__ == "__main__":
    app.run()