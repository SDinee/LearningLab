from flask import Flask, render_template
from markupsafe import Markup

app = Flask(__name__)

@app.route('/')
def index():
    # Exemplo 1: usando Markup com interpolação
    exemplo1 = Markup('<strong>Hello %s!</strong>') % '<blink>hacker</blink>'
    # Resultado: <strong>Hello &lt;blink&gt;hacker&lt;/blink&gt;!</strong>

    # Exemplo 2: escapando manualmente
    exemplo2 = Markup.escape('<blink>hacker</blink>')
    # Resultado: &lt;blink&gt;hacker&lt;/blink&gt;

    # Exemplo 3: removendo tags HTML
    exemplo3 = Markup('<em>Marked up</em> &raquo; HTML').striptags()
    # Resultado: Marked up » HTML

    return render_template(
        "Markup.html",
        exemplo1=exemplo1,
        exemplo2=exemplo2,
        exemplo3=exemplo3
    )

if __name__ == "__main__":
    app.run(debug=True)
    
#Markup('<strong>Hello %s!</strong>') % '<blink>hacker</blink>' → insere conteúdo, mas escapa tags perigosas.
#Markup.escape('<blink>hacker</blink>') → transforma em texto seguro.
#Markup(...).striptags() → remove todas as tags e deixa só texto.


