function aluno(nome, idade, estudante, nota) {
  return {
    nome: nome,
    idade: idade,
    estudante: estudante,
    nota: nota,
  };
}
let alunos = [];
alunos[0] = aluno("João", 20, true, 8.5);
alunos[1] = aluno("Maria", 22, false, 7.0);
alunos[2] = aluno("Pedro", 21, true, 9.0);

let somaNotas = 0;

for (let i = 0; i < alunos.length; i++) {
  let alunoAtual = alunos[i];
  console.log(
    `Nome: ${alunoAtual.nome}, 
    Idade: ${alunoAtual.idade}, 
    Estudante: ${
      alunoAtual.estudante ? "Sim" : "Não"
    }, 
    Nota: ${alunoAtual.nota}`
  );
   somaNotas += alunoAtual.nota; // acumula nota
}

let media = somaNotas / alunos.length;
console.log(`Média da turma: ${media}`);

console.log(typeof nome);
console.log(typeof alunos);

nome2 = Number(aluno.nome);
console.log(typeof nome2);

idade2 = Boolean(aluno.idade);
console.log(typeof idade2);
