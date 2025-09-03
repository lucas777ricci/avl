const Criatura = require('./criatura');

class Sereia extends Criatura {
    constructor(nome) {
        super(nome, "Canto Hipnótico");
    }

    agir() {
        console.log(`${this.nome} encanta o inimigo com ${this.ataqueMagico}!`);
        this.alterarEnergia(-12); // gasta pouca energia
    }
}

module.exports = Sereia;
