window.addEventListener("DOMContentLoaded", () => {
    createCustomResponse();
    createCustomImageResponse();
});

let copy;

async function createCustomResponse() {
    const data = {
        name: "intellectro",
        age: 21,
    };

    const jsonify = JSON.stringify(data);

    const file = new File([jsonify], "mydata.json", {
        type: "application/json",
    });

    const response = new Response(file, {
        status: 200,
        statusText: "OK",
        headers: {
            "content-type": file.type,
            "content-size": file.size,
        },
    });

    copy = response.clone();
    const content = await copy.json();

    console.log({ content });
}

function createCustomImageResponse() {
    const imgInput = document.createElement("input");
    imgInput.type = "file";
    imgInput.accept = "images/*";
    imgInput.addEventListener("change", async (e) => {
        const input = e.target;
        const file = input.files[0];
        const response = new Response(file, {
            status: 200,
            statusText: "OK",
            headers: {
                "content-type": file.type,
                "content-size": file.size,
            },
        });
        copy = response.clone();
        const blob = await copy.blob();
        const url = URL.createObjectURL(blob);
        console.log(url);
    });
    document.body.addEventListener("click", () => {
        imgInput.click();
    });
}
