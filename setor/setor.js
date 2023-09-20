
function aplicar(){
    let tipo = document.querySelector("input[name='setor']:checked").value

    let infoSetorTipo = document.createElement("h3")
    infoSetorTipo.innerText = "Setor " + String(tipo).toUpperCase()

    document.getElementById("setor-tabela-head").appendChild(infoSetorTipo)

    let quantSubsetores = document.querySelector("input[name='subsetores']").value
    let quantContainers = document.querySelector("input[name='containers']").value

    for (let i = 0; i < Number(quantSubsetores); i++) {
        let subsetor = document.createElement('div')
        subsetor.setAttribute("class","subsetores")
        subsetor.innerText= `Subsetor ${i+1}`
        let tagTR = document.createElement('tr')
        

        for (let j = 0; j < Number(quantContainers); j++) {
            let tagTD = document.createElement('td')
            tagTD.innerText = String.fromCharCode(65+j)
            tagTR.appendChild(tagTD)
        }
        
        subsetor.appendChild(tagTR)

        document.getElementById("setor-tabele-body").appendChild(subsetor)
    }
}
