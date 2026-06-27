pessoa1 = {"nome": "João", "idade": 25, "cidade": "Madri"}

print(pessoa1["nome"])  # Imprime "João"
print(pessoa1["idade"])    # Imprime 25
print(pessoa1["cidade"])  # Imprime "Madri"


"""
Os dicionários em Python têm vários métodos incorporados para manipular e acessar os elementos. Alguns métodos comuns são:

keys(): retorna uma visualização de todas as chaves do dicionário.
values(): retorna uma visualização de todos os valores do dicionário.
items(): retorna uma visualização de todos os pares chave-valor do dicionário.
update(outro_dicionario): atualiza o dicionário com os pares chave-valor de outro dicionário.

"""

pessoa2 = {"nome": "João", "idade": 25, "cidade": "Madri"}


print(pessoa2.keys())    # Imprime dict_keys(["nome", "idade", "cidade"])
print(pessoa2.values())  # Imprime dict_values(["João", 25, "Madri"])
print(pessoa2.items())   # Imprime dict_items([("nome", "João"), ("idade", 25), ("cidade", "Madri")])


pessoa2.update({"profissao": "Engenheiro"})
print(pessoa2)  # Imprime {"nome": "João", "idade": 25, "cidade": "Madri", "profissao": "Engenheiro"}