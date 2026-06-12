let numeros = [13, 7, 11, 2, 3, 5];
let menor = numeros[0];

for (i = 0; i < numeros.length; i++){
    if (numeros[i] < menor){
        menor = numeros[i];
    }
}

console.log("O menor número é: " + menor);