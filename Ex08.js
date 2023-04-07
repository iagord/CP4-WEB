function verificarParidade(numero) {
    if(numero % 2 === 0) {
      console.log(`${numero} é um número par.`);
    } else {
      console.log(`${numero} é um número ímpar.`);
    }
  }
  
  verificarParidade(4); // saída: "4 é um número par."
  verificarParidade(7); // saída: "7 é um número ímpar."  