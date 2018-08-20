export default function clickAction(event) {
    
    const key = event.target.id;

    return {
        type: 'CLICK',
        key
    }
}