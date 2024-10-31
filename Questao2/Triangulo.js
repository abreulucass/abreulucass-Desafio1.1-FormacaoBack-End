import { Vertice } from '../Questao1/Vertice.js'

export class Triangulo{

    // Vertices
    #ver1;
    #ver2;
    #ver3;

    // Tamanho dos lados
    #lado1;
    #lado2;
    #lado3;

    // Metodo construtor
    constructor(ver1, ver2, ver3){
        try {

            if(ver1.geterDistance(ver2) + ver2.geterDistance(ver3) <= ver3.geterDistance(ver1) || ver1.geterDistance(ver2)	=== 0 || ver2.geterDistance(ver3) === 0 || ver3.geterDistance(ver1) === 0){

                throw 'Não é possivel gerar um triangulo';

            } else {
              
                this.#ver1 = ver1;
                this.#ver2 = ver2;
                this.#ver3 = ver3;

                this.#lado1 = ver1.geterDistance(ver2);
                this.#lado2 = ver2.geterDistance(ver3);
                this.#lado3 = ver3.geterDistance(ver1);
            }

        } catch (ex) {
            console.log("\nNão foi possível gerar o triângulo pois os vértices informados não formam um triângulo");
        }

    }

    // Gets e Sets
    getVert1(){ return this.#ver1; }
    getVert2(){ return this.#ver2; }
    getVert3(){ return this.#ver3; }
    getLado1(){ return this.#lado1; }
    getLado2(){ return this.#lado2; }
    getLado3(){ return this.#lado3; }

    // Métodos
    equals(T2){

        let indice;
        const ladosT2 = [T2.#lado1, T2.#lado2, T2.#lado3]; // Vetor com os lados do triangulo 2

        if(ladosT2.includes(this.#lado1)){ // verifica se possui o valor em um dos lados do triangulo 2
            indice = ladosT2.indexOf(this.#lado1); // verifica o indice do lado encontrado
            ladosT2.splice(indice, 1); // remove o valor verificado do vetor de lados do triangulo 2
        } else {
            return false;
        }

        if(ladosT2.includes(this.#lado2)){
            indice = ladosT2.indexOf(this.#lado2);
            ladosT2.splice(indice, 1);
        } else {
            return false;
        }

        if(ladosT2.includes(this.#lado3)){
            indice = ladosT2.indexOf(this.#lado3);
            ladosT2.splice(indice, 1);
        } else {
            return false;
        }
            
        return true;
    }

    getterPerimetro(){
        return Math.round((this.#lado1 + this.#lado2 + this.#lado3) * 100) / 100;
    }

    tipo(){
        // Verificar se é equilatero
        if(this.#lado1 === this.#lado2 && this.#lado1 === this.#lado3)
            return 'Equilátero'
        
        // Verificar se é isósceles
        if(this.#lado1 === this.#lado2 || this.#lado2 === this.#lado3 || this.#lado3 === this.#lado1)
            return 'Isósceles'

        // se nenhum dos casos for atendido, o triangulo é escaleno
        return 'Escaleno' 
    }

    clone(){
        return new Triangulo(this.#ver1, this.#ver2, this.#ver3)
    }

    getterArea(){
        const S = this.getterPerimetro() / 2;
        return Math.round(S * (S - this.#lado1) * (S - this.#lado2) * (S - this.#lado3));
    }

    mostrarTriangulo(){
        return `\tLado 1 Coordenadas: ${this.#ver1.mostraCoord()} ${this.#ver2.mostraCoord()} - Tamanho: ${this.#lado1}
        Lado 2 Coordenadas: ${this.#ver2.mostraCoord()} ${this.#ver3.mostraCoord()} - Tamanho: ${this.#lado2}
        Lado 3 Coordenadas: ${this.#ver3.mostraCoord()} ${this.#ver1.mostraCoord()} - Tamanho: ${this.#lado3}\n`;
    }

    

}
