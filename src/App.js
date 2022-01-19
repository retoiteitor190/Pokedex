import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const [pokemon,setPokemon]= useState({});

  const[actual,setActual]= useState(false);

  const toggle=()=>{
    setActual(!actual)
  }
  const fetchPokemon=(id)=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response)=>response.json())
    .then((data)=>setPokemon(data));
  };

  const getRandomInt=(min= 1,max=600)=>{
    return Math.floor(Math.random()* (max-min)+min);
  }

  const next=(min=1,max=600)=>{
    if(pokemon.id >=max){
      return pokemon.id = min;
    } else{
      return pokemon.id +1;
    } 
    //return pokemon.id +1;
  }
  const back=(min=1, max=600)=>{
    if(pokemon.id<=min){
    return pokemon.id=max;
  }else {
    return pokemon.id - 1 ;
  } ;
  };

  useEffect(()=>{
    console.log({pokemon});
  },[pokemon]);
  return (
    <div className="App">
      <header className="App-header">
        <div className='Git-Enlace'>
        <h3>Enlace de GitHub </h3>
        <a href='https://github.com/retoiteitor190/Pokedex.git'>Git Alejandro Ruiz Moreno</a>
        </div>
      
        <div className='flex-container'>
          <img src={pokemon?.sprites?.back_default ?? "https://pngimg.com/uploads/pokeball/pokeball_PNG26.png"} className="poke-image" alt="logo" />
          <img src={pokemon?.sprites?.front_default ?? "https://i.pinimg.com/originals/95/fc/30/95fc304b40461a9922bd1d3aff885496.png"} className="poke-image" alt="logo" />
        </div>
        <h3>pokemon names</h3>
        <p> {pokemon.name ?? "No pokemon Selected"}</p>
        <h3>Id Pokemon</h3>
        <p>{pokemon.id}</p>
        <div>
          <ul className='text'>
          {
            pokemon?.abilities?.map((ability) => (
              <li key={ability.ability.id}> {ability.ability.name}  </li>
            ))
          }
          </ul>
          </div>
        <div className='flex-container'>
          <button className='button' onClick={()=>fetchPokemon(back())}>Back</button>
          <button className='button' onClick={()=>fetchPokemon(getRandomInt())}>Random</button>
          <button className='button' onClick={()=>fetchPokemon(next())}>Next</button>
        </div>
        <div>
          
        </div>
      </header>
    </div>
  );
}

export default App;
