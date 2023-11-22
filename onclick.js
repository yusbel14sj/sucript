const email = document.getElementById("email");
const label = document.getElementById("label");
const success = "success.html";
const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

function validarCorreo(){
    if(!regex.test(email.value)){
        emailIncorect();
        return false;
    } ;
    nextPage();
    return true
}
function emailIncorect(){
    email.classList.add("email-error");
    label.classList.add("input-incorrect");
}
function nextPage(){
    window.location.href = "success.html"
}