const email = document.getElementById("email");
const label = document.getElementById("label");
const url = "success.html";
const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/
function validarCorreo(){
    if(!regex.test(email.value)){
        emailIncorect();
        return false;
    } ;
    return true
}
function emailIncorect(){
    email.classList.add("email-error");
    label.classList.add("input-incorrect");
}
// function nextPage(){
//     window.location.href = url;
// }
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto
    miFuncion();
  });
function miFuncion() {
    // alert("Formulario enviado. Puedes realizar aquí acciones adicionales.");
    window.location.href = "success.html";
    // Puedes realizar acciones adicionales aquí, por ejemplo, enviar datos mediante Ajax
}