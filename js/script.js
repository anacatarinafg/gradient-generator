const toggleTheme = document.querySelector(".navbar__button");
const button = document.querySelector(".generator__button");
const colorRgba = document.querySelector(".generator__color");
const body = document.querySelector("body");

// Add dark theme to the webpage
toggleTheme.addEventListener("click", (event) => {
    const body = document.querySelector("body");
    if (body.classList.contains("darkMode")) {
        body.classList.remove("darkMode");
        event.target.innerHTML = '<span class="material-symbols-outlined navbar__toggle">dark_mode</span>'
    } else {
        body.classList.add("darkMode");
        event.target.innerHTML = '<span class="material-symbols-outlined navbar__toggle">light_mode</span>'
    }
})

// Create a function that generates random colors values
function randomColor() {
    let color = 'rgba(' + (Math.floor(Math.random() * 256)) + ',' 
    + (Math.floor(Math.random() * 256)) + ',' 
    + (Math.floor(Math.random() * 256)) + ','
    + Math.random().toFixed(2) + ')';
    return color;
  }


// Create a function that will be called when clicked on the button so it can generate gradient colors
function createGradient() {
    let firstColor = randomColor();
    let secondColor = randomColor();
    body.style.background = "linear-gradient(to left, " + firstColor + ", " 
    + secondColor +")";
    colorRgba.innerHTML = "background: linear-gradient(to left, " + firstColor + ", " + secondColor + ");";
}