class Fera {
    constructor(nome, defesa) {
        this.nome = nome;
        this.defesa = defesa;
        this._energia = 120; // "privado" por convenção
    }

    alterarEnergia(valor) {
        this._energia += valor;
        if (this._energia > 120) this._energia = 120;
        if (this._energia < 0) this._energia = 0;
        console.log(`${this.nome} agora tem ${this._energia} de energia.`);
    }

    agir() {
        console.log(`${this.nome} se defende com ${this.defesa}!`);
        this.alterarEnergia(-5);
    }

    descansar() {
        this.alterarEnergia(10);
        console.log(`${this.nome} se acalmou e recuperou energia.`);
    }
}

module.exports = Fera;
