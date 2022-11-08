/**
 * Crie uma classe para representar carros.
 * 
 * Os carros possuem uma marca, cor e um gastp de combustível por kilometro rodado.
 * Cie um método que dado a quantidade de quilomentros e o preço do combustivel nos de o valor 
 * gasto em reais para realizar este percurso
 */

class Carro {
    marca;
    cor;
    gastoMedioKm;

    constructor (marca, cor, gastoMedioKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioKm = gastoMedioKm;
    }

    calcGastoPercurso(distanciaKM, precoComb) {
        
        return distanciaKM * this.gastoMedioKm * precoComb;

    }

}

const uno = new Carro('Fiat', 'Vermelho',1/12);
const amg = new Carro('BMW', 'Preto', 1/12);

console.log(uno.calcGastoPercurso(70, 5));
console.log(amg.calcGastoPercurso(100, 10));