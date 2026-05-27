import calculadora
import lista
# Importa os módulos completos para evitar conflitos de nomes
# e mantém o código mais organizado.

while True:
    print('========================')
    print('---------Opções---------')
    print('========================')

    print ('1 - Calculadora')
    print ('2 - criar uma lista')


    opcao = input('Escolha uma opção: ').strip()


  # Chama a função menu do módulo calculadora para iniciar a calculadora.  
    if opcao == '1':
        calculadora.menu()

# Chama a função menu do módulo lista para iniciar a lista.
    elif opcao == '2':
        lista.menu()

    else:
        print ('Opção inválida')
    