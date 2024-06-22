var formcontainer = document.getElementById("formcontainer")
var startcontainer = document.getElementById("Start Container")

function formsubmithandler(){
var name = document.getElementById("name")
var nameerror = document.getElementById("name error")
var email = document.getElementById("email")
var emailerror = document.getElementById("email error")


if(!name.value){
    nameerror.className = "show"
    nameerror.style.color = "red"
    return
}

if(!email.value){
    emailerror.className = "show"
    emailerror.style.color = "red"
    return
}

localStorage.setItem("name" , name.value)
localStorage.setItem("email" , email.value)
formcontainer.className = "hide"
startcontainer.className = "show"

}