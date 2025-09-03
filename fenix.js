const Criatura = require('./criatura');

class Fenix extends Criatura {
    constructor(nome) {
        super(nome, "Chamas da Ressurreição");
    }

    agir() {
        console.log(`${this.nome} dispara ${this.ataqueMagico}!`);
        this.alterarEnergia(-20); 
    }

    descansar() {
        this.alterarEnergia(30); 
        console.log(`${this.nome} renasce das cinzas e restaura sua energia!`);
    }
}

module.exports = Fenix;
