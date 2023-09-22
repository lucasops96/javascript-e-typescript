function calcularIMC(){
    let peso = document.querySelector("input[name='peso']").value
    let altura = document.querySelector("input[name='altura']").value

    console.log(peso)

    let imc = peso / (altura * altura)
    imc = Number(imc).toFixed(2)

    let resultado = document.createElement('p')

    if(imc <= 18.59){
        resultado.innerText = 'Seu imc é '+ String(imc) +'(Abaixo do peso)'
    }else if( 18.59 < imc && imc <= 24.99){
        resultado.innerText = 'Seu imc é '+ String(imc) +'(Peso normal)'
    }else if( 25 <= imc && imc <= 29.99){
        resultado.innerText = 'Seu imc é '+ String(imc) +'(Sobre peso)'
    }else if( 30 <= imc && imc <= 34.99){
        resultado.innerText = 'Seu imc é '+ String(imc) +'(Obesidade grau 1)'
    }else if( 35 <= imc && imc <= 39.99){
        resultado.innerText = 'Seu imc é '+ String(imc) +'(Obesidade grau 2)'
    }else if( imc >= 40 ){
        resultado.innerText = 'Seu imc é '+ String(imc) +'(Obesidade grau 3)'
    }

    // resultado.innerText = 'Seu imc é '+ String(imc)

    document.getElementById("resultado-calculo").appendChild(resultado)
}