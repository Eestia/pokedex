import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import Placeholder from '../Placeholder'; 

import './Layout.css';

function Layout() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

useEffect(() => {
  fetch('https://pokebuildapi.fr/api/v1/pokemon')
    .then(res => res.json())
    .then(data => {
      const sortedData = data.sort((a, b) => a.id - b.id);
      setPokemons(sortedData);
      setLoading(false); // ← stop le chargement
    })
    .catch(err => {
      console.error(err);
      setLoading(false); // même si erreur
    });
}, []);

if (loading) {
    return <Placeholder />;
  }
const filteredPokemons = pokemons.filter(pokemon =>
  pokemon.name.toLowerCase().includes(searchTerm)
);

  return (
    <div className="Layout">
      <div id='ecran'>
          <div id='searchbar'>
            <div>
                <input
                    type="text"
                    placeholder="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
                />
            </div>
            <div id='light'>
                <div id='red'></div>
                <div id='yellow'></div>
                <div id='green'></div>
            </div>
          </div>
        <div id='ecran2'>
          {filteredPokemons.map((pokemon) => (
            <Link to={`/pokemon/${pokemon.id}`} key={pokemon.id} style={{ textDecoration: 'none' }}>
              <div id='info-vignette'>
                <div id='pokemon-img'>
                  <img src={pokemon.image} alt={pokemon.name} />
                </div>
                <div id='pokemon-nom'>
                  <span style={{ color: 'white', paddingLeft: '5px' }}>{pokemon.name}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div id='pokeball'>
        <div className="line-horizontal"></div>
        <div className="centered-div">
          <div className="centered-div2"></div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
