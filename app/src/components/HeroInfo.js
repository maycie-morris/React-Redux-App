import React from 'react'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchHeroes } from '../actions'
import { Hero } from './hero'


export const HeroInfo = props => {
    const dispatch = useDispatch()

    const getHeroes = e => {
        e.preventDefault()
        dispatch(fetchHeroes())
    }
    
    return (
        <div>
            <h1 className="header">Overwatch</h1>
            <Hero hero={props.hero} />
            <button className="button-idk" onClick= { getHeroes } >Heroes</button>
        </div>
    )
}

function mapStateToProps(state) {
    return (
        {
            hero: state.hero,
            error: state.error
        }
    )
}


export default connect(mapStateToProps, { fetchHeroes }) (HeroInfo)
