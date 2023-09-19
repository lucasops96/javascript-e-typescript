function tipoSetor(num){
    let tipo
    if (num == 1){
        tipo = document.querySelector("input[name='setor-entrada']").value
    }else{
        tipo = document.querySelector("input[name='setor-saida']").value
    }

    let infoSetorTipo = document.createElement("h3")
    infoSetorTipo.innerText = "Setor " + tipo

    document.getElementById("setor-tabela-head").appendChild(infoSetorTipo)
}


function aplicarSubsetores(){
    let quantSubsetores = document.querySelector("input[name='subsetores']").value

    for (let i = 0; i < Number(quantSubsetores); i++) {
        let subsetor = document.createElement('tr')
        subsetor.innerText= `Subsetor ${i+1}`
        let tagTR = document.createElement('tr')
        subsetor.appendChild(tagTR)

        document.getElementById("setor-tabele-body").appendChild(subsetor)
    }
}
