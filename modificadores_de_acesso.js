class Pessoa {
    static _listaDePessoas = [];

    constructor(nome, sobrenome, idade) {
        this._nome = nome;
        this._sobrenome = sobrenome;
        this.idade = idade;

        Pessoa._listaDePessoas.push(this);
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
        } else {
            this._idade = null;
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

    static get mediaDeIdade() {
        let soma = 0;

        for (let pessoa of Pessoa._listaDePessoas) {
            soma += pessoa._idade;
        }

        return soma / Pessoa._listaDePessoas.length;
    }

    
    /* 
        static get mediaDeIdade() {
            return Pessoa._listaDePessoas.reduce((acumulador, valorAtual) => acumulador += valorAtual._idade, 0) / Pessoa._listaDePessoas.length;
        }
    */
   
}
