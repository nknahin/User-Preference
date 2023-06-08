const selectFontSize = document.getElementById("selectFontSize");
const selectBgColor = document.getElementById("selectBgColor");
const resetButton = document.getElementById("resetButton");
const mainElement = document.querySelector("main");

// get item in local storage
const setValues = (fontSize, bgColor) => {
    selectFontSize.value = fontSize; 
    selectBgColor.value = bgColor;
    mainElement.style.fontSize = fontSize  ;
    mainElement.style.backgroundColor = bgColor ;
}



const initialSetup = () => {
    const bgColor = localStorage.getItem("bgColor");
    const fontSize = localStorage.getItem("fontSize");

    if(bgColor && fontSize){
        setValues(fontSize, bgColor);

    }
    if(!bgColor && !fontSize){
        setValues("16px", "aqua");
    }
    if(!bgColor && fontSize){
        setValues(fontSize, "aqua");
    }
    if(bgColor && !fontSize){
        setValues("16px", bgColor);
    }
}




// changing font size
const changeFontSize = (event) => {
    const selectedFontSize = event.target.value;
    mainElement.style.fontSize =selectedFontSize  ;
    localStorage.setItem("fontSize", selectedFontSize);
}

// changing bg color
const changeBgColor = (event) => {
    const selectedBgColor =event.target.value; 
    mainElement.style.backgroundColor = selectedBgColor ;
    localStorage.setItem("bgColor", selectedBgColor);
}

// clearing local storage
const clearLocalStorage = (event) => {
    localStorage.removeItem("bgColor");
    localStorage.removeItem("fontSize");
    setValues("16px", "aqua");
}


selectFontSize.addEventListener("change", changeFontSize);
selectBgColor.addEventListener("change", changeBgColor);
resetButton.addEventListener("click", clearLocalStorage)


initialSetup();