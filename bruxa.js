const Criatura = require('./criatura');

class Bruxa extends Criatura {
    constructor(nome) {
        super(nome, "Poção de Confusão");
    }

    agir() {
        console.log(`${this.nome} lança ${this.ataqueMagico}!`);
        this.alterarEnergia(-8);
    }
}

module.exports = Bruxa;
