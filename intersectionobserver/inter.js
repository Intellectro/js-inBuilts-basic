let count = 0;
function interInit() {
    const texts = document.querySelectorAll(".card");
    {
        var observer;
    }

    observer = new IntersectionObserver(
        (contents) => {
            texts.forEach((text) => text.classList.remove("show"));

            contents.forEach((content) => {
                if (content.isIntersecting) {
                    content.target.classList.add(
                        "show",
                        content.isIntersecting
                    );
                } else {
                    count = 0;
                    console.log(count);
                }
            });
        },
        {
            threshold: 0,
        }
    );
    observer.observe(texts[count++]);

    setTimeout(interInit, 1000);
}

interInit();
