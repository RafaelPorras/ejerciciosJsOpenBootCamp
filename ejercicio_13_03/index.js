/**
 * Por último vamos a hacer un ejercicio que va a interactuar con un div en concreto.
 *El objetivo es crear un div cuadrado que cambie de color cuando hacen click sobre el y que cambie de forma a un círculo al hacer doble click.
 * Recuerda que ya hemos visto una función que cambia el color de fondo en el primer ejercicio.
 */

 document.addEventListener('DOMContentLoaded',(e) => {

    const figura = document.getElementById('figura');

    figura.addEventListener('click',(e) => cambiarColor(figura));
    figura.addEventListener('dblclick', (e) => cambiarForma(figura));





    const colorAleatorio = () => {
        const items = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        let color = '#';

        for(let i = 0; i < 6; i++){
            let index = Math.floor(Math.random() * 16)
            color += items[index];
        }

        return color;
    }    

    const cambiarColor = (figura) => {
        const color = colorAleatorio();
        figura.style.backgroundColor=color;
    }

    const cambiarForma = (figura) => figura.className = (figura.className === 'circulo') ? 'cuadrado' : 'circulo';

    

});
