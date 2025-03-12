const APP = {
    win: null,

    channel: new BroadcastChannel("intellAI"),

    openTab: () => {
        APP.win = window.open("./broadcast.html");
    },

    sendMessage: () => {
        const msg = document.getElementById("msg-input").value;
        if (msg) {
            APP.channel.postMessage({ message: msg });
        }
    },

    getMessage: (e) => {
        if (e && e.data && e.data.message) {
            document.querySelector(
                ".output"
            ).innerHTML += `<p>Message: ${e.data.message}</p>`;
        }
    },

    broadMsgInit: () => {
        document
            .querySelector(".open-tab")
            .addEventListener("click", APP.openTab);
        document
            .querySelector(".send-msg")
            .addEventListener("click", APP.sendMessage);

        navigator.serviceWorker.register("./broadjw.js");

        APP.channel.addEventListener("message", APP.getMessage);
    },
};

window.addEventListener("DOMContentLoaded", APP.broadMsgInit);
