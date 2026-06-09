from dotenv import load_dotenv
import os

# carregar variáveis do .env
load_dotenv()
    
class Animais:
    def __init__(self, nome="", precounit=0, quantidade=0, precocomida=0, selar=0, valoranimal=0, premium=True):
        self.nome = nome
        self.precounit = precounit
        self.quantidade = quantidade
        self.precocomida = precocomida
        self.qtdcomida = 90 * quantidade  # cada animal come 90 comidas
        self.selar = selar
        self.vendaanimal = valoranimal
        self.premium = premium  # True = Premium, False = Não Premium
        self.selar_unit = 0
        
    def coletar_dados(self):
        self.nome = input("Digite o nome do animal: ")
        self.precounit = float(input("Digite o preço unitário do animal: "))
        self.quantidade = int(input("Digite a quantidade de animais: "))
        self.precocomida = float(input("Digite o preço unitário da comida: "))
        
        # cada animal come fixo 90 comidas
        self.qtdcomida = 90 * self.quantidade
        
        selar_unit = float(input("Digite o preço unitário do pelego para selar: "))
        self.selar_unit = selar_unit
        # 20 pelegos por cada animal
        self.selar = selar_unit * 20 * self.quantidade
        
        premium_input = input("É Premium? (s/n): ").strip().lower()
        self.premium = True if premium_input == "s" else False
        
    def calcular_valor_venda(self):
        self.vendaanimal = float(input("Digite o valor de venda por animal: "))
        
    def calcular_lucro(self):
        preco_total_comida = self.precocomida * self.qtdcomida
        preco_total_pelego = self.selar_unit * 20 * self.quantidade
        custo_total = (self.precounit * self.quantidade) + preco_total_comida + preco_total_pelego
        receita_total = self.vendaanimal * self.quantidade

        # Taxa de listagem fixa (2,5%)
        taxa_listagem = receita_total * 0.025

        # Imposto de venda aproximado
        if self.premium:
            # Premium: imposto varia de 0% a 2% dependendo da cidade
            imposto_venda = receita_total * 0.02   # valor médio aproximado
        else:
            # Sem Premium: imposto varia de 5,5% a 8%
            imposto_venda = receita_total * 0.07   # valor médio aproximado

        # Total de taxas
        taxas_totais = taxa_listagem + imposto_venda
        receita_liquida = receita_total - taxas_totais

        resultado = receita_liquida - custo_total
        return receita_total, custo_total, preco_total_comida, preco_total_pelego, taxa_listagem, imposto_venda, taxas_totais, resultado

    def salvar_no_arquivo(self):
        receita, custo, preco_total_comida, preco_total_pelego, taxa_listagem, imposto_venda, taxas_totais, resultado = self.calcular_lucro()
        
        # pega caminho da pasta do .env
        pasta = os.getenv("ANIMAIS_PATH")
        caminho_arquivo = os.path.join(pasta, "animais.txt")
        
        os.makedirs(pasta, exist_ok=True)
        
        with open(caminho_arquivo, "w") as arquivo:
            arquivo.write(f"Nome do animal: {self.nome}\n")
            arquivo.write(f"Preço unitário do animal: {self.precounit}\n")
            arquivo.write(f"Quantidade: {self.quantidade}\n")
            arquivo.write(f"Preço unitário da comida: {self.precocomida}\n")
            arquivo.write(f"Consumo fixo de comida: 90 por animal\n")
            arquivo.write(f"Quantidade total de comida: {self.qtdcomida}\n")
            arquivo.write(f"Preço total da comida: {preco_total_comida:.2f}\n")
            arquivo.write(f"Preço unitário do pelego: {self.selar_unit:.2f}\n")
            arquivo.write(f"Pelegos fixos: 20 por animal\n")
            arquivo.write(f"Preço total dos pelegos: {preco_total_pelego:.2f}\n")
            arquivo.write(f"Valor de venda por animal: {self.vendaanimal}\n")
            arquivo.write(f"Receita total: {receita:.2f}\n")
            arquivo.write(f"Custo total: {custo:.2f}\n")
            arquivo.write(f"Taxa de listagem (2,5%): {taxa_listagem:.2f}\n")
            arquivo.write(f"Imposto de venda aproximado ({'Premium' if self.premium else 'Sem Premium'}): {imposto_venda:.2f}\n")
            arquivo.write(f"Taxas totais: {taxas_totais:.2f}\n")

            arquivo.write(f"Resultado final: {'Lucro' if resultado > 0 else 'Prejuízo'} ({resultado:.2f})\n")
            arquivo.write("=====================================\n")
        
        print(f"Cadastro salvo!")
