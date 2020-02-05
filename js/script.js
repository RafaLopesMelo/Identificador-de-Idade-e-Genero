
var botao = document.querySelector("input.botao");

var foto = document.createElement("img");
document.body.appendChild(foto);

var idade = document.querySelector("input.idade");

var sexom = document.querySelector("#masculino");
var sexof = document.querySelector("#feminino");



function carregamento() {
    if(idade.value <= 3) {
        foto.src = "../_imagens/bebe.jpg";
    } else if (idade.value > 3 && idade.value <= 18 && sexom.checked) {
        foto.src = "../_imagens/menino.jpg"
    } else if (idade.value > 3 && idade.value <= 18 && sexof.checked) {
        foto.src = "../_imagens/menina.jpg"
    } else if (idade.value > 18 && idade.value <= 40 && sexom.checked) {
        foto.src = "../_imagens/homem.jpg"
    } else if (idade.value > 18 && idade.value <= 40 && sexof.checked) {
        foto.src = "../_imagens/mulher.jpg"
    } else if (idade.value > 40 && sexom.checked) {
        foto.src = "../_imagens/idoso.jpg"
    } else if (idade.value > 40 && sexof.checked) {
        foto.src = "../_imagens/idosa.jpg"
    }
}



