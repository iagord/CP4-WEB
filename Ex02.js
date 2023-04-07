// Crie um objeto funcionários crie um array com os atributos nome,idade, sexo, cargo, salário, descontos, dataadmissão,datademissão
const funcionarios = [
    {
      nome: "Ana",
      idade: 29,
      sexo: "Feminino",
      cargo: "Gerente",
      salario: 5000,
      descontos: 1000,
      dataAdmissao: "2005-02-12",
      dataDemissao: "2022-03-31"
    },
    {
      nome: "Mário",
      idade: 25,
      sexo: "Masculino",
      cargo: "Assistente",
      salario: 2500,
      descontos: 500,
      dataAdmissao: "2010-08-20",
      dataDemissao: "2021-11-30"
    },
    {
      nome: "Paula",
      idade: 40,
      sexo: "Feminino",
      cargo: "Analista",
      salario: 3500,
      descontos: 700,
      dataAdmissao: "2001-10-15",
      dataDemissao: null
    },
    {
      nome: "Arthur",
      idade: 28,
      sexo: "Masculino",
      cargo: "Coordenador",
      salario: 4500,
      descontos: 900,
      dataAdmissao: "2012-05-10",
      dataDemissao: null
    },
  ];

// Fazer o filter de funcionários que tiveram data de admissão entre 2000 à 2010
const funcionariosContratados = funcionarios.filter(funcionario => {
    const dataAdmissao = new Date(funcionario.dataAdmissao);
    return dataAdmissao.getFullYear() >= 2000 && dataAdmissao.getFullYear() <= 2010;
  });
  

// Fazer um filter de funcionários que foram demitidos depois de 2018
  const funcionariosDemitidos = funcionarios.filter(funcionario => {
    if (funcionario.dataDemissao === null) {
      return false; // Funcionário ainda trabalha na empresa
    }
    const dataDemissao = new Date(funcionario.dataDemissao);
    return dataDemissao.getFullYear() > 2018;
  });


// Fazer um map de funcionários e trazer o nome, salário, desconto 
  const funcionariosSimplificados = funcionarios.map(funcionario => ({
    nome: funcionario.nome,
    salario: funcionario.salario,
    descontos: funcionario.descontos,
  }));

//  Criar um Reduce para somar o valor total dos descontos 
const totalDescontos = funcionarios.reduce((acumulador, funcionario) => {
    return acumulfuncionario.descontos;
}, 0);  