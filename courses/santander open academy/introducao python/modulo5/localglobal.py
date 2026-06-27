def funcao():
    variavel_local = 10
    print(variavel_local)  # Acessível dentro da função


variavel_global = 20


def funcao2():
    print(variavel_global)  # Acessível de qualquer lugar


funcao()  # Imprime 10
funcao2()  # Imprime 20
print(variavel_global)  # Imprime 20
print(variavel_local)  # Gera um erro, a variável não está definida neste escopo.

"""As variáveis definidas dentro de uma função têm um escopo local, o que significa que só são acessíveis dentro da função. 
Por outro lado, as variáveis definidas fora de qualquer função têm um escopo global e podem ser acessadas de qualquer parte do programa.
"""