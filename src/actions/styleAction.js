export function styleAction(event) {
    const id = event.key;
    return {
        type: 'ADD_STYLE',
        id
    }
}