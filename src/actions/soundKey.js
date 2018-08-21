export default function soundKey(event) {
    const sound = document.getElementById(event.key.toUpperCase());
    const s = new Audio (sound.src);
    s.currentTime = 0;
    s.play();
}