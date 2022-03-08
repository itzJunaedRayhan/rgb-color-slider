let r = document.getElementById("r");
let g = document.getElementById("g");
let b = document.getElementById("b");
let rgbButton = document.querySelector(".rgbButton");
let wrapper   = document.querySelector(".wrapper");


//  RGB Color Slider Function:
function rgbColorSlider () {
    let result = `${parseInt(r.value)},${parseInt(g.value)},${parseInt(b.value)}`;
    rgbButton.innerText = `rgb(${result})`;
    wrapper.style.backgroundColor = `rgb(${result})`;
}



r.addEventListener("input", rgbColorSlider);
g.addEventListener("input", rgbColorSlider);
b.addEventListener("input", rgbColorSlider);

