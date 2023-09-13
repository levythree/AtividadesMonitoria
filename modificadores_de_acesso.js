class Pessoa {
    static _listaDePessoas = [];

    constructor(nome, sobrenome, idade) {
        this._nome = nome;
        this._sobrenome = sobrenome;
        this.idade = idade;

        _listaDePessoas.push(this);
    }

    get nome() {
        return this._nome;
    }

    set nome(nome) {
        this._nome = nome;
    }

    get sobrenome() {
        return this._sobrenome;
    }

    set sobrenome(sobrenome) {
        this._sobrenome = sobrenome;
    }

    get idade() {
        return this._idade;
    }

    set idade(idade) {
        if (idade >= 18) {
            this._idade = idade;
        }
    }

    get nomeCompleto() {
        return `${this._nome} ${this._sobrenome}`;
    }

    set nomeCompleto(nomeCompleto) {
        const nomes = nomeCompleto.split(" ");

        this._nome = nomes[0];
        this._sobrenome = nomes[1];
    }

    get listaDePessoas() {
        return Pessoa._listaDePessoas;
    }

    get mediaDeIdade() {
        const media = 0;

        for (let pessoa in _listaDePessoas) {
            media += pessoa._idade;
        }

        return media / _listaDePessoas.length;
    }
}
