function esperaAi(msg,tmp){
    setTimeout(()=>{
        console.log(msg);
    },tmp);
}


esperaAi('oi depois de 10s',1000 * 10)