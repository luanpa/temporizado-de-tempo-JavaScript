const schedule = require('node-schedule')
 
 
const tarefa1 = schedule.scheduleJob('*/5 * * * * *', function () {
    console.log('Executando tarefa 1:', new Date().getSeconds() )
})
 
setTimeout(function () { // pode usar setImnediate ou setInterval
    tarefa1.cancel()
    console.log('A tarefa 1 foi cancelada')
}, 20000)
 
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 7)]
regra.hour = 15 //a hora que vai executar
regra.second = 30
 
const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando a segunda tarefa: ',new Date().getSeconds())
})