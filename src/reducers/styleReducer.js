export default function styleReducer(state = '', action) {
    switch(action.type) {
        case 'ADD_STYLE':
            return action.id;

        case 'REMOVE_STYLE':
            return '';
            
        default:
            return state;
    }
}