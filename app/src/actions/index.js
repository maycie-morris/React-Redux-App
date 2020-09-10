import axios from 'axios';

export const FETCH_HEROES = 'FETCH_HEROES'
export const FETCH_HEROES_SUCCESS = 'FETCH_HEROES_SUCCESS'
export const FETCH_HEROES_ERROR = 'FETCH_HEROES_ERROR'


export const fetchHeroes = () => dispatch => {
    dispatch({type: FETCH_HEROES})
    axios
    .get('https://best-overwatch-api.herokuapp.com/heroes')
    .then(res => {
        dispatch({ type: FETCH_HEROES_SUCCESS, payload: res.data})
    })
    .catch(err => {
        dispatch({ type: FETCH_HEROES_ERROR, payload: err})
    })
    
}
