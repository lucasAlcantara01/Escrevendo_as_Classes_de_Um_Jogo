class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo =  tipo
    }
    atacar(ataque) {
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

let heroi1 = new heroi('Lucas', 23, 'mago')
let ataque;

switch (heroi1.tipo) {
    case 'mago':
        ataque = 'magia';
        break;
    case 'guerreiro':
        ataque = 'espada';
        break;
    case 'monge':
        ataque = 'artes marciais';
        break;
    case 'ninja':
        ataque = 'shuriken';
        break;
    default:
        break;
}

heroi1.atacar(ataque);