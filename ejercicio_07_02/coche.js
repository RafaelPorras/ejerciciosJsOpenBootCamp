export class Coche{
    #peso;
    #potencia;
    #marca;
    constructor(peso,potencia,marca){
        this.#peso = peso;
        this.#potencia = potencia;
        this.#marca = marca;
    }

    set peso(peso){
        this.#peso = peso;
    }
    get peso(){
        return this.#peso;
    }

    set potencia(potencia){
        this.#potencia = potencia;
    }
    get potencia(){
        return this.#potencia;
    }

    set marca(marca){
        this.#marca = marca;
    }
    get marca(){
        return this.#marca;
    }
}

const coche = new Coche(1,2,'m');

