export default function keyAction(event) {
    const keyArr = ['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c'];
    const key = keyArr.includes(event.key) ? event.key : null;

    return {
        type: 'CLICK',
        key
    }
}