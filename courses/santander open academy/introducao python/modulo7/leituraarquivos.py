# Para ler o conteúdo de um arquivo, primeiro devemos abri-lo utilizando a função open() em modo de leitura ("r"). Depois, podemos ler o conteúdo do arquivo utilizando métodos como read() ou readlines().

arquivo = open("dados.txt", "r")
conteudo = arquivo.read()
print(conteudo)
arquivo.close()