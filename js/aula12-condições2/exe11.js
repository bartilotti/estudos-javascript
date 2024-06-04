var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
console.log(`Agora são exatamente ${hora}:${minutos}`)

if (hora <12) {
    console.log('Bom dia!')
} else if (hora <=18) {
    console.log('Boa Tarde!')
} else if (hora <=23) {
    console.log('Boa Noite!')
} else {
    console.log('Hora Inválida')
}