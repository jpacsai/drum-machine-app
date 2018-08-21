export default function clickAction(key) {
    
    console.log(key)

    return {
        type: 'CLICK',
        key
    }
}