function calcularMedia(notas) {
    let soma = 0;
  
    for(let i = 0; i < notas.length; i++) {
      soma += notas[i];
    }
  
    const media = soma / notas.length;
    return media;
  }
  
  const notas = [7, 8, 6, 9, 5, 7, 8];
  const media = calcularMedia(notas);
  
  if(media >= 6) {
    console.log(`Parabéns, sua média é ${media.toFixed(2)} e você foi aprovado!`);
  } else {
    console.log(`Sua média é ${media.toFixed(2)} e infelizmente você foi reprovado. Tente novamente na próxima oportunidade.`);
  }