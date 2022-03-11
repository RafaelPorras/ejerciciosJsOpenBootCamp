/**
 * Como último ejercicio, tendréis que crear un método calcularArea() 
 * en la clase Figura que devuelva el valor -1 para indicar 
 * que nuestra figura genérica no tiene área.
 *Implementa ese mismo método en las clases Circulo y Rectángulo que 
 * devuelvan el área de la figura en base a sus atributos.
 * Para calcular el área del círculo, PI puede ser 3.14 simplemente, 
 * sin más decimales.
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

    calcularArea(){
        return -1;
    }
} 

class Circulo extends Figura{
   
    constructor(radio,color){
        super(color);
        this._radio =  radio;
    }

    calcularArea(){
        return Math.PI * (this._radio * this._radio); 
    }
}

class Rectangulo extends Figura{
    constructor(base,altura,color){
        super(color);
        this._base = base;
        this._altura = altura;
    }

    calcularArea(){
        return this._base * this._altura;
    }
}



