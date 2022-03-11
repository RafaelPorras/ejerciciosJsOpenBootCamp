/**
 * 1.En este segundo ejercicio tendréis que crear dos clases, 
Circulo y Rectángulo, las cuales deben de heredar de Figura.

2.Circulo debe recibir dos parámetros en el constructor: 
radio (number) y color (String).

3.Rectángulo debe recibir tres parámetros en el constructor: base (number), 
altura (number) y color (String).

Los atributos de estas clases deben ser públicos.
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

class Circulo extends Figura{
    constructor(radio,color){
        super(color);
        this._radio =  radio;
    }
}

class Rectángulo extends Figura{
    constructor(base,altura,color){
        super(color);
        this._base = base;
        this._altura = altura;
    }
}

