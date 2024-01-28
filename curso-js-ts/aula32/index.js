const numeros = [34, 4, 53, 20, 12, 87, 32, 6, 27]

const [ primeiro, segundo ] = numeros

//console.log(primeiro, segundo)

const pessoa = {
    nome:'Lucas',
    sobrenome:'Martins',
    idade:21,
    endereco:{
        rua:'Rua Padre Correa',
        numero:'50',
        bairro:'centro',
    }
}

const { nome, endereco } = pessoa
console.log(nome, endereco)