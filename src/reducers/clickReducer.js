export default function clickReducer(state = '', action) {
    switch(action.type) {
        case 'CLICK':
            return action.key;

        default:
            return state;
    }
}