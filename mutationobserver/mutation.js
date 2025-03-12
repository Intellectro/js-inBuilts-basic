let observer;

window.addEventListener("DOMContentLoaded", init);

function init() {
    const firstParagh = document.querySelector(".container > p");

    firstParagh.addEventListener("click", change);

    const config = {
        attributes: true,
        attributesOldValue: true,
        // attributeFilter: ["paragh", "text", "title"],
        childList: true,
        subtree: true,
        characterData: false,
        characterOldData: false,
        nextElementSiblings: true,
        tagName: true,
    };

    observer = new MutationObserver(mutated);
    observer.observe(firstParagh, config);
}

function change(e) {
    let p = e.currentTarget;
    p.textContent = "Iyoo ogbe nwanne";
    p.setAttribute("class", "change");
}

function mutated(mutationlist) {
    console.log(mutationlist);

    for (let mutation of mutationlist) {
        if (mutation.type == "childList") {
            console.log("A child node have been added or removed");
        } else if (mutation.type == "attributes") {
            console.log(
                "The " + mutation.attributeName + " attribute was modified"
            );
        }
    }
    observer.disconnect();
    // target (Element)
    // addNodes
    // removeNodes
    // attributeName
    // attributeNameSpace
    // nextSibling (element / textnode)
    // previousSibling (element / textnode)
    // type (attributes "or" childList)
}
