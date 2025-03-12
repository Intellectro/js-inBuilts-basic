const image = document.querySelector(".img");
const text = document.querySelector(".float-text");

window.addEventListener("online", showPicture);
window.addEventListener("offline", showPicture);

function showPicture(e) {
    if (e.type == "online") {
        toogleImage(
            "https://fastly.picsum.photos/id/800/500/500.jpg?hmac=qFGC5C9Xyan6aFWsw43s3IgPrxuJo6e-6x0NQ2wwyzo",
            String(e.type).toUpperCase()
        );
    } else {
        toogleImage(
            "https://fastly.picsum.photos/id/800/500/500.jpg?blur=5&hmac=hsBFoDji1EHhr1I3hZ3MtMur8CoUV5FO7ayMJHOE9yc",
            String(e.type).toUpperCase()
        );
    }
}

if (navigator.onLine) {
    showPicture({ type: "online" });
} else {
    showPicture({ type: "offline" });
}

function toogleImage(value, status) {
    image.src = value;
    text.innerHTML = "You are currently " + status;
}
