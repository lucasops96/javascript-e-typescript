// Faça um programa para calcular o valor de uma viagem.
 
// Você terá 5 variáveis. Sendo elas:
// 1 - Preço do combustível (1 litro);
// 2 - Preço do etanol (1 litro);
// 3 - O tipo de combustível que está no seu carro;
// 4 - Gasto médio de combustível do carro por km ;
// 5 - Distância em km da viagem;
// Imprima no console o valor que será gasto para realizar está viagem. 

const precoGasolina = 5.99;
const precoEtanol = 4.75;
const consumoPorLitro = 12;
const distancia = 110;
const tipoCombustivel = 'Etanol';

let valor = 0

if(tipoCombustivel === 'Etanol'){
    valor = (distancia / consumoPorLitro) * precoEtanol;
    console.log('Etanol:',valor.toFixed(2))
}else{
    valor = (distancia / consumoPorLitro) * precoGasolina;
    console.log('Gasolina:',valor.toFixed(2))
}


