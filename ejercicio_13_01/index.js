/**
 * Vamos a crear un div que será un rectángulo , 
o la forma geométrica que prefiráis.
El objetivo es que al entrar en ese rectángulo 
con nuestro ratón, el fondo se establezca como blanco, 
mientras que cuando salga, este cambie a un color aleatorio

Para ello tendremos que crear tres funciones:
    Una que genere y devuelva un código de color (con su almohadilla #)
    Otra que aplique ese nuevo código de color al fondo y
    Por último una función que establezca el color en blanco de nuevo.
 */

document.addEventListener('DOMContentLoaded',(e) => {

    
    document.querySelector(".rectangulo").addEventListener("mouseover",(e) =>
        aplicarColor()
    );
    
    document.querySelector(".rectangulo").addEventListener("mouseout",(e) => {
        colorBlanco();
    });
});

const colorAleatorio = () => {
    const items = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    let color = '#';

    for(let i = 0; i < 6; i++){
        let index = Math.floor(Math.random() * 16)
        color += items[index];
    }

    return color;
}    

const aplicarColor = () => {
    const color = colorAleatorio();
    document.querySelector(".rectangulo").style.backgroundColor=color;
}

const colorBlanco = () => {
    document.querySelector(".rectangulo").style.backgroundColor="#FFF";
}

