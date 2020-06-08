'use strict'



var dataform = document.getElementById("dataform");
dataform.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(event.target[1].value);  
})
