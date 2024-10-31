export class Vertice{

    // Atributos privados da classe
    #x;
    #y;

    // Método construtor
    constructor(x, y){
        this.#x = x;
        this.#y = y;
    }

    // Gets Sets
    getX(){ return this.#x }
    getY(){ return this.#y }

    setX(x){ this.#x = x }
    setY(y){ this.#y = y }

    // Métodos
    geterDistance(v2){  
        const result = Math.sqrt( ( ( v2.#x - this.#x ) ** 2) + (( v2.#y - this.#y ) ** 2)); // calculo da distancia euclidiana
        return Math.round(result * 100) / 100; //arredondar para duas casas decimais
    }
    
    equals(v2){
        return this.#x === v2.#x && this.#y === v2.#y;
    }
    
    move(newX, newY){
        this.setX(newX);
        this.setY(newY);
    }

    mostraCoord(){
        return `(${this.#x}, ${this.#y})`;
    }

}

