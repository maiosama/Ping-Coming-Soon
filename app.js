let email=document.getElementById("email");
let notify = document.getElementsByClassName("btn")
let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let errorSpan = document.getElementsByClassName("message");


notify[0].addEventListener('submit', checkForm(e))



    // function emptyErrorMessage(e){
    //     e.preventDefault();
    //     switch (email.value){
    //     case (email.value.length<1):
    //         errorSpan[0].innerHTML ="Whoops! It looks like you forgot to add your email";
    //         break; 
    //     case(!email.value.match(regexEmail)):
    //             errorSpan[0].innerHTML = "Please provide a valid email address";
    //             break;
    //     default:
    //         errorSpan[0].innerHTML=""
    //         }
    // }

    function checkEmail(){
        // e.preventDefault();
        if (email.value.length<1){
            errorSpan[0].innerHTML ="Whoops! It looks like you forgot to add your email"
        }
    }

    function checkEntry(){
        if(!email.value.match(regexEmail)){
            errorSpan[0].innerHTML = "Please provide a valid email address";
        }

    }

    function checkForm(e){
        e.preventDefault();
        var isValid = checkEmail();
        isValid= checkEntry() && isValid;
        return isValid
    }
