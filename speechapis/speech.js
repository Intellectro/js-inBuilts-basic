let VOICE = null;
let synth = window.speechSynthesis;
let voices = synth.getVoices();

// console.log(voices);

(function addListeners() {
    document
        .getElementById("voiceSelect")
        .addEventListener("change", changeVoice);
    document.getElementById("btnRead").addEventListener("click", readParas);
    document.getElementById("btnPause").addEventListener("click", () => {
        synth.pause();
    });
    document.getElementById("btnResume").addEventListener("click", () => {
        synth.resume();
    });
    document.getElementById("rate").addEventListener("input", (ev) => {
        document.getElementById("rate-value").textContent = ev.target.value;
    });
    document.getElementById("pitch").addEventListener("input", (ev) => {
        document.getElementById("pitch-value").textContent = ev.target.value;
    });
    document.getElementById("volume").addEventListener("input", (ev) => {
        document.getElementById("volume-value").textContent = ev.target.value;
    });

    setTimeout(() => {
        if (voices.length === 0) {
            voices = synth.getVoices();
        }
        loadVoices();
    }, 100);
})();

function loadVoices() {
    for (let i = 0; i < voices.length; i++) {
        if (!voices[i].lang.startsWith("en-")) continue;
        const option = document.createElement("option");
        option.textContent = voices[i].name + " (" + voices[i].lang + ")";
        if (voices[i].default) {
            option.className = "picked";
            VOICE = voices[i];
        }
        option.setAttribute("data-lang", voices[i].lang);
        option.setAttribute("data-name", voices[i].name);
        document.getElementById("voiceSelect").appendChild(option);
    }
}

function changeVoice() {}

function readParas() {}
