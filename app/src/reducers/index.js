import { FETCH_HEROES, FETCH_HEROES_SUCCESS, FETCH_HEROES_ERROR } from '../actions'


const initialState = {
    hero: [],
    isFetching: false,
    error: ''
}

function reducer(state = initialState, action) {
    console.log('From Reducer', action)
    switch (action.type) {
        case FETCH_HEROES:
            return {
                ...state,
                isFetching: true,
                error: '',
                hero: []
            }

        case FETCH_HEROES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                hero: action.payload
            }

        case FETCH_HEROES_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }

        default:
            return state
    }
}


export default reducer;