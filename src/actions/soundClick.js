export function soundClick(audio) {
    console.log(audio.src)
    const s = new Audio (audio.src);
    s.currentTime = 0;
    s.play();
}