import React, { useEffect } from 'react';
import './App.css';
import { HeroInfo } from './components/HeroInfo'
import { connect } from 'react-redux';
import { fetchHeroes } from './actions'



function App({ fetchHeroes, loadingHero, errorMessage }) {
  useEffect(() => {
    fetchHeroes()
  }, [fetchHeroes])

  return (
    <div className="App">
      {!loadingHero ? <HeroInfo /> : <div>...Fetching Hero </div>}
      {errorMessage !== "" ? <div>{errorMessage}</div> : null}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    loadingHero: state.loadingHero,
    errorMessage: state.errorMessage
  }
}

export default connect(mapStateToProps, { fetchHeroes }) (App)
