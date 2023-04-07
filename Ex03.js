function somarDividir(a, b, c) {
    const resultado = (a + b) / c;
    return resultado;
  }
  
const resultadoFuncaoTradicional = somarDividir(10, 20, 5);
console.log(resultadoFuncaoTradicional); // output: 6


const somarDividirArrow = (a, b, c) => (a + b) / c;

const resultadoArrow = somarDividirArrow(10, 20, 5);
console.log(resultadoArrow); // output: 6