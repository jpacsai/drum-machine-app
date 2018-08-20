export default function keyAction(event) {
    const key = event.key;

    return {
        type: 'CLICK',
        key
    }
}