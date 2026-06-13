let notas = [2, 6, 7, 5, 10, 9];

for (i = 0; i < notas.length; i++){
    if (notas[i] >= 6){
        console.log("Nota " + notas[i] + ": Aprovado.");
    } else {
        console.log("Nota " + notas[i] + ": Reprovado.");
    }
}