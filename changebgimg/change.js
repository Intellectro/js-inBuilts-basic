const container = document.querySelector(".container");

function randomColor() {
    return (bgColor = Math.floor(Math.random() * 255));
}

setInterval(() => {
    container.style.backgroundColor =
        "rgb(" +
        randomColor() +
        ", " +
        randomColor() +
        ", " +
        randomColor() +
        ")";
}, 1000);
