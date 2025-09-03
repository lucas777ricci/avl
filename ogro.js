const Criatura = require('./criatura');

class Ogro extends Criatura {
    constructor(nome) {
        super(nome, "Martelada Brutal");
    }

    agir() {
        console.log(`${this.nome} desferiu uma poderosa ${this.ataqueMagico}!`);
        this.alterarEnergia(-25); 
    }
}

module.exports = Ogro;
