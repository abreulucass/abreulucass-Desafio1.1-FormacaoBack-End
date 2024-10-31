/* Programa questao4.js: crie uma classe Turma que possui uma lista de Alunos. Cada aluno tem
matrícula e nome (obrigatórios) e duas notas (P1 e P2) que inicialmente estão sem valor. Durante
o semestre os alunos devem realizar essas provas, mas podem faltar a uma delas ou às duas.
Crie métodos para:
    ● Inserir um aluno na turma. Não podem ser inseridos dois alunos com a mesma matrícula.
    ● Remover um aluno da turma a partir da sua matrícula.
    ● Lançar a nota (seja ela P1 ou P2) de um aluno.
    ● Imprimir os alunos da turma em ordem alfabética de acordo com o layout a seguir. A nota final
      é calculada como: (a) NF = (P1 + P2) / 2, para quem compareceu às duas provas; (b) NF = P1
      / 2 ou NF = P2 / 2, para quem faltou a uma das provas, e; (c) NF = 0, para quem faltou às
      duas provas. Use uma casa decimal para as notas.

—---------------------------------------
Matricula Nome P1 P2 NF
—---------------------------------------
12345 Ana de Almeida 8.0 9.5 8.8
23456 Bruno Carvalho 7.0 - 3.5
34567 Fernanda Abreu - 8.5 4.3
45678 Joao Santos - - 0.0
—---------------------------------------

Em seguida, leia dados dos alunos e suas notas e imprima a lista de alunos. */

import PromptSync from "prompt-sync";

const prompt = PromptSync();

class Turma {

  constructor(numturma) {
    this.numturma = numturma;
    this.alunos = [];
  }

  addAluno() {

    const regexNum = /\d+/;
    const regexSim = /^[\w\s]*$/;

    while (1) {
      var matri = parseInt(prompt("Digite a matricula do aluno: "));
      if (isNaN(matri)) {
        console.log("Digite um numero. Tente novamente");
        continue;
      }

      if (this.alunos.some((aluno) => aluno.matricula === matri)) {
        console.log("Essa matricula ja esta sendo usada.");
        continue;
      }

      break;
    }

    while (1) {
      var nome = prompt("Digite o nome do aluno: ");
      if (regexSim.test(nome) || regexNum.test(nome)) {
        console.log(
          "Digite um nome sem numeros ou caracteres especiais. Tente novamente"
        );
        continue;
      }
      break;
    }

    var P1 = 0;
    var P2 = 0;

    const Aluno = {
      matricula: matri,
      nome: nome,
      P1: P1,
      P2: P2,
      NF: 0,

      lancarNota: function () {
        while(1){
          var nota = parseFloat(prompt("Digite a nota: "));
          if(isNaN(nota)){
            console.log("Digite um numero. Tente novamente");
            continue;
          }

          break;
        }
        
        while (1) {
          let resp = prompt("Qual nota deseja lançar: (P1 / P2) ");

          switch (resp) {
            case "p1" || "P1":
              resp = 1;
              Aluno.P1 = Math.round(nota * 10) / 10;
              break;

            case "p2" || "P2":
              resp = 1;
              Aluno.P2 = Math.round(nota * 10) / 10;
              break;

            default:
              console.log("Digite P1 ou P2");
              break;
          }

          if (resp == 1) 
            break;
        }

        console.log("Nota lançada com sucesso!");

      }

    }

    this.alunos.push(Aluno);

    this.alunos.sort((aluno1, aluno2) => aluno1.nome.localeCompare(aluno2.nome));
  }

  lancarNota(){
    while (1) {
      var matri = parseInt(prompt("Digite a matricula do aluno que deseja lancar a nota: "));
      if (isNaN(matri)) {
        console.log("Digite um numero. Tente novamente");
        continue;
      }
      break;
    }
    
    let encontrado = 0;

    this.alunos.forEach(function(aluno){
      if(aluno.matricula === matri){
        encontrado = 1;
        aluno.lancarNota();
      } 
    })

    if(encontrado == 0)
      console.log(`Aluno com a matricula ${matri} não foi encontrado`);
    
  }

  removeAluno(){
    while (1) {
      var matri = parseInt(prompt("Digite a matricula do aluno que deseja remover: "));
      if (isNaN(matri)) {
        console.log("Digite um numero. Tente novamente");
        continue;
      }
      break;
    }

    const index = this.alunos.findIndex(aluno => matri === aluno.matricula)

    if(index != -1)
    {
      const removido = this.alunos.splice(index, 1)
      console.log(`Aluno ${removido[0].nome} removido com sucesso.`);
    } else {
      console.log(`Aluno com a matricula ${matri} nao encontrado.`);
    }
  }

  imprimirAlunos(){
    this.alunos.forEach(function (aluno) {
      
      if(aluno.P1 == 0)
        aluno.P1 = '-';

      if(aluno.P2 == 0)
        aluno.P2 = '-';

      if(aluno.P1 != '-' && aluno.P2 != '-'){
        aluno.NF = ( aluno.P1 + aluno.P2 ) / 2;
      } else if (aluno.P1 != '-'){
        aluno.NF = ( aluno.P1 ) / 2;
      } else if (aluno.P2 != '-'){
        aluno.NF = ( aluno.P2 ) / 2;
      }
      
    });
    
    console.log(`\t\t Turma ${this.numturma} - Alunos`);
    console.log('______________________________________________________');
    console.log('|  Matricula  |       Nome      |  P1  |  P2  |  NF  |');
    console.log('|-------------|-----------------|------|------|------|');
    
    this.alunos.forEach(function(aluno){
      console.log(`| ${aluno.matricula.toString().padEnd(11)} | ${aluno.nome.padEnd(15)} | ${aluno.P1.toString().padEnd(4)} | ${aluno.P2.toString().padEnd(4)} | ${aluno.NF.toFixed(1).padEnd(4)} |`);
    })

    console.log('|_____________|_________________|_______|______|_____|');
  }
}

const T1 = new Turma(1)

// Adicionando 4 alunos na turma 
console.log('Adicionando Alunos: \n');
T1.addAluno();
console.log('\n');
T1.addAluno();
console.log('\n');
T1.addAluno();
console.log('\n');
T1.addAluno();
console.log('\n');

// Removendo 1 Aluno
console.log("Removendo Aluno:\n");
T1.removeAluno();

// Lancar nota
console.log("\nLancando notas: \n");
T1.lancarNota();
console.log('\n');
T1.lancarNota();
console.log('\n');
T1.lancarNota();
console.log('\n');
T1.lancarNota();
console.log('\n');

// Mostra Alunos
T1.imprimirAlunos();