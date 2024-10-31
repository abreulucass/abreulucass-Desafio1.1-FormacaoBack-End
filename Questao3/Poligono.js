import { Vertice } from '../Questao1/Vertice.js';
import promptSync from 'prompt-sync';

const prompt = promptSync();

export class Poligono{

    constructor(vertices){
        try{
            if(vertices.length < 2)
                throw 'numero minimo nao alcançado';
            
            this.vertices = []; // Cria um vetor de vertices
            this.lados = []; // cria um vetor para armazenar o tamanho dos lados

            this.vertices.push(...vertices); // Adiciona os vertices ao vetor
            this.calcLados(); // calcula o lado com base nos vertices
        } catch(ex) {
            console.log("É necessario pelo menos 3 vértices");
        }
    }

    calcLados(){
        this.lados.length = 0; // Zera o vetor de lados

        for(let i = 0; i < this.vertices.length; i++){
            if(i == this.vertices.length - 1) // caso o indice seja o ultimo do vetor de lados, o tamanho do lado sera calculado com base no primeiro vertice
                this.lados.push(this.vertices[i].geterDistance(this.vertices[0]));
            else
                this.lados.push(this.vertices[i].geterDistance(this.vertices[i+1])); // tamanho do vertice calculado em pares
        }
    }

    addVertice(){
        console.log("\nInserindo novo vertice:")
        while(1){
            var x = parseFloat(prompt(`Digite a coordenada de X do novo vértice: `))
            if(isNaN(x)){
                console.log("Por favor, digite um número.");
                continue;
            }
        
              break;
        }
        
        while(1){
            var y = parseFloat(prompt(`Digite a coordenada de Y do novo vértice: `))
            if(isNaN(y)){
                console.log("Por favor, digite um número.");
                continue;
            }
        
            break;
        }
            
        if(this.vertices.some(vertice => vertice.getX() === x && vertice.getY() === y)){
            console.log("Erro: Esse vertice ja foi adicionado!\n");
            return false;
        } // verifica se o vertice não é duplicado
        
        this.vertices.push( new Vertice(x, y));
        this.calcLados(); // realiza o calculo dos lados com base nos novos vertices
        return true;
    
    }

    getterPerimetro(){
        let perimetro = 0;

        for(let i = 0; i < this.lados.length; i++){ // soma o tamanho dos lados armazenados no vetor
            perimetro += this.lados[i];
        }

        return Math.round(perimetro * 100) / 100; // arrendonda para duas casas decimais
    }


    getterQTDVertices(){
        return `Quantidade de vertices: ${this.vertices.length}`;
    }
        
    mostrarVertPoli(){ // mostra os vertices do poligono
        for(let i = 0; i < this.vertices.length; i++){ 
            console.log(`Vertice ${i + 1} = (${this.vertices[i].getX()}, ${this.vertices[i].getY()})`);
        }
    }
}
