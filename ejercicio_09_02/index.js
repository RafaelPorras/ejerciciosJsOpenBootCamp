const sumar = (num1,num2) =>{
    try{
        if(isNaN(num1) || isNaN(num2)) throw new Error('Este no es el uso correcto de la funcion');
        return num1 + num2;
    }
    catch(e){
        console.log(e);
    }
    finally{
        return num1 + num2;
    }
}

console.log(sumar (5,5));

console.log(sumar('fgt',3));