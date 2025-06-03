import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function PokemonDetail() {
   const { id } = useParams();
   const [pokemon, setPokemon] = useState(null);

   useEffect(() => {
     fetch(`https://pokebuildapi.fr/api/v1/pokemon/${id}`)
       .then(res => res.json())
       .then(data => setPokemon(data))
       .catch(err => console.error(err));
   }, [id]);

   if (!pokemon) return <div>Chargement...</div>;

   return (
     <div style={{ padding: '20px', color: 'white' }}>
       <Link to="/" style={{ color: '#ccc' }}>← Retour</Link>
       <h1>{pokemon.name}</h1>
       <img src={pokemon.image} alt={pokemon.name} style={{ width: '150px' }} />
       <p><strong>Type(s):</strong> {pokemon.apiTypes.map(t => t.name).join(', ')}</p>
       <p><strong>HP:</strong> {pokemon.stats.HP}</p>
       <p><strong>Attack:</strong> {pokemon.stats.attack}</p>
       <p><strong>Defense:</strong> {pokemon.stats.defense}</p>
       <p><strong>Speed:</strong> {pokemon.stats.speed}</p>
     </div>
   );
 }

 export default PokemonDetail;
