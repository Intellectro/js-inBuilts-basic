const dropperPicker = document.querySelector(".picker");

dropperPicker.addEventListener("click", function () {
    const colorHex = document.createElement("span");
    colorHex.classList.add("result");
    document.querySelector(".content-container").appendChild(colorHex);

    if (!"EyeDropper" in window) {
        colorHex.innerHTML = "sorry!, browser doesn't support this feature";
        return;
    }

    const drop = new EyeDropper();
    const abortController = new AbortController();
    drop.open({ signal: abortController.signal })
        .then((result) => {
            colorHex.innerHTML = result.sRGBHex;
        })
        .catch((error) => {
            colorHex.innerHTML = error.message;
        });
});
