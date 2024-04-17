class ControleIluminacao {
    constructor() {
        if (!ControleIluminacao.instance) {
            this.luzes = {
                sala: false,
                cozinha: false,
                quarto: false,
                banheiro: false
            };
            this.observers = [];
            ControleIluminacao.instance = this;
        }
        return ControleIluminacao.instance;
    }
    adicionarObserver(observer) {
        this.observers.push(observer);
    }
    notificarObservers(comodo) {
        this.observers.forEach(observer => {
            observer.atualizar(comodo, this.luzes[comodo]);
        });
    }
}

const controleIluminacao = new ControleIluminacao();

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

controleIluminacao.adicionarObserver({
    atualizar: function (comodo, estado) {
        const statusElement = document.querySelector(`.status${comodo.charAt(0).toUpperCase() + comodo.slice(1)}`);
        if (estado) {
            statusElement.innerHTML = '<br><strong>Luz Ligada</strong>';
            statusElement.style.color = 'white';
        } else {
            statusElement.innerHTML = '<br><strong>Luz Desligada</strong>';
            statusElement.style.color = 'white';
        }
    }
});

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

