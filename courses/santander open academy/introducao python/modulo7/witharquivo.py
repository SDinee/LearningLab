# Você também pode utilizar a declaração with para manejar a abertura e fechamento de arquivos de maneira automática.

with open("dados.txt", "r") as arquivo:
    conteudo = arquivo.read()
    print(conteudo)