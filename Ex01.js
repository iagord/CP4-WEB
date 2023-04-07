const escola = {
    curso: "Arquitetura e Urbanismo",
    aluno: ["Henrique", "Gabriel", "Thiago", "Vania"],
    professor: "Sarah",
    turma: "C",
    período: "Vespertino",
    
    telaAlunoEstudando: function() {
      console.log("O aluno está estudando");
    }
  };

escola.telaAlunoEstudando(); // saída: O aluno está estudando
const alunoBuscado = escola.aluno.find(nome => nome === "Henrique");
console.log(alunoBuscado); // saída: Henrique