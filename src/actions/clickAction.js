import { playSound } from './playSound';

export default function clickAction(event) {

    const key = event.target.id;
    
    const audio = document.getElementById(key.toUpperCase());
    playSound(audio);

    return {
        type: 'CLICK',
        key
    }
}