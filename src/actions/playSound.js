export function playSound(audio) {
    const s = new Audio (audio.src);
    s.currentTime = 0;
    s.play();
}