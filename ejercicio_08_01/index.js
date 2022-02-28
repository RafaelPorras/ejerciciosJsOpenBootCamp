const sumar = (num1,num2) => num1 + num2;
const restar = (num1,num2) => num1 - num2;
const multiplicar = (num1,num2) => num1*num2;
const dividir = (num1,num2) => {
    if(num2 === 0) return "No se puede dividir por cero";

    return num1 / num2;
}


console.log(`Suma 5 + 5 = ${sumar(5,5)}`);
console.log(`Resta 5 - 5 = ${restar(5,5)}`);
console.log(`Multiplica 5 * 5 = ${multiplicar(5,5)}`);
console.log(`Divide 5 / 5 = ${dividir(5,5)}`);
console.log(`Divide 5 / 0 = ${dividir(5,0)}`);