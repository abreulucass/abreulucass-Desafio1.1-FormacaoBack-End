/* Programa questao5.js: crie uma aplicação que faz a entrada de dados pelo console dos dados de
um cliente. Todos os dados deverão ser convertidos para os tipos adequados de acordo com as
regras da tabela a seguir:

Campo          Regras             Tipo
Nome - Pelo menos 5 caracteres - string
CPF - Exatamente 11 dígitos - Number
Data de nascimento - Lida no formato DD/MM/AAAA - O cliente deve ter pelo menos 18 anos na data atual - Date
Renda mensal - Valor ≥ 0 Lida com duas casas decimais e vírgula decimal - Number
Estado civil - C, S, V ou D (maiúsculo ou minúsculo) - String
Dependentes - 0 a 10 - Number

Caso o dado fornecido não obedeça à regra, o programa deve emitir a mensagem de erro adequada
e solicitá-lo novamente. Ao final, os dados corretos deverão ser impressos na tela: CPF com a
máscara 999.999.999-99, renda com 2 casas decimais e data com a máscara dd/mm/aaaa. */


import PromptSync from "prompt-sync";
const prompt = PromptSync();

const regexNum = /\d+/;
const regexSim = /[^\w\s]/;
const regexLetras = /[a-zA-Z]/;
const regexData = /^\d{2}\/\d{2}\/\d{4}$/;
const regexRenda = /^\d+,\d{2}$/

function lerNome(){
    while(1){
        var nome = prompt("Digite o nome do Cliente: (Pelo menos 5 caracteres) - ");

        if(regexNum.test(nome) || regexSim.test(nome)){
            console.log("ERRO: Não é permitido o uso de numeros ou caracteres especiais.");
            continue;
        }

        if(nome.length < 5){
            console.log("ERRO: O nome deve possuir pelo menos 5 caracteres");
            continue;
        }

        break;
    }

    return nome;
    
}

function lerCPF(){
    while(1){
        var CPF = prompt("Digite o CPF do Cliente: (Exatamente 11 dígitos) - ")

        if(regexLetras.test(CPF) || regexSim.test(CPF)){
            console.log("ERRO: Não é permitido o uso de letras ou caracteres especiais.");
            continue;
        }

        if(CPF.length < 11 || CPF.length > 11){
            console.log("ERRO: O CPF tem que ter exatamente 11 digitos")
            continue;
        }

        break;
    }

    return Number(CPF);
}

function lerDataNasc(){
    while(1){
        while(1){
            var data = prompt("Digite a data de nascimento do Cliente: (Lida no formato DD/MM/AAAA - O cliente deve ter pelo menos 18 anos na data atual) - ")
            if (!regexData.test(data)) {
                console.log( "ERRO: Use o formato DD/MM/AAAA.");
                continue;
            }

            break;
        }

        const [dia, mes, ano] = data.split('/').map(Number);

        data = new Date(ano, mes , dia);

        const dataAtual = new Date();
        let idade = dataAtual.getFullYear() - data.getFullYear()
        const mesAtual = dataAtual.getMonth()
        const diaAtual = dataAtual.getDate()

        if(mesAtual < mes || (mesAtual === mes  && diaAtual < dia)){
            idade --;
        }

        if(idade < 18){
            console.log("ERRO: O Cliente não possui 18 anos")
            continue;
        }

        break;
    }

    return data;
}

function lerRenda(){
    while(1){
        var renda = prompt("Digite a renda mensal do Cliente: (Valor ≥ 0 Lida com duas casas decimais e vírgula decimal) - R$")

        if(!regexRenda.test(renda)){
            console.log("ERRO: Use o formato X,XX");
            continue;
        }

        var rendaNumber = Number(renda.replace(',', '.'));

        if(rendaNumber < 0){
            console.log("ERRO: A renda deve ser maior que 0");
            continue;
        }

        break;
    }

    return rendaNumber
}

function lerEstadoCivil(){
    while(1){
        var estadoCivil = prompt("Digite o estado civil do Cliente: (C, S, V ou D (maiúsculo ou minúsculo) ) - ");

        if(estadoCivil == 'C' || estadoCivil == 'c' || estadoCivil == 'S' || estadoCivil == 's' || estadoCivil == 'V' || estadoCivil == 'v' || estadoCivil == 'D' || estadoCivil == 'd'){
            break;
        }

        console.log("ERRO: O estado civil inserido não existe");
    }

    return estadoCivil.toUpperCase();
}

function lerDependentes(){
    while(1){
        var dependentes = Number(prompt("Digite o nome de dependentes do Cliente: (0 a 10) - "));

        if(isNaN(dependentes)){
            console.log("ERRO: O valor digitado não é um numero.");
            continue;
        }

        if(dependentes < 0 && dependentes > 10){
            console.log("ERRO: O valor deve estar entre 0 e 10.");
            continue;
        }
        
        break;
    }

    return dependentes;

}

console.log("Cadastro de CLiente")

const nome = lerNome()
const CPF = lerCPF()
const DataNasc = lerDataNasc()
const rendaMensal = lerRenda()
const estadoCivil = lerEstadoCivil()
const dependentes = lerDependentes()

const cliente = {
    nome: nome,
    CPF: CPF,
    DataNasc: DataNasc,
    rendaMensal: rendaMensal,
    estadoCivil: estadoCivil,
    dependentes: dependentes
}

const nomeTabela = cliente.nome.padEnd(24);
const CPFTabela = cliente.CPF.toString().replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4").padEnd(19);
const dataNascTabela = cliente.DataNasc.getDate().toString().padStart(2, '0')+'/'+cliente.DataNasc.getMonth().toString().padStart(2, '0')+'/'+cliente.DataNasc.getFullYear().toString().padEnd(10);
const rendaTabela = cliente.rendaMensal.toFixed(2).replace('.',',').padEnd(12);
const estadoCivilTabela = cliente.estadoCivil.padEnd(15);
const numeroDependentes = cliente.dependentes.toString().padEnd(22);

console.log("\nMostrando dados dos Clientes")
console.log('________________________________________________________________________________________________________________________________');
console.log('|           Nome           |         CPF         |  Data Nascimento |  Renda Mensal  |  Estado Civil   | Numero de Dependentes |');
console.log('|--------------------------|---------------------|------------------|----------------|-----------------|-----------------------|');
console.log(`| ${nomeTabela} | ${CPFTabela} | ${dataNascTabela} | R$${rendaTabela} | ${estadoCivilTabela} | ${numeroDependentes}|`)
console.log('|--------------------------|---------------------|------------------|----------------|-----------------|-----------------------|');

/*console.log("Mostrando dados dos Clientes")
console.log('________________________________________________________________________________________________________________________________');
console.log('|           Nome           |         CPF         |  Data Nascimento |  Renda Mensal  |  Estado Civil   | Numero de Dependentes |');
console.log('|--------------------------|---------------------|------------------|----------------|-----------------|-----------------------|');
console.log(`| ${cliente.nome.padEnd(24)} | ${cliente.CPF.toString().replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4").padEnd(19)} | ${cliente.DataNasc.getDate().toString().padStart(2, '0')}/${cliente.DataNasc.getMonth().toString().padStart(2, '0')}/${cliente.DataNasc.getFullYear().toString().padEnd(10)} | R$${cliente.rendaMensal.toFixed(2).replace('.',',').padEnd(12)} | ${cliente.estadoCivil.padEnd(15)} | ${cliente.dependentes.toString().padEnd(22} |`)
console.log('|--------------------------|---------------------|------------------|----------------|-----------------|-----------------------|'); */