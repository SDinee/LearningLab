let alunos = [
  { nome: "João", idade: 20, nota: 8, apresentar: function() { return `Sou ${this.nome} e tirei ${this.nota}`; } },
  { nome: "Maria", idade: 22, nota: 9, apresentar: function() { return `Sou ${this.nome} e tirei ${this.nota}`; } },
  { nome: "Pedro", idade: 21, nota: 6, apresentar: function() { return `Sou ${this.nome} e tirei ${this.nota}`; } }
];

for (let aluno of alunos) {
  console.log(aluno.apresentar());
}

alunos[2].nota = 7; // alterar nota
alunos[2].aprovado = alunos[2].nota >= 7; // adicionar propriedade
delete alunos[0].idade; // remover propriedade

console.log(alunos);