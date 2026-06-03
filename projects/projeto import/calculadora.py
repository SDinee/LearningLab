def soma(a, b):
    return a + b

def subtracao(a, b):
    return a - b

def multiplicacao(a, b):
    return a * b

def divisao(a, b):
    if b != 0:
        return a / b
    else:
        return 'Erro: Divisão por zero não é permitida.'


def menu():
    while True:
        print('=========================================')
        print('---------Bem-vindo a calculadora---------')
        print('=========================================')

        print('1 - Somar')
        print('2 - Subtrair')
        print('3 - Multiplicar')
        print('4 - Dividir')
        print('5 - Sair')

        opcao = (input('Escolha uma opção: ')).strip()

        if opcao == '5':
            print('Saindo da calculadora. Até mais!')
            break

        elif opcao in ['1', '2', '3', '4']:
            try:
                num1 = float(input('Digite o primeiro número: '))
                num2 = float(input('Digite o segundo número: '))

                if opcao == '1':
                    resultado = soma(num1, num2)
                    print(f'O resultado da soma é: {resultado}')

                elif opcao == '2':
                    resultado = subtracao(num1, num2)
                    print(f'O resultado da subtração é: {resultado}')

                elif opcao == '3':
                    resultado = multiplicacao(num1, num2)
                    print(f'O resultado da multiplicação é: {resultado}')

                elif opcao == '4':
                    resultado = divisao(num1, num2)
                    print(f'O resultado da divisão é: {resultado}')

            except ValueError:
                print('Erro: Por favor, digite um número válido.')