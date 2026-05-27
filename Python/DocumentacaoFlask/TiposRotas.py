from flask import Flask
from markupsafe import escape

app = Flask(__name__)

@app.route('/user/<string:username>')
def show_user_profile(username):
    return f'User {escape(username)}'
#/<string:username> captura qualquer texto sem barra.
#Exemplo: http://localhost:5000/user/Sidne → User Sidne.


@app.route('/post/<int:post_id>')
def show_post(post_id):
    return f'Post {post_id}'
#/<int:post_id> só aceita números inteiros positivos.
#Exemplo: http://localhost:5000/post/10 → Post 10.

@app.route('/peso/<float:kg>')
def show_peso(kg):
    return f'Peso {kg} kg'
#/<float:kg> aceita números decimais positivos.
#Exemplo: http://localhost:5000/peso/72.5 → Peso 72.5 kg.

@app.route('/path/<path:subpath>')
def show_subpath(subpath):
    return f'Subpath {escape(subpath)}'
#/<path:subpath> aceita texto com barras.
#Exemplo: http://localhost:5000/path/um/dois/tres → Subpath um/dois/tres.

@app.route('/item/<uuid:item_id>')
def show_item(item_id):
    return f'Item {item_id}'
#/<uuid:item_id> aceita apenas valores no formato UUID.
#Exemplo: http://localhost:5000/item/550e8400-e29b-41d4-a716-111155440000 → Item 550e8400-e29b-41d4-a716-111155440000.

if __name__ == "__main__":
    app.run(debug=True)
#O debug=True ativa o modo de depuração do Flask.
#Isso significa que o servidor vai mostrar mensagens de erro detalhadas e reiniciar automaticamente quando você alterar o código.
