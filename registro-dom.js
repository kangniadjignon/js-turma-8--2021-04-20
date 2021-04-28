let pessoas = []
let form = document.querySelector("#registro")

form.addEventListener("submit", function (evento) {
    evento.preventDefault()

    let dados = new FormData(form)
    let registro = registrarPessoa(dados)

    pessoas.push(registro)
    alert("Pessoa registrada!")
})

function registrarPessoa(formData) {
    let nome = formData.get("nome")
    let sobrenome = formData.get("sobrenome")
    let idade = Number(formData.get("idade"))
    let cpf = formData.get("cpf")
    let telefone = formData.get("telefone")
    let nacionalidade = formData.get("nacionalidade")
    
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
        if (a.eMaisVelha(b)) {
            return 1
        } else if (b.eMaisVelha(a)) {
            return -1
        } else {
            return 0
        }
    })
}