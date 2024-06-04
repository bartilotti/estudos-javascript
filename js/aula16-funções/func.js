
//1
function parimpar(n) {
    if (n%2 == 0){
        return('Par')
    } else {
        return('Ímpar')
    }
} 

 console.log(parimpar(6))

//2
 function somar (n1, n2) {
    return n1+n2
 }

 console.log(somar(2,7))


 //3
let v = function(x){
    return x*2
}

console.log(v(5))


//4
function fatorial(n) {
    let fat = 1
    for(let c = n; c>1; c--){
        fat *= c
    }
    return fat
}

console.log(fatorial(5))