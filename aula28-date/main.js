//Date

const data = new Date('2019-04-20 20:15:59')

console.log('Dia', data.getDate())
console.log('Mês', data.getMonth()+1)
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Min', data.getMinutes())
console.log('Seg', data.getSeconds())
console.log('ms', data.getMilliseconds())
console.log('Dia semana', data.getDay())

console.log(data.toString())