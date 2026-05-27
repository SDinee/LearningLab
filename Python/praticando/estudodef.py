class Humano:                     # cria a classe Humano

    def __init__(self, nome, idade):  # método executado ao criar o objeto
        self.nome = nome              # guarda o nome do humano
        self.idade = idade            # guarda a idade do humano


h1 = Humano("João", 25)               # cria um objeto da classe
h2 = Humano("Maria", 30)              # cria outro objeto

print("Olá sou", h1.nome, "tenho", h1.idade, "anos")              # mostra os dados de h1
print("Olá sou", h2.nome, "tenho", h2.idade, "anos")              # mostra os dados de h2