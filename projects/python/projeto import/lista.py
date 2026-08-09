def verificar_item(lista, item):
    return item in lista


def remover_item(lista, item):
    if item in lista:
        lista.remove(item)
    else:
        print(f'\nItem "{item}" não encontrado na lista.')

def adicionar_item(lista, item):
    lista.append(item)

def exibir_lista(lista):
    if lista:
        print('\nItens na lista:')
        for i, item in enumerate(lista, start=1):
            print(f'{i}. {item}')
    else:
        print('\nA lista está vazia.')


def menu():
    lista = []

    while True:
        print('========================')
        print('---------Opções---------')
        print('========================')

        print('1 - Adicionar item')
        print('2 - Remover item')
        print('3 - Verificar item')
        print('4 - Exibir lista')
        print('5 - Sair')

        opcao = input('Escolha uma opção: ').strip()

        if opcao == '5':
            print('Saindo da lista. Até mais!')
            break

        elif opcao == '1':
            item = input('Digite o item a ser adicionado: ').strip()
            adicionar_item(lista, item)
            print(f'Item "{item}" adicionado à lista.')

        elif opcao == '2':
            item = input('Digite o item a ser removido: ').strip()
            remover_item(lista, item)
            print(f'Item "{item}" removido da lista.')

        elif opcao == '3':
            item = input('Digite o item a ser verificado: ').strip()
            if verificar_item(lista, item):
                print(f'Item "{item}" encontrado na lista.')
            else:
                print(f'Item "{item}" não encontrado na lista.')

        elif opcao == '4':
            exibir_lista(lista)

        else:
            print('Opção inválida. Por favor, escolha uma opção válida.')