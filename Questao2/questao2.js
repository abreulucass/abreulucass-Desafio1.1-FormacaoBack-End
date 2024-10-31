/* Programa questao2.js: usando a classe Vertice do exercício anterior, crie a classe Triangulo,
que possui 3 vértices (privados com leitura pública). Nessa classe implemente:
    ● Construtor para inicializar os vértices do triângulo. Gere uma exceção caso os vértices não
      formem um triângulo.
    ● Método equals para verificar se dois triângulos são iguais.
    ● Método getter perimetro para retornar o perímetro do triângulo.
    ● Método tipo para retornar o tipo do triângulo (equilátero, isósceles ou escaleno).
    ● Método clone para clonar um triângulo.
    ● Método getter area para retornar a área do triângulo. Para calcular a área do triângulo use:

área = S . (S − a). (S − b). (S − c)

onde a, b e c são os lados do triângulo e S é o perímetro dividido por 2, ou seja S = (a+b+c)/2.

Em seguida, leia valores do usuário para criar 3 triângulos e chamar os métodos implementados
na classe. */

import promptSync from 'prompt-sync';
import { Triangulo } from './Triangulo.js';
import { Vertice } from '../Questao1/Vertice.js';

const prompt = promptSync();

// Pegar os dados do usuário
function lerDados(vertice){
  while(1){
      var x = parseFloat(prompt(`Digite a coordenada de X do vértice ${vertice}:`));
      if(isNaN(x)){
          console.log("Por favor, digite um número.");
          continue;
      }

      break;
  }

  while(1){
      var y = parseFloat(prompt(`Digite a coordenada de Y do vértice ${vertice}:`));
      if(isNaN(y)){
          console.log("Por favor, digite um número.");
          continue;
      }

      break;
  }
  
  return new Vertice(x, y);
}

function verifColinearidade(ver1, ver2, ver3){ // Verifica se as coordenadas são colineares
  const x1 = ver1.getX();
  const y1 = ver1.getY();
  const x2 = ver2.getX();
  const y2 = ver2.getY();
  const x3 = ver3.getX();
  const y3 = ver3.getY();

  const area = 0.5 * Math.abs( x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)); // Calculo de area para identificar se há ou nao colinearidade

  // Se a area for 0, os pontos sao colineares
  return area === 0;

}

// Funcao para gerar, com os dados do usuário, um triângulo
function geraTriangulo(triangulo){
  while(1){
    try {

      console.log(`Informe os vertices do Triangulo ${triangulo}`);

      var ver1 = lerDados(1);
      var ver2 = lerDados(2);
      var ver3 = lerDados(3);

      if( verifColinearidade(ver1, ver2, ver3) ) // Verifica se as coordenadas são colineares
        throw 'Não é possivel gerar um triangulo';
        
      if(ver1.geterDistance(ver2) + ver2.geterDistance(ver3) <= ver3.geterDistance(ver1) || ver1.geterDistance(ver2)	=== 0 || ver2.geterDistance(ver3) === 0 || ver3.geterDistance(ver1) === 0)  // Verifica se o triangulo é possivel
        throw 'Não é possivel gerar um triangulo';
      
      return new Triangulo(ver1, ver2, ver3);
 
    } catch (ex) {
        console.log("\nNão foi possível gerar o triângulo pois os vértices informados não formam um triângulo. Tente novamente.\n");
        
    }
  }
}

// Coletar dodos para criar o Triangulo
const triangulo1 = geraTriangulo(1);
console.log('\n');
const triangulo2 = geraTriangulo(2);
console.log('\n');
const triangulo3 = geraTriangulo(3);

// Mostra os Triangulos criados
console.log("\nMostrando Triangulo 1 - \n" + triangulo1.mostrarTriangulo());
console.log("Mostrando Triangulo 2 - \n" + triangulo2.mostrarTriangulo());
console.log("Mostrando Triangulo 3 - \n" + triangulo3.mostrarTriangulo());

// Metodo Equals
console.log("Verificando se o triangulo 1 é igual ao triangulo 2:");
if(triangulo1.equals(triangulo2))
  console.log("Os triangulos são iguais\n");
else
  console.log("Os triangulos não são iguais\n");

console.log("Verificando se o triangulo 1 é igual ao triangulo 3:");

if(triangulo1.equals(triangulo3))
  console.log("Os triangulos são iguais");
else
  console.log("Os triangulos não são iguais");

// Metodo getter perimetro
console.log("\nPerimetro do Triangulo 1: " + triangulo1.getterPerimetro(),
            "\nPerimetro do Triangulo 2: " + triangulo2.getterPerimetro(),
            "\nPerimetro do Triangulo 3: " + triangulo3.getterPerimetro());

// Metodo tipo
console.log("\nTipo do Triangulo 1: " + triangulo1.tipo(),
            "\nTipo do Triangulo 2: " + triangulo2.tipo(),
            "\nTipo do Triangulo 3: " + triangulo3.tipo());

// Metodo clone
const triangulo4 = triangulo1.clone();
console.log("\nMostrando Triangulo 4 (clone do Triangulo 1) - \n" + triangulo4.mostrarTriangulo());

// Metodo getter area
console.log("Área do Triangulo 1: " + triangulo1.getterArea(),
            "\nÁrea do Triangulo 2: " + triangulo2.getterArea(),
            "\nÁrea do Triangulo 3: " + triangulo3.getterArea());



