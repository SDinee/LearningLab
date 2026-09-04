from flask import Flask, request

app = Flask(__name__)

#test_request_context
with app.test_request_context('/hello', method='POST'):
    assert request.path == '/hello'
    assert request.method == 'POST'

#Cria um contexto simples, passando só URL e método.


#request_context
environ = {
    'REQUEST_METHOD': 'POST',
    'PATH_INFO': '/hello',
    'wsgi.input': b''
}

with app.request_context(environ):
    assert request.method == 'POST'
    assert request.path == '/hello'

#Aqui você monta manualmente o ambiente WSGI completo. Mais flexível, mas mais trabalhoso.

#Para testes, você pode usar test_request_context() (mais simples) ou request_context() (mais avançado).