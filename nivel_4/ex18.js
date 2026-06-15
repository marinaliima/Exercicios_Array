//Exercicío 18. Maior número

let numeros = [2, 13, 7, 5, 11, 3];
let maior = 0;

for (i = 0; i < numeros.length; i++){
    if (numeros[i] > maior){
        maior = numeros[i];
    }
}

console.log("O maior número é: " + maior);