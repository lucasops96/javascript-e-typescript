// Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média classificada conforme a tabela abaixo
 
// Média = ( nota1 + nota2 + nota3 ) / 3
// classificadas
// média menor que 5, reprovação;
// média entre 5 e 6.9, recuperação;
// média acima de 7, passou de semestre;

const nota1 = 3
const nota2 = 3
const nota3 = 6

const media = ( nota1 + nota2 + nota3 ) / 3

if (media < 5){
    console.log(`Aluno REPROVADO com média:${media.toFixed(2)}`)
}else if(media >= 5 && media < 7){
    console.log(`Aluno em RECUPERAÇÃO com média:${media.toFixed(2)}`)
}else if (media >= 7){
    console.log(`Aluno APROVADO com média:${media.toFixed(2)}`)
}


