function getGeoposition() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        document.querySelector(".data-val").innerHTML =
            "Geolocation is not supported in this browser";
    }
}

function showPosition(position) {
    const { latitude, longitude } = position.coords;
    document.querySelector(
        ".data-val"
    ).innerHTML = `The latitude is ${latitude} and longitude is ${longitude}`;
}

getGeoposition();
