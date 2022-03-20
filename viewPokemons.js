import {fillPokemonCard} from './const.js';

console.log(JSON.parse(localStorage.getItem('pokemon1')));

for (let i = 1; i <= localStorage.getItem('countPokemon'); i++){
    fillPokemonCard(JSON.parse(localStorage.getItem(`pokemon${i}`)))
}