const numeroPrimo = (num) => {
    let primo = true;
    if(num===1){primo = false;}
    
    for(let i=2; i<num; i++){
        if(num%i===0){primo = false;}
    }

    return primo;
}


for(let i = 1; i<11; i++){
    console.log(`Iteración número ${i}`);
    if(numeroPrimo(i)){
        console.log('Número primo');
    }
}

