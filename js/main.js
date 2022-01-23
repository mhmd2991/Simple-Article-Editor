let textFamily = document.getElementById('textFamily');
let boldBtn = document.querySelector('.bold-text');
let italicBtn = document.querySelector('.italic-text');
let minus = document.querySelector('.minus');
let plus = document.querySelector('.plus');
let btns = document.querySelectorAll(".btn");
let textSize = document.querySelector('.text-size');
let textSizeVal = textSize.innerHTML;
let colorPicker = document.querySelector('.colorPicker');
let invertBtn = document.querySelector('.invert-color');
let textContent = document.querySelector('.editor-text p');

//Make Text Bold
boldBtn.addEventListener("click", () => {
    textContent.classList.toggle("bold");
    boldBtn.classList.toggle("active");
});

//Make Text Italic
italicBtn.addEventListener("click", () => {
    textContent.classList.toggle("italic");
    italicBtn.classList.toggle("active");
});

//Invert Colors
invertBtn.addEventListener("click", () => {
    textContent.classList.toggle("invert");
    invertBtn.classList.toggle("active");
});

//ٌIncrement and Decrement Font size
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.classList.contains('minus')) {
            --textSizeVal;
        } else {
            ++textSizeVal;
        }
        textSize.innerHTML = textSizeVal;
        textContent.style.fontSize = textSizeVal + "px";

        if (textSizeVal <= 5) {
            minus.style.display = 'none';
        } else {
            minus.style.display = 'block';
        }
    });
});

//Change Font Family
textFamily.addEventListener("change", () => {
    let textFamilyVal = formid.textFamily[formid.textFamily.selectedIndex].value;
    textContent.style.fontFamily = textFamilyVal;
});

//Change Text Color
colorPicker.addEventListener("change", () => {
    let colorPickerVal = colorPicker.value;
    textContent.style.color = colorPickerVal;
});