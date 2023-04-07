const funcionarios = [
  {
    nome: 'João',
    idade: 35,
    sexo: 'M',
    cargo: 'Gerente',
    salario: 5000,
    descontos: 1000,
    dataAdmissao: new Date('2005-01-01'),
    dataDemissao: null
  },
  {
    nome: 'Maria',
    idade: 28,
    sexo: 'F',
    cargo: 'Analista',
    salario: 3000,
    descontos: 500,
    dataAdmissao: new Date('2010-03-15'),
    dataDemissao: new Date('2022-02-28')
  },
  {
    nome: 'Pedro',
    idade: 42,
    sexo: 'M',
    cargo: 'Coordenador',
    salario: 4500,
    descontos: 800,
    dataAdmissao: new Date('2002-11-20'),
    dataDemissao: new Date('2020-12-31')
  },
  {
    nome: 'Julia',
    idade: 24,
    sexo: 'F',
    cargo: 'Desenvolvedor',
    salario: 2500,
    descontos: 600,
    dataAdmissao: new Date('2015-05-10'),
    dataDemissao: null
  }
];

// a) Fazer o filter de funcionários que tiveram data de admissão entre 2000 à 2010
const funcionariosAdmitidosEntre2000e2010 = funcionarios.filter(funcionario => {
  const anoAdmissao = funcionario.dataAdmissao.getFullYear();
  return anoAdmissao >= 2000 && anoAdmissao <= 2010;
});

console.log('Funcionários admitidos entre 2000 e 2010:');
console.log(funcionariosAdmitidosEntre2000e2010);

// b) Fazer um filter de funcionários que foram demitidos depois de 2018
const funcionariosDemitidosDepoisDe2018 = funcionarios.filter(funcionario => {
  if(funcionario.dataDemissao) {
    const anoDemissao = funcionario.dataDemissao.getFullYear();
    return anoDemissao > 2018;
  }
});

console.log('Funcionários demitidos depois de 2018:');
console.log(funcionariosDemitidosDepoisDe2018);

// c) Fazer um map de funcionários e trazer o nome, salário, desconto
const informacoesFuncionarios = funcionarios.map(funcionario => {
  return {
    nome: funcionario.nome,
    salario: funcionario.salario,
    descontos: funcionario.descontos
  }
});

console.log('Informações dos funcionários:');
console.log(informacoesFuncionarios);

// d) Criar um Reduce para somar o valor total dos descontos
const totalDescontos = funcionarios.reduce((acumulador, funcionario) => {
  return acumulador + funcionario.descontos;
}, 0);

console.log('Total de descontos:');
console.log(totalDescontos);