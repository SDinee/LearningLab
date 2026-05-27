from flask import Flask
from markupsafe import escape

app = Flask(__name__)

@app.route('/projects/')
def projects():
    return 'The project page'

@app.route('/about')
def about():
    return 'The about page'

#Com barra no final (/projects/) → o Flask aceita tanto /projects/ quanto /projects (faz redirecionamento automático).
#Sem barra no final (/about) → o Flask só aceita exatamente /about. Se você colocar /about/, dá erro.