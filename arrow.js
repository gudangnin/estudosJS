function apresentar(nome) {
    return `meu nome é ${nome}`;
}

const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (numero1, numero2) => numero1 + numero2;

//Arrow function com + de 1 linha de instrução

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return "somente numeros de 1 a 9"
    }else{
        return num1 + num2;
    }
}

//Hoisting: arrow function se comporta como expressão 

