class ControleIluminacao {
    static instance;
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


controleIluminacao.adicionarObserver({
    atualizar: function (comodo, estado) {
        const statusElement = document.querySelector(`.status${comodo.charAt(0).toUpperCase() + comodo.slice(1)}`);
        const comodoDiv = document.querySelector(`.${comodo}`);
        if (estado) {
            statusElement.innerHTML = '<br><strong>Luz Ligada</strong>';
            statusElement.style.color = 'black';
            statusElement.style.backgroundColor = 'yellow';
        } else {
            statusElement.innerHTML = '<br><strong>Luz Apagada</strong>';
            statusElement.style.color = 'white';
            statusElement.style.backgroundColor = 'red';
        }
    }
});



