/// 120, true => 1901
/// 120, false => 1900





console.log('Teste: cálculo do ano de nascimento retorna 1901 para 120 anos com aniversário já feito')

let retorno = calcularAnoNascimento(120, true)

if (!(retorno === 1901)) {
    console.error('retorna ' + retorno, 'esperava ' + 1901)
} else {
    console.info("OK")
}


/////

console.log('Teste: cálculo do ano de nascimento retorna 1900 para 120 anos sem ter feito aniversário')

retorno = calcularAnoNascimento(120, false)

if (!(retorno === 1900)) {
    console.error('retorna ' + retorno, 'esperava ' + 1900)
} else {
    console.info("OK")
}

/// 0, true => false
/// 0, false => false
console.log('Teste: cálculo do ano de nascimento é inválido para idade 0')
retorno = calcularAnoNascimento(0, true)
let retorno2 = calcularAnoNascimento(0, true)
if ((retorno === false) && (retorno2 === false)) {
    console.info("OK")
} else {
    console.error("retornou ", retorno, retorno2, "esperava", false)
}


/// 2021, true => 0