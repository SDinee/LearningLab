from flask import Flask, url_for

#Crie uma pasta chamada static no mesmo nível do seu arquivo principal (ou dentro do pacote).
#Tudo que estiver dentro dela ficará disponível automaticamente em /static/....
#Exemplo: static/style.css → acessível em http://localhost:5000/static/style.css.

#url_for('static', filename='style.css')

#O url_for('static', filename='style.css') gera a URL correta para o arquivo style.css.
#Isso é útil porque o Flask cuida do caminho, evitando que você escreva manualmente /static/style.css.

app = Flask(__name__, static_folder="Static")

@app.route('/')
def index():
    css_url = url_for('Static', filename='Style.css')
    return f'''
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
                <title>Teste Flask</title>
                <link rel="stylesheet" href="{css_url}">
            </head>
            <body>
                <h1>Olá, Sidne!</h1>
                <p>Agora o CSS está funcionando.</p>
            </body>
        </html>
    '''

if __name__ == "__main__":
    app.run(debug=True)
