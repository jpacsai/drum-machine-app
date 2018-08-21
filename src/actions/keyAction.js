import { playSound } from './playSound';

export default function keyAction(event) {
    const key = event.key;

    const audio = document.getElementById(key.toUpperCase());
    playSound(audio);

    return {
        type: 'CLICK',
        key
    }
}