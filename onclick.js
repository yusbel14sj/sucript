const email = document.getElementById("email");
const label = document.getElementById("label")
const success = "success.html";

function errorEmail(){
    if(email.value=="email"){
        window.location.href = success;

    }else{
        emailIncorect()
    }
}
function emailIncorect(){
    console.log(label);
    email.classList.add("email-error");
    label.classList.add("input-incorrect");
}