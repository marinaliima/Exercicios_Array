let produtos = ["Pastel", "Suco", "Coxinha", "Chocolate"];
produtos.push("Pão de Queijo");
produtos.shift();
produtos[1] = "Esfiha";

console.log(produtos);
console.log("Totalizam " + produtos.length + " produtos.")