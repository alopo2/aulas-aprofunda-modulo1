class Cachorro {
    #nome;
    #raça;
    #idade;

    constructor(nome, raça, idade) {
        this.nome = nome;
        this.raça = raça;
        this.idade = idade;
    }
    
    get nome() {
        return this.#nome;
    }

    set nome(novoNome) {
        if (novoNome.length > 2) {
            this.#nome = novoNome;
        } else {
           throw new Error("O nome deve ter pelo menos 3 caracteres.");
        }
        
    };

    get raça() {
        return this.#raça;
    }

    set raça(novaRaça) {
        this.#raça = novaRaça;
    }

    latir() {
        return `${this.nome} está latindo!`;
    }
    
    envelhecer(anos) {
        this.idade += anos;
        return `${this.nome} agora tem ${this.idade} anos.`;
    }
}


console.log("Exemplo de uso da classe Cachorro:");
const meuCachorro = new Cachorro("Lacraia", "Bulldog", 5);
console.log(meuCachorro.nome); // Lacraia
console.log(meuCachorro.raça); // Bulldog
console.log(meuCachorro.latir()); // Rex está latindo!


console.log("Exemplo de uso do setter e getter:");
const dogPipoquinha = new Cachorro("Pipoca", "Poodle", 3);
console.log(dogPipoquinha.envelhecer(2)); // Pipoca agora tem 5 anos.
console.log(dogPipoquinha.latir()); // Pipoca está latindo!
console.log(dogPipoquinha.nome); // Pipoca