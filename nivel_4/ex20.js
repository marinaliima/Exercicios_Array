//Exercicío 20. Quantidade de números pares

let numeros = [2, 3, 5, 7, 11, 13, 17, 19];
let pares = 0;
let impares = 0;

for (i = 0; i < numeros.length; i++){
    if (numeros[i] % 2 === 0){
        pares += 1;
    } else {
        impares += 1;
    }
}

console.log("Quantidade de números pares: " + pares);
console.log("Quantidade de números ímpares: " + impares);