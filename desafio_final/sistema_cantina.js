let produtos = ["Coxinha", "Suco", "Croissant", "Refrigerante", "Sorvete"];
let produtoBuscado = "Coxinha";
let naoEncontrado = 0;

for (i = 0; i < produtos.length; i++){
    console.log(produtos[i]);
}

produtos.push("Salgado folheado");
produtos.shift();
produtos[1] = "Enroladinho";

console.log();

for (i = 0; i < produtos.length; i++){
    console.log(produtos[i]);
}

console.log();

console.log("A cantina possui " + produtos.length + " opções.");

for (i = 0; i < produtos.length; i++){
    if (produtos[i] === produtoBuscado){
        console.log("Produto encontrado!");
    } else {
        naoEncontrado += 1;
    }
}

if (naoEncontrado === produtos.length){
    console.log("Produto não encontrado.");
}