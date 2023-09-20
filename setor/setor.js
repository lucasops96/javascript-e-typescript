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
        let subsetor = document.createElement('div')
        subsetor.innerText= `Subsetor ${i+1}`
        let tagTR = document.createElement('tr')
        subsetor.appendChild(tagTR)

        document.getElementById("setor-tabele-body").appendChild(subsetor)
    }
}

alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVXYZ'

function aplicarContainers(){
    let quantSubsetores = document.querySelector("input[name='subsetores']").value
    let quantContainers = document.querySelector("input[name='containers']").value

    for (let i = 0; i < Number(quantSubsetores); i++) {
        let subsetor = document.createElement('div')
        subsetor.innerText= `Subsetor ${i+1}`
        let tagTR = document.createElement('tr')
        

        for (let j = 0; j < Number(quantContainers); j++) {
            let tagTD = document.createElement('td')
            tagTD.innerText = alfabeto[j]
            tagTR.appendChild(tagTD)
        }
        
        subsetor.appendChild(tagTR)

        document.getElementById("setor-tabele-body").appendChild(subsetor)
    }
}
