#São uma forma de guardar informações do usuário entre requisições.
#O Flask implementa isso em cima de cookies assinados criptograficamente.
#O usuário pode ver o conteúdo do cookie, mas não pode alterá-lo sem conhecer sua SECRET_KEY.

from flask import Flask, session, request, redirect, url_for

app = Flask(__name__)
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'  # chave secreta

@app.route('/')
def index():
    if 'username' in session:
        return f'Logged in as {session["username"]}'
    return 'You are not logged in'

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        session['username'] = request.form['username']
        return redirect(url_for('index'))
    return '''
        <form method="post">
            <p><input type=text name=username>
            <p><input type=submit value=Login>
        </form>
    '''

@app.route('/logout')
def logout():
    session.pop('username', None)  # remove da sessão
    return redirect(url_for('index'))

#Gerar chave
#python -c "import secrets; print(secrets.token_hex())"

#Tamanho do cookie: se você guardar muita coisa na sessão, pode ultrapassar o limite suportado pelo navegador.
#Dados sensíveis: evite colocar informações críticas diretamente na sessão.
#Servidor: se quiser guardar sessões no servidor (em vez de cookies), use extensões como Flask-Session.

#Sessões permitem login simples e persistência de dados entre requisições.
#Sempre configure uma SECRET_KEY forte.
#Para dados maiores ou mais sensíveis, prefira sessões no servidor com extensões.