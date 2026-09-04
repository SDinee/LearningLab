from flask import Flask, request

app = Flask(__name__)

@app.route('/upload', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        f = request.files['the_file']   # pega o arquivo enviado
        f.save('/var/www/uploads/uploaded_file.txt')  # salva no servidor
    return "Upload feito!"


#request.files['the_file'] → acessa o arquivo enviado pelo formulário.
#.save() → salva o arquivo no caminho indicado.

#Cada arquivo tem o atributo filename, que mostra o nome dado pelo cliente.
#⚠️ Mas esse valor pode ser falsificado (não confie diretamente).

from werkzeug.utils import secure_filename

@app.route('/upload', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        file = request.files['the_file']
        filename = secure_filename(file.filename)  # sanitiza o nome
        file.save(f"/var/www/uploads/{filename}")
    return "Upload seguro!"

#O secure_filename() garante que o nome seja seguro para salvar no servidor.

#EXEMPLO HTML

#<form method="POST" enctype="multipart/form-data" action="/upload">
#    <input type="file" name="the_file">
#    <input type="submit" value="Upload">
#</form>

#enctype="multipart/form-data" é obrigatório para upload de arquivos.
#O campo name="the_file" precisa bater com o que você usa em request.files['the_file'].