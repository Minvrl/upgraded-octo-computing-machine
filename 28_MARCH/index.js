let usernameInput = document.getElementById("usernameInput")
let ageInput = document.getElementById("ageInput")
let validUsername = true;
let validAge = true;



function checkUsername(){
    let error = document.getElementById("msg")
    error.style.display = "none";
    let succes =document.getElementById("msg2")
    succes.style.display="none"

    let check = true;
    if(usernameInput.value.length<3 || usernameInput.value.length>20 || ageInput.value<16){
        error.style.display = "block";
        check=false;
    }
    else{
        succes.style.display ="block"
    }

    return check;
}


document.getElementById("registerForm").addEventListener("submit",function(e){
    e.preventDefault();
    usernameIsValid = checkUsername();
    
})


usernameInput.addEventListener("input",function(){
    if(!usernameIsValid ){
        checkUsername();
    }
})

ageInput.addEventListener("input",function(){
   
    if(!usernameIsValid ){
        checkUsername();
    }
})