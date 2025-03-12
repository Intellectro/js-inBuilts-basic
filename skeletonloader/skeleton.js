const image = document.querySelector(".image-container").firstElementChild;
const name = document.querySelector(".name-container");
const jobs = document.querySelectorAll(".job-container");
const dots = document.querySelectorAll(".dot");

const url = "https://randomuser.me/api";

window.addEventListener("online", showContents);
window.addEventListener("offline", hideContents);

if (navigator.onLine) {
    showContents({ type: "online" });
} else {
    hideContents({ type: "offline" });
}

function showContents(e) {
    if (e.type == "online") {
        fetchUser(url, image, "image-font");
        name.firstElementChild.classList.add("opacitate");
        jobs.forEach((job) => job.firstElementChild.classList.add("opacitate"));
        dots.forEach((dot) => dot.firstElementChild.classList.add("opacitate"));
    }
}

function hideContents(e) {
    if (e.type == "offline") {
        fetchUser(url, image, "image-hide");
        name.firstElementChild.classList.remove("opacitate");
        jobs.forEach((job) =>
            job.firstElementChild.classList.remove("opacitate")
        );
        dots.forEach((dot) =>
            dot.firstElementChild.classList.remove("opacitate")
        );
    }
}

async function fetchUser(urldata, element, unit) {
    try {
        const res = await fetch(urldata);
        const { results } = await res.json();
        const {
            picture: { large },
        } = results[0];
        element.src = large;
        element.classList.add(`${unit}`);
    } catch (err) {
        console.warn("Failed to fetch user ".err);
    }
}
