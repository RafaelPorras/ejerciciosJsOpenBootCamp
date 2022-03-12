import { listaNombres } from "./controllers/lista.js";

document.addEventListener('DOMContentLoaded', () => {
    const nombres = listaNombres();
    const container = document.querySelector('.container');
    
    nombres.forEach( (nombre,index) => {
        container.appendChild(crearParrafo(nombre,index));
    });


});


const crearParrafo = (nombre,index) => {
    const parrafo = document.createElement('p');
    parrafo.className = 'nombre';
    parrafo.id = 'nombre'+index;
    parrafo.innerHTML = nombre;

    return parrafo;

}