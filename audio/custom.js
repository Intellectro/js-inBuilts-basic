const audio = new Audio();
audio.src = "../2weird-Okalumu-Mma-(TrendyBeatz.com).mp3";
audio.controls = true;
audio.loop = true;
audio.autoplay = false;

let canvas, ctx, analyser, context, fbcArray, source, bars, barX, barH, barW;

window.addEventListener("load", playAudio);

function playAudio() {
    document.querySelector(".audio-container").appendChild(audio);

    context = new AudioContext();

    analyser = context.createAnalyser();

    source = context.createMediaElementSource(audio);

    source.connect(analyser);
    analyser.connect(context.destination);

    canvas = document.querySelector(".audio-analyser");
    ctx = canvas.getContext("2d");

    frameLooper();
}

function frameLooper() {
    window.requestAnimationFrame(frameLooper);

    fbcArray = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(fbcArray);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#000000";

    bars = 100;

    for (let i = 0; i < bars; i++) {
        barX = i * 3;
        barW = 2;
        barH = -(fbcArray[i] / 2);

        ctx.fillRect(barX, canvas.height, barW, barH);
    }
    context.resume();
}
