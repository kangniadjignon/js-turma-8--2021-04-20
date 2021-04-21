// let idade = Number(prompt("Informe a sua idade"));
// let jaFezAniversario = confirm("Você já fez aniversário esse ano?");

// console.log(
//   `Seu ano de nascimento é...  ${calcularAnoNascimento(idade, jaFezAniversario)}`
// );

function calcularAnoNascimento(idadeDaPessoa, jaFezAniversario) {
  let anoAtual = new Date().getFullYear();
  let anoNascimento;

  if (idadeDaPessoa == 0) {
      return false
  }

  if (jaFezAniversario) {
    anoNascimento = anoAtual - idadeDaPessoa;
    } else {
    anoNascimento = anoAtual - (idadeDaPessoa + 1);
  }

  return anoNascimento;
}


