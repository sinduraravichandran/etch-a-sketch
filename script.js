const container = document.querySelector("#container");
const button = document.querySelector("button");

for (let i=0; i<256; i++) {
    const div = document.createElement("div");
    container.appendChild(div);
    div.classList.add("div");
    div.setAttribute("id", `div-${i}`)
}

container.addEventListener("mouseover", (event) => {
    const color1 = getRandomNumber();
    const color2 = getRandomNumber();
    const color3 = getRandomNumber();
    const targetElement = document.querySelector(`#${event.target.id}`);
    targetElement.classList.remove("div");
    targetElement.classList.add("divColor");
    targetElement.style.backgroundColor = `rgb(${color1} ${color2} ${color3})`
})

button.addEventListener("click", (event) => {
    let gridSize = prompt("Input the number of squares per side");
    if (!(gridSize >= 1 && gridSize <= 100)) {
        gridSize = prompt("Please input a valid integer from 1 to 100")
    }

    //remove all children from container
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    for (let i=0; i<(gridSize*gridSize); i++) {
        const div = document.createElement("div");
        container.appendChild(div);
        div.classList.add("div");
        div.setAttribute("id", `div-${i}`)
    }
    container.setAttribute("style", `width: ${gridSize*50}px`)
    
})



function getRandomNumber() {
    return Math.floor(Math.random() * 255) + 1

}



