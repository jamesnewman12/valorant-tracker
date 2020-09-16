
import { combineReducers } from 'redux';


function products(state = {
    isFetching: false,
    didInvalidate: false,
    items: []
}, action) {
    switch (action.type) {
        case 'REQUEST_PRODUCTS':
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })
        case 'RECEIVE_PRODUCTS':
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            })
        default:
            return state
    }
}

// function specialPosts(state = { }, action) {
//     switch (action.type) {
//         case RECEIVE_SPECPOSTS:
//         case REQUEST_SPECPOSTS:
//             return Object.assign({}, state, {
//                 req: true
//             })
//         default:
//             return state
//     }
// }

const reducers = combineReducers({
    products
});

export default reducers