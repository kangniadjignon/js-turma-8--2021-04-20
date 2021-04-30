let pessoas = [];
let form = document.querySelector("#registro");

let campoCpf = form.querySelector('[name="cpf"]');
let campoEmail = form.querySelector('[name="email"]');

let dadosValidacao = {
  cpfValido: validarCpf(campoCpf.value),
  emailValido: validarEmail(campoEmail.value),
};

campoCpf.addEventListener("input", function () {
  if (validarCpf(campoCpf.value)) {
    campoCpf.classList.remove("campo-invalido");
    dadosValidacao.cpfValido = true;
  } else {
    campoCpf.classList.add("campo-invalido");
    dadosValidacao.cpfValido = false;
  }
});

campoEmail.addEventListener("input", function () {
  if (validarEmail(campoEmail.value)) {
    campoEmail.classList.remove("campo-invalido");
    dadosValidacao.emailValido = true;
  } else {
    campoEmail.classList.add("campo-invalido");
    dadosValidacao.emailValido = false;
  }
});

form.addEventListener("submit", function (evento) {
  evento.preventDefault();

  let dados = new FormData(form);

  if (!dadosValidacao.cpfValido) {
    alert("CPF inválido, por favor verifique os dados!");
    return;
  }
  if (!dadosValidacao.emailValido) {
    alert("É necessário cadastrar um email válido!");
    return;
  }

  let registro = registrarPessoa(dados);

  pessoas.push(registro);
  alert("Pessoa registrada!");
});

function registrarPessoa(formData) {
  let nome = formData.get("nome");
  let sobrenome = formData.get("sobrenome");
  let idade = Number(formData.get("idade"));
  let cpf = formData.get("cpf");
  let telefone = formData.get("telefone");
  let nacionalidade = formData.get("nacionalidade");

  let registro = {
    nome: nome,
    sobrenome,
    idade,
    cpf,
    telefone,
    nacionalidade,
    eMaisVelha: function (pessoa) {
      return this.idade > pessoa.idade;
    },
  };

  return registro;
}

function ordenarPessoas(pessoas) {
  return pessoas.sort((a, b) => {
    if (a.eMaisVelha(b)) {
      return 1;
    } else if (b.eMaisVelha(a)) {
      return -1;
    } else {
      return 0;
    }
  });
}

///

/// "123.456.789-98"  // limpar o que náo for número
/// "12345678998" // tem 11 caracteres
function validarCpf(cpf) {
  cpf = cpf.replaceAll(/\D/g, "");

  if (cpf.length !== 11) {
    return false;
  }
  if (/^0+$/.test(cpf)) {
    return false;
  }

  let primeiroDigitoVerificador = Number(cpf[9]);
  let segundoDigitoVerificador = Number(cpf[10]);

  // console.log("primeiro")
  // console.log("extraido", primeiroDigitoVerificador)
  // console.log("calculado", calcularDigitoVerificador(cpf.slice(0, 9)))

  if (
    primeiroDigitoVerificador !== calcularDigitoVerificador(cpf.slice(0, 9))
  ) {
    return false;
  }

  // console.log("segundo")
  // console.log("extraido", segundoDigitoVerificador)
  // console.log("calculado", calcularDigitoVerificador(cpf.slice(1, 10)))

  if (
    segundoDigitoVerificador !== calcularDigitoVerificador(cpf.slice(1, 10))
  ) {
    return false;
  }

  return true;

  function calcularDigitoVerificador(sequencia) {
    let soma = 0;

    for (i = 0; i < 9; i++) {
      soma += Number(sequencia[i]) * (i + 1);
    }

    let resto = soma % 11;
    if (resto === 10) {
      return 0;
    }
    return resto;

    // return (soma % 11) % 10
  }
}

function validarEmail(email) {
  return /^[a-zA-Z0-9._]+@[a-zA-Z0-9._]+(\.[a-zA-Z0-9._]+)+$/.test(email);
}
