// Arquivo JavaScript

class ContaBancaria {
    constructor (saldoInicial) {
        this.saldo = saldoInicial;
    }



deposito(valor) {
    if (valor>0) {
        this.saldo += valor;
        return true;
    } else { 
        return false;
    }
}

saque(valor) {
    if (valor > 0 && valor <= this.saldo) {
        this.saldo -= valor;
        return true;
    } else { 
        return false;
    }
}

}

const conta = new ContaBancaria(0);

function deposito() {
    const valor = parseFloat(document.getElementById('valor').value);
    if (!isNaN(valor)) { 
    if (conta.deposito(valor)) { 
        updateValorTotal();
    } else {
        alert('Por valor, digite um valor válido!')
    }
   }

}

function saque() {
    const valor = parseFloat(document.getElementById('valor').value);
    if (!isNaN(valor)) {
        if(conta.saque(valor)) {
        updateValorTotal();
    } else { 
        alert('Saldo insuficiente ou valor inválido! \n  Por favor, tente novamente!')
    }
   }
}


function updateValorTotal(){
    const valorTotalEl = document.getElementById('valorTotal');
    valorTotalEl.textContent = `Valor Total: R$ ${conta.saldo.toFixed(2)}`;
     
}