fetch(
    "https://fastly.picsum.photos/id/181/500/500.jpg?hmac=JzpsomIvXt2-Q1cl3s9n1e8RBd-VkGHx9kcT4YmoXFE"
).then((res) =>
    res.blob().then((blob) => {
        const file = new File([blob], "image", { type: blob.type });
        fileReader(file);
    })
);

function fileReader(data) {
    const reader = new FileReader();
    reader.readAsDataURL(data);
    reader.addEventListener("load", () => {
        console.log(reader.result);
    });
}
