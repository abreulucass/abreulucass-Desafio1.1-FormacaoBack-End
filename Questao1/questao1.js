/* Programa questao1.js: crie a classe Vertice e implemente nessa classe:
    ● Atributos numéricos x e y privados com leitura pública.
    ● Construtor para inicializar os valores de x e y.
    ● Método getter distancia para calcular a distância euclidiana de um vértice a outro.
    ● Método move para mover o vértice para outra posição (x, y).
    ● Método equals para verificar se dois vértices são iguais.
Em seguida, leia valores do usuário para criar 3 vértices e chamar os métodos implementados na
classe. */

import promptSync from 'prompt-sync';
import { Vertice } from './Vertice.js';

const prompt = promptSync();

// Pegar os dados do usuário
function lerDados(vertice){
    while(1){
        var x = parseFloat(prompt(`Digite a coordenada de X do ${vertice}: `));
        if(isNaN(x)){
            console.log("Por favor, digite um número.");
            continue;
        }

        break;
    }

    while(1){
        var y = parseFloat(prompt(`Digite a coordenada de Y do ${vertice}: `));
        if(isNaN(y)){
            console.log("Por favor, digite um número.");
            continue;
        }

        break;
    }

    if(edit == 1) // Caso seja para mover um vertice
        return [x, y];
    
    return new Vertice(x, y);
}

const vertice1 = lerDados("Vértice 1");
const vertice2 = lerDados("Vértice 2");
const vertice3 = lerDados("Vértice 3");

// Mostrar Vértices
console.log("\nMostrando Vértices",
            "\nVértice 1: " + vertice1.mostraCoord(),
            "\nVértice 2: " + vertice2.mostraCoord(),
            "\nVértice 3: " + vertice3.mostraCoord());

// Distancia Euclidiana
console.log(`\nDistancia do Vértice 1 para o Vértice 2: ${vertice1.geterDistance(vertice2)}\n`);
console.log(`Distancia do Vértice 2 para o Vértice 3: ${vertice2.geterDistance(vertice3)}\n`);

// Método move
var edit = 1;

console.log("Movendo o Vértice 1\nInforme a nova posição do Vértice:");
vertice1.move(...lerDados("Vértice 1"));
console.log("Vertice 1: " + vertice1.mostraCoord());

console.log("\nMovendo o Vértice 2\nInforme a nova posição do Vértice:");
vertice2.move(...lerDados("Vértice 2"));
console.log("Vertice 2: " + vertice2.mostraCoord());

console.log("\nMostrando Vértices depois de mover",
        "\nVértice 1: " + vertice1.mostraCoord(), 
        "\nVértice 2: " + vertice2.mostraCoord(),
        "\nVértice 3: " + vertice3.mostraCoord());

edit = 0; 

// Método Equals
console.log("\nVerificando se o Vértice 1 é igual ao Vértice 3...");

if(vertice1.equals(vertice3))
    console.log("Vértice 1 é igual ao Vértice 3");
else
    console.log("Vértice 1 não é igual ao Vértice 3");








