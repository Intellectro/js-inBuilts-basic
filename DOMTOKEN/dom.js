const name = document.querySelector(".textform");
const email = document.querySelector(".email");
const output = document.querySelector(".output");
const lorem = document.querySelector(".lorem");
const links = document.querySelector("#linkup");

name.addEventListener("input", textOut);
email.addEventListener("input", textOut);

function textOut() {
    const nameval = name.value;
    const emailval = email.value;
    output.innerHTML = `${nameval} ${emailval}`;
}

console.log(lorem.classList); // gives you a DOMtokenlist
console.log(lorem.className); // gives you a string
console.log(links.relList); // gives you a DOMtokenList
console.log(links.rel); // gives you a string

console.log(output.getAttribute("for"));
console.log(output.htmlFor);
