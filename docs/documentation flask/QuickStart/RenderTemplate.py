from flask import Flask, render_template

app = Flask(__name__)

@app.route('/Hello/')
@app.route('/Hello/<name>')
def Hello(name=None):
    return render_template('Hello.html', person=name)
                           
if __name__ == "__main__":
    app.run(debug=True)
    
#A rota /hello/ mostra Hello, World!.
#A rota /hello/Sidne mostra Hello Sidne!.

#O CSS é aplicado porque o template referencia url_for('static', filename='style.css').

#Sintaxe básica Variáveis: {{ variavel }} → insere o valor da variável no HTML.
#Blocos de controle: {% instrução %} → executa lógica (if, for, etc.).
#Comentários: {# comentário #} → não aparece no HTML final.