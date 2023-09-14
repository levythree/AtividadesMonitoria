class Album {
    static albuns = [];

    figurinhas = [];

    constructor(nome, totalFigurinhas) {
        this.nome = nome;
        this.totalFigurinhas = totalFigurinhas;

        Album.albuns.push(this);
    }

    adicionarFigurinha(numero) {
        if (!this.verificarFigurinha(numero) && this.figurinhas.length + 1 <= this.totalFigurinhas) {
            this.figurinhas.push(numero);
        }
    }
 
    verificarFigurinha(numero) {
        return this.figurinhas.includes(numero);
    }    
    
    static getTotalFigurinhas() {
        let soma = 0;

        for (let i = 0; i < Album.albuns.length; i++) {
            soma += Album.albuns[i].figurinhas.length;
        }
        
        return soma;
    }

    /*
        static getTotalFigurinhas() {
            let soma = 0;

            for (let album of Album.albuns) {
                soma += album.figurinhas.length;
            }

            return soma;
        }
    */

    /*
        static getTotalFigurinhas() {
            return Album.albuns.reduce((acumulador, valorAtual) => acumulador + valorAtual.figurinhas.length, 0);
        }    
    */
}

const brasil = new Album("Álbum de figurinhas do Brasil", 5);
const alemanha = new Album("Álbum de figurinhas da Alemanha", 4);
const argentina = new Album("Álbum de figurinhas da Argentina", 3);

for (let i = 1; i < 6; i++) {
    brasil.adicionarFigurinha(i);
    alemanha.adicionarFigurinha(i);
    argentina.adicionarFigurinha(i);
}

for (let i = 0; i < Album.albuns.length; i++) {
    console.log(Album.albuns[i].nome + ": " + Album.albuns[i].figurinhas + "\n");

    for (let n = 6; n > 2; n--) {
        console.log("Existe a figurinha " + n + " no álbum? " + Album.albuns[i].verificarFigurinha(n));
    }

    console.log();
}

console.log("Número total de figurinhas em todos os álbuns: " + Album.getTotalFigurinhas());
