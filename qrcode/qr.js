document.querySelector(".btn").addEventListener("click", createQR);

function createQR() {
    const text = document.querySelector(".input").value;
    document.querySelector(
        ".image"
    ).src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
}
