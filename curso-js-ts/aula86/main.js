function rand(min,max){
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg,tmp){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof msg !== 'string'){
                reject('erroooo')
                return;
            }

            resolve(msg.toUpperCase() + '- Passei na promise')
        },tmp);
    })
}

const promises = [
    esperaAi('Promise 1', rand(1,5)),
    esperaAi('Promise 2', rand(1,5)),
    esperaAi(3, rand(1,5)),
]
// Promise.all Promise.race 
Promise.race(promises)
    .then((valor)=>{ console.log(valor) })
    .catch((e)=>{ console.log(e) })