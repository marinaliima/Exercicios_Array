let notas = [10, 9, 10, 7, 6, 10];
let notasBoas = 0;

for (i = 0; i < notas.length; i++){
    if (notas[i] >= 7){
        notasBoas += 1;
    }
}

console.log("Notas boas: " + notasBoas);