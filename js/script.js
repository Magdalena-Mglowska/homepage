{
    const welcome = () => {
        console.log("Hello world");   
    }
    const onChangeColorClick = ()=> {
        
        const header1 = document.querySelector(".header1");

        header1.classList.toggle("newHeader1");
        
        };
    
    const onButtonClick = () => {
        const unordered=document.querySelector(".unordered");
    const themeName=document.querySelector(".themeName");
        unordered.classList.toggle("unordered2");
    
        if(unordered.classList.contains("unordered2")){
            themeName.innerText="Włącz";
        
        }
        else{
            themeName.innerText="Wyłącz";
        }
    };
    
    
    
    
    
   const init = ()=>{
    const changeColorButton = document.querySelector(".changeColor");
   changeColorButton.addEventListener("click", onChangeColorClick);
   
   welcome();

   const button=document.querySelector(".button");
    console.log("themeName");
    button.addEventListener("click", onButtonClick);
   };
    init ();
    
    
}