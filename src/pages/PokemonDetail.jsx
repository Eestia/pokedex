import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Placeholder from '../pages/Placeholder';
import './PokemonDetail.css';

function PokemonDetail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch(`https://pokebuildapi.fr/api/v1/pokemon/${id}`)
      .then(res => res.json())
      .then(data => {
        setTimeout(() => {
          setPokemon(data);
          setLoading(false);
        }, 2000); 
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading || !pokemon) return <Placeholder />;

  return (
    <div className="Layout">
      <div id='ecran'>
        <div id='ecran5'>
          <Link to="/" id='retour'>← Retour</Link>
          <h1>{pokemon.name}</h1>
          <div id='info-pkmn'>
            <div>
              <img src={pokemon.image} alt={pokemon.name} />
            </div>
            <div id='pkmn-txt'>
              <p><strong>Type(s):</strong> {pokemon.apiTypes.map(t => t.name).join(', ')}</p>
              <p><strong>HP:</strong> {pokemon.stats.HP}</p>
              <p><strong>Attack:</strong> {pokemon.stats.attack}</p>
              <p><strong>Defense:</strong> {pokemon.stats.defense}</p>
              <p><strong>Speed:</strong> {pokemon.stats.speed}</p>
            </div>
          </div>
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

export default PokemonDetail;


