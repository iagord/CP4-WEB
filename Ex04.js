//Função tradicional
let contador = 0;

function contarCliques() {
  contador++;
  console.log(`Você clicou na página ${contador} vezes.`);
}

document.addEventListener('click', contarCliques);

//Função Arrow
let contador1 = 0;

const contarCliquesArrow = () => {
  contador++;
  console.log(`Você clicou na página ${contador} vezes.`);
}

document.addEventListener('click', contarCliquesArrow);