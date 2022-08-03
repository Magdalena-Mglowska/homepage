{
    const welcome = () => {
        console.log("Hello world");
    }
    const onChangeColorClick = () => {

        const header1 = document.querySelector(".header__header1");

        header1.classList.toggle("header__newHeader1");

    };

    const onButtonClick = () => {
        const unordered = document.querySelector(".navigation__unordered");
        const themeName = document.querySelector(".article1__themeName");
        unordered.classList.toggle("navigation__unordered2");

        if (unordered.classList.contains("navigation__unordered2")) {
            themeName.innerText = "Włącz";

        }
        else {
            themeName.innerText = "Wyłącz";
        }
    };


    const init = () => {
        const changeColorButton = document.querySelector(".article1__changeColor");
        changeColorButton.addEventListener("click", onChangeColorClick);

        welcome();

        const button = document.querySelector(".article1__button");
        console.log("themeName");
        button.addEventListener("click", onButtonClick);
    };
    init();


}