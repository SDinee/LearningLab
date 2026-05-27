from flask import request
from flask import Flask

app = Flask(__name__)

#Navegadores e APIs usam diferentes métodos para acessar URLs.
#Os mais comuns são:
#GET → usado para pedir dados (ex.: abrir uma página).
#POST → usado para enviar dados (ex.: enviar formulário).
#Outros: PUT, DELETE, PATCH, etc.
#Por padrão, o Flask só responde a GET.

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        return #do_the_login()
    else:
        return #show_the_login_form()
    
#Aqui a rota /login aceita GET e POST.
#Se for GET → mostra o formulário (show_the_login_form()).
#Se for POST → processa o login (do_the_login()).
#Útil quando você quer usar a mesma URL para mostrar e enviar dados.

    
@app.get('/login')
def login_get():
    return #show_the_login_form()

@app.post('/login')
def login_post():
    return # do_the_login()

#/login com GET → chama login_get().
#/login com POST → chama login_post().
#Mais organizado quando cada método tem lógica própria.

#Se você define GET, o Flask automaticamente trata também o HEAD (usado para pedir só cabeçalhos).
#O OPTIONS também é implementado automaticamente (usado para perguntar quais métodos a rota aceita).