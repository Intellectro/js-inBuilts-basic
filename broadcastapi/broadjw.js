// "install",
// "activate",
// "message",

const channel = new BroadcastChannel("intellAI");

channel.addEventListener("message", (e) => {
    if (e && e.data && e.data.message) {
        sendMessage(
            `SMS sent successfully ${new Date().getHours()} : ${new Date().getMinutes()}`
        );
    }
});

function sendMessage(msg) {
    channel.postMessage({ message: msg });
}
