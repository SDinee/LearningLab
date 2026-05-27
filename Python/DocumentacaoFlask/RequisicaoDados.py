from flask import Flask, request


app = Flask(__name__)

@app.route('/login', methods=['POST', 'GET'])
#Se for POST, ele valida usuário e senha. Se for GET, apenas mostra o formulário.
def login():
    error = None
#request.method → retorna o método HTTP usado (GET, POST, PUT, etc.).
    if request.method == 'POST':
#request.form → acessa os campos enviados via formulário HTML.
        if valid_login(request.form['username'],
                       request.form['password']):
            return log_the_user_in(request.form['username'])
        else:
            error = 'Invalid username/password'
    # the code below is executed if the request method
    # was GET or the credentials were invalid
    return render_template('login.html', error=error)


#request.args → acessa parâmetros passados na query string.
searchword = request.args.get('key', '')

#Use request.method para saber se é GET ou POST.
#Use request.form para dados enviados em formulário.
#Use request.args para parâmetros na URL.
