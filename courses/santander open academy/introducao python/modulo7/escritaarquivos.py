# Para escrever dados em um arquivo, abrimos em modo de escrita ("w") utilizando a função open(). Se o arquivo não existir, será criado automaticamente. Se o arquivo já existir, seu conteúdo será sobrescrito.

arquivo = open("dados.txt", "w")
arquivo.write("Olá, mundo!")
arquivo.close() 