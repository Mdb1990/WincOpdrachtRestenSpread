/** @format */

const som = (...nummers) => nummers.reduce((acc, num) => acc + num);

console.log(som(1, 2, 3, 4, 5));

const optellen = (num1, num2, num3) => num1 + num2 + num3;

const cijfers = [1, 2, 3];

console.log(optellen(...cijfers));
