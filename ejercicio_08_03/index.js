const arrayItems = [1,2,3,4,5,6];
//const arrayItems = [];
//const arrayItems = 2;
const eliminarUltimo = (arrayItems) => {
    if(!Array.isArray(arrayItems)){return 'El parametro pasado no es un array';}
    if(arrayItems.length===0){return 'El array pasado está vacio';}
    arrayItems.pop()};


console.log(eliminarUltimo(arrayItems));
console.log(arrayItems);