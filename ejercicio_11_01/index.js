/**
 * 1. En este ejercicio tendréis que crearla clase figura 
que tiene que tener como atributo _color
2. El constructor de Figura debe recibir como 
parámetro el valor del color y almacenarlo en _color.
3. Ya que la variable _color es privada, 
tenéis que crear un getter getColor() y un setter setColor(String).
 */

class Figura {
    #_color = 'Sin color';
    constructor(color){
        this.#_color = color;
    }

    getColor(){
        return this.#_color;
    }

    setColor(color){
        this.#_color = color;
    }
} 

