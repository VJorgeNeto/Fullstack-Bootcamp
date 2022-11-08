/**
 * ------------POO: Obejtos literais----------------
 * 
 * this = assume o contexto do objeto, ao inves do nome do obj usa-se o this
 * Objeto é uma estrutura dinâmica de chave e valor
 * Foi criado o valor descrever que é uma função que printa uma saída do objeto
 * console.log(pessoa['nome']); -> Chamando um valor específico no meu obj
 * Função dentro de um obj chamamos de método (Ex.: descrever: function())
 */

const pessoa = {
    nome: 'Vitor',
    idade: 30,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

pessoa.descrever();

console.log(pessoa['nome']); // Acessando um atributo no obj através de uma string, ex.: 'nome'