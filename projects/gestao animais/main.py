import os
from dotenv import load_dotenv
from cadastro import Animais

# carregar variáveis do .env
load_dotenv()
PASTA = os.getenv("ANIMAIS_PATH")
CAMINHO_ARQUIVO = os.path.join(PASTA, "animais.txt")

while True:
    print('========================')
    print('---------Opções---------')
    print('========================')

    print('1 - Cadastrar animal')
    print('2 - Ver cadastros')
    print('3 - Excluir cadastros')
    print('4 - Sair')
    
    opcao = input('Escolha uma opção: ').strip()

    if opcao == '1':
        animal = Animais()
        animal.coletar_dados()
        animal.calcular_valor_venda()
        animal.salvar_no_arquivo()

    elif opcao == '2':
        try:
            with open(CAMINHO_ARQUIVO, "r") as arquivo:
                print("\n=== Cadastros ===")
                print(arquivo.read())
        except FileNotFoundError:
            print("Nenhum cadastro encontrado.")

    elif opcao == '3':
        confirmacao = input("Tem certeza que deseja excluir TODOS os cadastros? (s/n): ").strip().lower()
        if confirmacao == 's':
            os.makedirs(PASTA, exist_ok=True)  # garante que a pasta exista
            open(CAMINHO_ARQUIVO, "w").close()
            print("Todos os cadastros foram excluídos.")
        else:
            print("Operação cancelada. Nenhum cadastro foi excluído.")

    elif opcao == '4':
        print("Saindo do sistema...")
        break

    else:
        print('Opção inválida')