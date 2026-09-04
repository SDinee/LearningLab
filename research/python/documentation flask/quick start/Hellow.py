from flask import Flask
#Aqui você está trazendo a classe Flask da biblioteca flask.
#Essa classe é a base para criar uma aplicação web.

app = Flask(__name__)
#Flask(__name__) cria a aplicação.
#O parâmetro __name__ ajuda o Flask a saber onde está o arquivo principal do projeto, para localizar recursos como templates e arquivos estáticos.

@app.route("/")
#@app.route("/") é um decorador que diz ao Flask:
#"Quando alguém acessar a URL / (a página inicial), execute a função logo abaixo."


def hello_world():
    return "<p>Hello, World!</p>"

#Essa função será chamada quando alguém visitar a página inicial.
#O return envia uma resposta ao navegador.
#No caso, retorna um pequeno trecho de HTML: <p>Hello, World!</p>.

if __name__ == "__main__":
    app.run()
#Isso inicia o servidor web local