/**
 * ---------POO: Classes------------
 * 
 * Nesta classe mostramos como o obj deve ser
 * Na sintaxe de classe, não precisamos colocar function no metodo descrever
 * Classe é uma definição do que um objeto deveria ser, e uma instancia é uma ocorrencia de um objeto
 * Nas classes sempre começa com letra maiuscula
 */

class Pessoa {
    nome;
    idade;
    anoNasc;

    constructor(nome, idade) { //Parametros nome e idade declarados
        this.nome = nome; //Atributos recebem os parametros declarados
        this.idade = idade;
        this.anoNasc = 2022 - idade;
    }

    descrever () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}, nasci em ${this.anoNasc}`);
    }
}

function compararPessoas(p1, p2) { //Função de comparação de objetos
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const Vitor = new Pessoa('Vitor', 25); //Instancia com os valores informados conforme parametros do constructor
const Renan = new Pessoa('Renan', 30); //Instancia com os valores informados conforme parametros do constructor


console.log(Vitor);
console.log(Renan);

Vitor.descrever();
Renan.descrever();

compararPessoas(Vitor, Renan);