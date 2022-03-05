const sumar = (num1,num2) =>{
    try{
        if(isNaN(num1) || isNaN(num2)) throw new Error('Uno de los parametros pasados no es un numero');
        return num1 + num2;
    }
    catch(e){
        return e;
    }
}

console.log(sumar (5,5));

console.log(sumar('fgt',3));