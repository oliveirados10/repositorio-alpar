
const salaLigado = document.getElementById("salaLigado");
const salaDesligado = document.getElementById("salaDesligado");

const cozinhaLigado = document.getElementById("cozinhaLigado");
const cozinhaDesligado = document.getElementById("cozinhaDesligado");

const quartoLigado = document.getElementById("quartoLigado");
const quartoDesligado = document.getElementById("quartoDesligado");

const banheiroLigado = document.getElementById("banheiroLigado");
const banheiroDesligado = document.getElementById("banheiroDesligado");

const statusSala = document.getElementById('statusSala');
const statusCozinha = document.getElementById('statusCozinha');
const statusQuarto = document.getElementById('statusQuarto');
const statusBanheiro = document.getElementById('statusBanheiro');



salaLigado.addEventListener('click', () => {
    controleIluminacao.luzes.sala = true;
    controleIluminacao.notificarObservers('sala');
});

salaDesligado.addEventListener('click', () => {
    controleIluminacao.luzes.sala = false;
    controleIluminacao.notificarObservers('sala');
});

cozinhaLigado.addEventListener('click', () => {
    controleIluminacao.luzes.cozinha = true;
    controleIluminacao.notificarObservers('cozinha');
});

cozinhaDesligado.addEventListener('click', () => {
    controleIluminacao.luzes.cozinha = false;
    controleIluminacao.notificarObservers('cozinha');
});

quartoLigado.addEventListener('click', () => {
    controleIluminacao.luzes.quarto = true;
    controleIluminacao.notificarObservers('quarto');
});

quartoDesligado.addEventListener('click', () => {
    controleIluminacao.luzes.quarto = false;
    controleIluminacao.notificarObservers('quarto');
});

banheiroLigado.addEventListener('click', () => {
    controleIluminacao.luzes.banheiro = true;
    controleIluminacao.notificarObservers('banheiro');
});

banheiroDesligado.addEventListener('click', () => {
    controleIluminacao.luzes.banheiro = false;
    controleIluminacao.notificarObservers('banheiro');
});
