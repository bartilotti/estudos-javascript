//um array é uma variável que tem vários elementos, cada elementosé composto por valor e uma chave de identificação

let num = [5,8,4]

num[3] = 6
num.push(7) //adicionar um valor
num.length  // mostra o tamanho
num.sort()  // organiza o array

console.log(`O vetor é ${num}`)

let pos = num.indexOf(10)

if (pos == -1) {
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor foi encontrado`)
}