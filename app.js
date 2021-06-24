let email=document.forms["form"]["email"];
let notify = document.getElementsByClassName("form")
let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let form=document.getElementById("form")
let errorSpan = document.createElement("p");
errorSpan.className="message"


notify[0].addEventListener('submit', checkForm)


    function checkForm(e){
        e.preventDefault();
        if (email.value ===''){
            form.appendChild(errorSpan)
            form.insertBefore(errorSpan,form.childNodes[2])
            errorSpan.innerHTML ="Whoops! It looks like you forgot to add your email"
            email.style.borderColor="hsl(354, 100%, 66%)"
            email.style.display="inline-block"
        }else if (!email.value.match(regexEmail)){
            form.appendChild(errorSpan)
            form.insertBefore(errorSpan,form.childNodes[2])
            errorSpan.innerHTML = "Please provide a valid email address";
            email.style.borderColor="hsl(354, 100%, 66%)"

        }

    }
