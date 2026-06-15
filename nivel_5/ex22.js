//Exercicío 22. Procurando um produto

let produtos = ["Pastel", "Suco", "Coxinha", "Chocolate"];
let produtoBuscado = "Coxinha";
let naoEncontrado = 0;

for (i = 0; i < produtos.length; i++){
    if (produtos[i] === produtoBuscado){
        console.log("Produto encontrado!");
    } else {
        naoEncontrado += 1;
    }
}

if (naoEncontrado === produtos.length) {
    console.log("Produto não encontrado.")
}