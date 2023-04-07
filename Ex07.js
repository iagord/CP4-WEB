function verificarFaixaEtaria(idade) {
    if(idade <= 12) {
      return 'criança';
    } else if(idade <= 18) {
      return 'adolescente';
    } else if(idade <= 60) {
      return 'adulto';
    } else {
      return 'idoso';
    }
  }
  
  const idade = 26;
  const faixaEtaria = verificarFaixaEtaria(idade);
  
  console.log(`Você tem ${idade} anos e é um(a) ${faixaEtaria}.`);  