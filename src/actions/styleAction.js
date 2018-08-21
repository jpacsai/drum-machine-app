export function styleAction(event) {

    console.log('add ' + event.key);
    const id = event.key;

    return {
        type: 'ADD_STYLE',
        id
    }
}