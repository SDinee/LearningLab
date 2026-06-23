from flask import Flask,render_template

app = Flask(__name__)

@app.errorhandler(404)
def page_not_found(error):
    return render_template('PageNotFound.html'), 404

#Aqui o Flask renderiza page_not_found.html e retorna o status 404.