let tarefas = ["Arrumar a cama", "Fazer café da manhã", "Fazer almoço", "Lavar louça", "Fazer janta"];

for (i = 0; i < tarefas.length; i++){
    console.log(tarefas[i]);
}

tarefas.push("Lavar louça");

console.log();

for (i = 0; i < tarefas.length; i++){
    console.log(tarefas[i]);
}