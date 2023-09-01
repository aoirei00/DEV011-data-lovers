import { example } from './dataFunctions.js';
//import { renderItems } from './view.js';

// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
import viewData from './view.js';


const pokemones = data.pokemon

function actualizar(imagen, nombre, descripcion){
    let output = '<li class="tarjeta" type="none">' +
    '<img id="imgPokemon" class="imgPokemon" src = "' +imagen+ '"/>'+
    '<dl itemscope itemtype="pokemon">' +
    '<dt>Nombre:</dt><dd itemprop="name">' + nombre+ '</dd>'+
    '<dt>Descripción:</dt><dd itemprop="about">' + descripcion + '</dd>'+
    '</li>'
    return output
}

let queryCharmander = pokemones.filter(function (entry) {
    return entry.name === 'charmander';
})[0];

let queryCharmeleon = pokemones.filter(function (entry) {
    return entry.name === 'charmeleon';
})[0];
let queryCharizard = pokemones.filter(function (entry) {
    return entry.name === 'pikachu';
})[0];

let ulPokemon = document.getElementById("root")



ulPokemon.innerHTML+=actualizar(queryCharmander.img, queryCharmander.name, queryCharmander.about)
ulPokemon.innerHTML+=actualizar(queryCharmeleon.img, queryCharmeleon.name, queryCharmeleon.about)
ulPokemon.innerHTML+=actualizar(queryCharizard.img, queryCharizard.name, queryCharizard.about)

console.log(queryCharmander,actualizar(queryCharmander.img, queryCharmander.name, queryCharmander.about)
, '\n', pokemones)

