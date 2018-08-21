export default function clickReducer(state = '', action) {
    
    switch(action.type) {
        case 'CLICK':
            console.log(action.key)
            return action.key;

        default:
            return state;
    }
}