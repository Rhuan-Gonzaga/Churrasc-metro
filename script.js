// Carne = 400 gr por pessoa  ,se deuração for + de 6 horas aumento para 650 pessoas
// Cerveja = 1200 ml por Pessoa , se duração for  + 6 horas aumento para 2000 ml
// Refrigerante/agua =  1000 ml por pessoa , se duração for  + 6 horas aumento para 1500ml

// Crianças valem por metade

let quantidadeDePessoas = document.getElementById("adultos");
let quantidadeDeCriancas = document.getElementById("criancas");
let tempoDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    let adultos = quantidadeDePessoas.value;
    let criancas = quantidadeDeCriancas.value;
    let duracao = tempoDuracao.value;


    let totalDeCarne = carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao) / 2 * criancas);
    let totalDeCerveja = cervejaPorPessoa(duracao) * adultos;
    let totalDeBebidas = bebidasPorPessoa(duracao) * adultos + (bebidasPorPessoa(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${totalDeCarne / 1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(totalDeCerveja / 355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(totalDeBebidas / 2000)} Pet's 2l de Bebidas</p>`


}

function carnePorPessoa(duracao) {
    if (duracao >= 6) {
        return 650;
    }
    else {
        return 400;
    }
}

function cervejaPorPessoa(duracao) {
    if (duracao >= 6) {
        return 2000;
    }
    else {
        return 1200;
    }
}

function bebidasPorPessoa(duracao) {
    if (duracao >= 6) {
        return 1500;
    }
    else {
        return 1000;
    }
}


