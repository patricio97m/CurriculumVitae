const form = document.getElementById("newForm")
const nombre = document.getElementById("name");
const email = document.getElementById("email");
const comentario = document.getElementById("comentarios");
let regexNombre = /[a-zA-Z]+$/;
let regexEmail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z._.-]+$/;

form.addEventListener("click", (e) => {
    e.preventDefault();
    validarConsulta();
});

function reset() {
    nombre.value = "";
    email.value = "";
    comentario.value = "";
}

function submit() {
    let newQuery = {
        nombre: nombre.value,
        email: email.value,
        comentario: comentario.value
    }
    localStorage.setItem("newQuery", JSON.stringify(newQuery));
    alert("Consulta enviada con éxito")
    reset();
}
function validarConsulta(){
    let error = false;
    if (!regexNombre.test(nombre.value)) {
        error = true;
        alert("Nombre inválido");
    }
    else if (!regexEmail.test(email.value)) {
        error = true;
        alert("Email inválido");
    }
    else if (comentario.value == ""){
        error = true;
        alert("Ingrese un comentario");
    }
    else{
        submit();
    }
}