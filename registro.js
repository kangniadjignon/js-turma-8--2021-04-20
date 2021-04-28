let pessoas = []


let resposta = 'S'
let contador = 0

while(resposta == 'S') {
    contador += 1
    alert("Iniciando registro da pessoa " + (contador))
    pessoas.push(registrarPessoa())
    
    resposta = prompt("Deseja registrar outra pessoa? S/N")
}

console.log("Da mais nova para a mais velha temos:")
for (let pessoa of ordenarPessoas(pessoas)) {
    console.log(`${pessoa.nome} ${pessoa.sobrenome} com ${pessoa.idade} anos`)
}

function eMaisVelha(pessoa1, pessoa2) {
    return pessoa1.idade > pessoa2.idade
}

function registrarPessoa() {
    let nome = prompt("Qual é seu nome?")
    let sobrenome = prompt("Qual é seu sobrenome?")
    let idade = Number(prompt("Qual a sua idade?"))
    let cpf = prompt("Digite seu CPF")
    let telefone = prompt("Qual é seu telefone?")
    let nacionalidade = prompt("Qual a sua nacionalidade?")
    
    let registro = {
        nome: nome,
        sobrenome,
        idade,
        cpf,
        telefone,
        nacionalidade,
        eMaisVelha: function(pessoa) {
           return this.idade > pessoa.idade
        }
    }
    
    return registro
}

function ordenarPessoas(pessoas) {
    return pessoas.sort((a, b) => {
        if (a.idade > b.idade) {
            return 1
        } else if (a.idade < b.idade) {
            return -1
        } else {
            return 0
        }
    })
}