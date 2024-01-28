const elementos = [ 
    {tag:'p', texto:'Frase 1'},
    {tag:'div', texto:'Frase 2'},
    {tag:'footer', texto:'Frase 3'},
    {tag:'section', texto:'Frase 4'},
];

const cont = document.querySelector(".container");
const div = document.createElement("div");

for(let i=0; i < elementos.length ; i++){
    let e = document.createElement(elementos[i].tag);
    e.innerHTML = elementos[i].texto;

    div.appendChild(e);
}
console.log(div);
cont.appendChild(div);
