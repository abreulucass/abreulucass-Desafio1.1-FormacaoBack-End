/* Programa questao3.js: usando a classe Vértice do exercício anterior, crie a classe Poligono,
que possui 3 ou mais vértices. Nessa classe implemente:
    ● Construtor para inicializar os vértices do polígono (pelo menos 3 vértices). Gere uma exceção
      caso o polígono não tenha ao menos 3 vértices.
    ● Método booleano addVertice para adicionar um novo vértice v ao polígono. Se o vértice já
      existe no polígono o método não deve adicioná-lo novamente e retornar falso.
    ● Método getter perimetro para retornar o perímetro do polígono.
    ● Método getter qtdVertices para retornar a quantidade de vértices do polígono.
Em seguida, leia valores do usuário para criar um polígono e chamar os métodos implementados
na classe. */

import promptSync from 'prompt-sync';
import { Vertice } from '../Questao1/Vertice.js';
import { Poligono } from './Poligono.js';

const prompt = promptSync();

function lerDados(){
  let cont_vert = 0 // contador de vertices
  const vertices = [] // array para os vertices que vao ser inseridos
  while(1){
    while(1){
      var x = parseFloat(prompt(`Digite a coordenada de X do vértice ${cont_vert + 1}:`))
      if(isNaN(x)){
          console.log("Por favor, digite um número.");
          continue;
      }

      break;
    }

    while(1){
      var y = parseFloat(prompt(`Digite a coordenada de Y do vértice ${cont_vert + 1}:`))
      if(isNaN(y)){
          console.log("Por favor, digite um número.");
          continue;
      }

      break;
    }
    
    if(vertices.some(vertice => vertice.getX() === x && vertice.getY() === y)){
      console.log("Esse vertice ja foi adicionado! Por favor, insira um diferente");
      continue;
    } // verifica se o vertice não é duplicado

    vertices.push( new Vertice(x, y)); // insere o vertice no array
    cont_vert ++; // incrementa o contador de vertices

    if(cont_vert < 3)
      console.log("É necessário pelo menos 3 vértices");
    else{

      let resp = prompt("Deseja adicionar mais um vértice? (S/N)");

      if(resp == 'N' || resp == 'n')
        break;
    }
    
  }

  return vertices;
}

// Cria o objeto poligono
const poligono1 = new Poligono(lerDados());

console.log('\n');

// mostra os vertices do poligono
console.log("Mostrando poligono 1:");
poligono1.mostrarVertPoli();

// metodo add vertice
if(poligono1.addVertice()){
  console.log("\nVertice adicionado ao poligono 1\n");

  console.log("Mostrando poligono 1 após a adição:");
  poligono1.mostrarVertPoli();
}

// metodo getter qtdVertices
console.log("\nPoligono 1:\n " + poligono1.getterQTDVertices());

//metodo getter perimetro
console.log("\nPerimetro do poligono 1 = " + poligono1.getterPerimetro());


