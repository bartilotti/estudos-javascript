let valores = [1,5,2,6,3]
console.log(valores)

//Código tradicional 

for (let pos=0; pos<valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor de ${valores[pos]}`)
} 


//For in

for(let pos in valores){
    console.log(`a posição ${pos} tem o valor de ${valores[pos]}`)
}

