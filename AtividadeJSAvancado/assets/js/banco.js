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
