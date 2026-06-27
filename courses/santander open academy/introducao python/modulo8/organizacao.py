# operacoes.py
def somar(a, b):
    return a + b


def subtrair(a, b):
    return a - b


# utilidades.py
def imprimir_mensagem(mensagem):
    print(mensagem)


def obter_nome_usuario():
    return input("Digite seu nome: ")

# Depois, podemos importar e utilizar essas funções em nosso programa principal.

"""
import operacoes
import utilidades


resultado = operacoes.somar(5, 3)
utilidades.imprimir_mensagem(f"O resultado da soma é: {resultado}")


nome = utilidades.obter_nome_usuario()
utilidades.imprimir_mensagem(f"Olá, {nome}!")
"""