import json, os

def tipo1():
    serial = linha[1:6].strip()
    descricao = linha[6:26].strip()
    tipo_produto = linha[26:36].strip()
    quantidade = linha[36:41].strip()
    voltagem = linha[41:46].strip()
    garantia_meses = linha[46:50].strip()
    return locals()

def tipo2():
    serial = linha[1:6].strip()
    descricao = linha[6:26].strip()
    tipo_produto = linha[26:36].strip()
    quantidade = linha[36:41].strip()
    data_validade = linha[41:49].strip()
    temperatura = linha[49:52].strip()
    return locals()

def tipo3():
    serial = linha[1:6].strip()
    descricao = linha[6:26].strip()
    tipo_produto = linha[26:36].strip()
    quantidade = linha[36:41].strip()
    tamanho = linha[41:43].strip()
    cor = linha[43:53].strip()
    return locals()

def tipo4():
    serial = linha[1:6].strip()
    descricao = linha[6:26].strip()
    tipo_produto = linha[26:36].strip()
    quantidade = linha[36:41].strip()
    autor = linha[41:61].strip()
    editora = linha[61:76].strip()
    num_paginas = linha[76:80].strip()
    return locals()

def tipo5():
    serial = linha[1:6].strip()
    descricao = linha[6:26].strip()
    tipo_produto = linha[26:36].strip()
    quantidade = linha[36:41].strip()
    faixa_etaria = linha[41:46].strip()
    return locals()

def tipo6():
    serial = linha[1:6].strip()
    descricao = linha[6:26].strip()
    tipo_produto = linha[26:36].strip()
    quantidade = linha[36:41].strip()
    data_validade = linha[41:49].strip()
    tipo_pele = linha[49:58].strip()
    lote = linha[58:68].strip()
    return locals()

dados = {
    "1": [],
    "2": [],
    "3": [],
    "4": [],
    "5": [],
    "6": []
}

diretorio = os.path.dirname(os.path.abspath(__file__))
caminhotxt = os.path.join(diretorio, "txt", "arquivo.txt")
caminhojson = os.path.join(diretorio, "json", "arquivo.json")

with open(caminhotxt) as arquivotxt:
    for linha in arquivotxt:
        if linha.startswith("1"):
            dados["1"].append(tipo1())
        elif linha.startswith("2"):
            dados["2"].append(tipo2())
        elif linha.startswith("3"):
            dados["3"].append(tipo3())
        elif linha.startswith("4"):
            dados["4"].append(tipo4())
        elif linha.startswith("5"):
            dados["5"].append(tipo5())
        elif linha.startswith("6"):
            dados["6"].append(tipo6())

# Percorre cada chave do dicionário dados ("1", "2", "3"...)
for chave in dados:
    
    # Agora pega a lista que está dentro daquelas chaves.
    for item in dados[chave]:
        
        # Percorre cada campo do registro atual, (percorre a linha dentro das chaves)
        for campo in item:

            # Verifica se o valor do campo é uma string
            # para evitar tentar usar .replace() em outros tipos de dados
            if isinstance(item[campo], str):

                # Substitui caracteres especiais pelos seus respectivos códigos
                item[campo] = ( 
                    item[campo]
                    .replace("&", "&amp;")
                    .replace("<", "&lt;")
                    .replace(">", "&gt;")
                    .replace('"', "&quot;")
                    .replace("'", "&apos;")
                )
        

with open(caminhojson, "w") as arquivojson:
    json.dump(dados, arquivojson, indent=4)
