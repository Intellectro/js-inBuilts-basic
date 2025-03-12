const p = document.querySelector(".first-paragh");

p.addEventListener("click", change);

const config = {
    attributes: true,
    attributesOldValue: true,
    childList: true,
    subtree: true,
    characterData: false,
    characterDataOldValue: false,
};

const observer = new MutationObserver(mutated);

observer.observe(p, config);

function mutated(mutationlist) {
    for (let mutation of mutationlist) {
        console.log(mutation);
        const {
            attributeName,
            target: { outerText: outertext },
        } = mutation;
        switch (mutation.type) {
            case "attributes":
                console.log(
                    "Attribute has been modified to new value " + attributeName
                );
                break;
            case "childList":
                console.log(
                    "The child has been removed or replaced with " + outertext
                );
                break;
            default:
                console.log("Some content has been modified");
        }
    }
    observer.disconnect();
}

function change(e) {
    const p = e.currentTarget;
    p.setAttribute("data-vg", "hidden");
    p.textContent = "This is a new content";
}

// const input = document.createElement("input");
// input.addEventListener("input", (e) => {
//     const value = e.currentTarget.value;
//     p.innerHTML = value;
// });

// p.parentElement.appendChild(input);
