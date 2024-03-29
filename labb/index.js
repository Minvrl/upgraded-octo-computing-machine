function GetInputCount(){
    return document.querySelectorAll(".inputs input").length;
}

let plusButton = document.getElementById("plus")
plusButton.addEventListener("click",function(e){
    e.preventDefault();
    let order = GetInputCount() +1;
    let newInput = createInput(order);
    console.log("hello")
    document.querySelector(".inputs").appendChild(newInput)

})


function createInput(order){
    let input = document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("name","input" +order);
    input.setAttribute("placeholder","Fullname " + order);
    return input;

}



document.getElementById("regForm").addEventListener("submit",function(e){
    e.preventDefault();
    let ul = document.querySelector(".namelist");
    ul.innerHTML="";
    let inputs = document.querySelectorAll(".inputs input");

    let isEmpty = false;
    inputs.forEach(input => {
        if(input.value.trim() === ""){
            isEmpty=true;
        }
    })
    if(isEmpty){
        showToast("Please fill in all input fields !")
        return;
    }


    document.querySelectorAll(".inputs input").forEach((elem,index) =>{
        let newLi = document.createElement("li")
        newLi.textContent = (index +1)+". " + elem.value ;
        ul.appendChild(newLi)
    });
});



