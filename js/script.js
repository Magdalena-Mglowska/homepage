console.log("Dżem dobry");

let changeColorButton = document.querySelector(".changeColor");
let header1 = document.querySelector(".header1");


changeColorButton.addEventListener("click", () => {
header1.classList.toggle("newHeader1");

});

let button=document.querySelector(".button");
let unordered=document.querySelector(".unordered");
let themeName=document.querySelector(".themeName");
console.log("themeName");

button.addEventListener("click", () => {
    unordered.classList.toggle("unordered2");

    if(unordered.classList.contains("unordered2")){
        themeName.innerText="Włącz";
    
    }
    else{
        themeName.innerText="Wyłącz";
    }
});


