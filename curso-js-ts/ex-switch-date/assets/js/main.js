// const h = document.querySelector('.container h1')
// const data = new Date()

// function get_dia_semana(data) {
//     const dia = data.getDay()
//     switch (dia) {
//         case 0:
//             return 'Domingo'
//         case 1:
//             return 'Segunda'
//         case 2:
//             return 'Terça-feira'
//         case 3:
//             return 'Quarta-feira'
//         case 4:
//             return 'Quinta-feira'
//         case 5:
//             return 'Sexta-feira'
//         case 6:
//             return 'Sábado'
//         default:
//             break;
//     }
// }

// function get_mes(data){
//     const mes = data.getMonth()
//     switch (mes) {
//         case 0:
//             return 'Janeiro'
//         case 1:
//             return 'Fevereiro'
//         case 2:
//             return 'Março'
//         case 3:
//             return 'Abril'
//         case 4:
//             return 'Maio'
//         case 5:
//             return 'Junho'
//         case 6:
//             return 'Julho'
//         case 7:
//             return 'Agosto'
//         case 8:
//             return 'Setembro'
//         case 9:
//             return 'Outubro'
//         case 10:
//             return 'Novembro'
//         case 11:
//             return 'Dezembro'
//         default:
//             break;
//     }
// }

// function cria_data(data){
//     dia_semana = get_dia_semana(data)
//     mes = get_mes(data)

//     return ( 
//         `${dia_semana}, ${data.getDate()} de ${mes} de ${data.getFullYear()} `+
//         `${data.getHours()}:${data.getMinutes()}`
//         )
// }


// h.innerHTML = cria_data(data)

const h = document.querySelector('.container h1')
const data = new Date()

h.innerHTML = data.toLocaleString('pt-BR',{dateStyle:'full', timeStyle:'short'})