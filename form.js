let slider = document.querySelector(".loginbtn")
let heading = document.querySelector(".heading")
let button = document.querySelector(".login-btn")

button.addEventListener("click", ()=>{
    if(window.matchMedia("(max-width: 750px)").matches){
        if(button.innerHTML === "login"){
            button.innerHTML = "Sign Up"
            slider.style.transform = "translateY(100%)"
            heading.innerHTML = "Don't have an account ?"
        }
        else{
            button.innerHTML = "login"
            slider.style.transform = "translateY(0%)"
            heading.innerHTML = "Already have an account ?"
        }
    }
    else{
        if(button.innerHTML === "login"){
            button.innerHTML = "Sign Up"
            slider.style.transform = "translateX(100%)"
            heading.innerHTML = "Don't have an account ?"
        }
        else{
            button.innerHTML = "login"
            slider.style.transform = "translateX(0%)"
            heading.innerHTML = "Already have an account ?"
    }

}
})

