

let a = "Tiago"
console.log(`Ola mundo ${a}`)

document.getElementById("btn-submit").addEventListener("click", e => {

    console.log("O botao foi clicado")


})

document.getElementById("form-login").addEventListener("mouseenter", e => {

    console.log("O mouse está sobre o formulario")


})

document.querySelector("#form-login").addEventListener("mouseleave", e => {


    console.log("O mouse está fora do formulario")


})

document.querySelector("#form-login").addEventListener("submit", e => {


    e.preventDefault()
    let email = document.querySelector("#email").value
    let password = document.querySelector("#password").value


    let json = {
        // quando a propriedade e o valor são iguais,basta colocar como abaixo, ao inves de email:email
        email,
        password

    }//objeto

    if (!json.email) {

        console.error("O campo e-mail deve ser preenchido")

    } else if (!json.password) {


        console.error("O campo password deve ser preenchido")

    } else {

        console.info("Dados validados com sucesso")

    }


})