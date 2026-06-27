# Python permite definir funções que aceitem um número variável de argumentos. Isso é feito utilizando o operador * antes do nome do parâmetro.

def soma_variavel(*numeros):
    total = 0
    for numero in numeros:
        total += numero
    return total


print(soma_variavel(1, 2, 3))  # Imprime 6
print(soma_variavel(4, 5, 6, 7))  # Imprime 22