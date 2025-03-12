const query = window.matchMedia("(max-width: 600px)");

if (query.matches) {
    document.querySelector("h1").style.color = "red";
} else {
    console.log("no gappppp");
}
