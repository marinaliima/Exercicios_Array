//Exercicío 23. Verificando nota baixa

let notas = [10, 7, 9, 6, 10];
let notasBoas = 0;
let notasAbaixo = 0;

for (i = 0; i < notas.length; i++){
    if (notas[i] >= 6){
        notasBoas += 1;
    } else {
        notasAbaixo += 1;
    }
}

if (notasAbaixo > 0){
    console.log("Existe nota abaixo da média.");
} else {
    console.log("Todas as notas estão boas.");
}