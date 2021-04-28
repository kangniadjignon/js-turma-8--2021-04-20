let titulo = document.querySelector(".titulo")

titulo.textContent = "Olá, DOM"


let button = document.querySelector("#btn")

let inputNome = document.querySelector('input[name="nome"]')


button.addEventListener("click", function () {
    console.log("Fui clicado!!")
    titulo.classList.toggle("titulo")


})

button.addEventListener("mouseenter", function () {
    console.log("O mouse está em cima de mim!!!")
})


inputNome.addEventListener("input", imprimeValorDoInput)


function imprimeValorDoInput() {
    console.log(inputNome.value)
    titulo.textContent = inputNome.value
    // titulo.innerHTML = inputNome.value
}


let select = document.querySelector('select#cor[name="cor"]')


select.addEventListener("change", function (evento) {
    // console.log(select.value)
    console.log(evento)
    console.log(evento.target.value)
})