window.addEventListener("DOMContentLoaded", init);

function init() {
    window.addEventListener("copy", doCopy);
    window.addEventListener("paste", doPaste);
    document.querySelector("h1").addEventListener("click", autoCopyContent);
}

function doCopy(e) {
    const selection = window.getSelection();
    const text = String(selection).toUpperCase();

    e.clipboardData.setData("text/plain", text);

    e.preventDefault();
}

function doPaste(e) {
    const selection = window.getSelection();
    const text = e.clipboardData.getData("text/plain");

    const span = document.createElement("span");
    span.innerHTML = text;

    if (!selection.rangeCount) return;
    selection.deleteFromDocument();

    selection.getRangeAt(0).insertNode(span);
}

function autoCopyContent(e) {
    const h1 = e.target;

    const selection = document.getSelection();
    selection.removeAllRanges();

    const range = document.createRange();
    range.selectNode(h1.firstChild);

    selection.addRange(range);

    const text = String(selection).toLowerCase();
    console.log(text);

    document.execCommand("copy");
}
