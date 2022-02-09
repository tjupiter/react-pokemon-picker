import React, { useState, useEffect } from 'react';
import PokemonList from './components/PokemonList';
import PokeHeader from './components/PokeHeader';
import PokeSearch from './components/PokeSearch';
import axios from 'axios';
import './index.css';

function App() {

  const [pokemon, setPokemon] = useState([]);  
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true);
    let cancel;
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setLoading(false);
      setNextPageUrl(res.data.next);
      setPrevPageUrl(res.data.previous); 
      setPokemon(res.data.results.map(p => p.name))
    })

    return () => cancel(); 
  }, [currentPageUrl])
  // because the array of arguments above is empty the useEffect will run
  // only once. We could add arguments there, and everytime one of those
  // argument changes then it's going to rerun our effect

  function goToNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }
  function goToPrevPage() {
    setCurrentPageUrl(prevPageUrl)

    // I used the cobe below to alert the user when they 
    // were on the first page. It was replaced with a condition on
    // the disabled property of the button instead
    // ```
    // if (prevPageUrl == null) {
    //   alert(`You're on the first page`)
    //   // setCurrentPageUrl(currentPageUrl)
    // } else {
    //   setCurrentPageUrl(prevPageUrl)
    // }
    // ```
  }

  if (loading) return "Loading Pokemons..."

  return (
    <>
      <PokeHeader />
      <PokeSearch />
      {/* <Pokemon /> */}
      <PokemonList pokemon={pokemon}/>
    </>
  );
}

export default App;
