import { filterData,sortData } from './dataFunctions.js';
import data from './data/pokemon/pokemon.js';
import viewData from './view.js';

let pokemones = data.pokemon

// Botones para filtrar por typo de pokemon
const buttonFilterWater = document.querySelector('button[value="water"]');
const buttonFilterFire = document.querySelector('button[value="fire"]');
const buttonFilterFight = document.querySelector('button[value="fight"]');
const buttonFilterBug = document.querySelector('button[value="bug"]');
const buttonFilterGrass = document.querySelector('button[value="grass"]');
const buttonFilterGround = document.querySelector('button[value="ground"]');
const buttonFilterFlying = document.querySelector('button[value="flying"]');
const buttonFilterFairy = document.querySelector('button[value="fairy"]');
const buttonFilterElectric = document.querySelector('button[value="electric"]');
const buttonFilterNormal = document.querySelector('button[value="normal"]');
const buttonFilterPoison = document.querySelector('button[value="poison"]');
const buttonFilterGhost = document.querySelector('button[value="ghost"]');
const buttonFilterDark = document.querySelector('button[value="dark"]');
const buttonFilterIce = document.querySelector('button[value="ice"]');
const buttonFilterPsychic = document.querySelector('button[value="psychic"]');
const buttonFilterDragon = document.querySelector('button[value="dragon"]');
const buttonFilterSteel = document.querySelector('button[value="steel"]');
const buttonFilterRock = document.querySelector('button[value="rock"]');

//Botones para filtrar por rareza (legendario)
const buttonFilterNoLegendary = document.querySelector('button[value="nolegendary"]');
const buttonFilterLegendary = document.querySelector('button[value="legendary"]');

//Botones para filtrar por generación
const buttonFilterKanto = document.querySelector('button[value="kanto"]');
const buttonFilterJohto = document.querySelector('button[value="johto"]');

//Botones generales para cambio de vista y limpieza del filtro
const buttonChangeView = document.querySelector('button[id="cambioVista"]');
const buttonCleanFilter = document.querySelector('button[id="limpiarFiltro"]');

//Lista para ordedar las tarjetas
const selectElement = document.querySelector('select[name="ordenName"]');

const ulContentCards = document.getElementById("root");



buttonFilterWater.addEventListener("click",function(){
    ulContentCards.innerHTML = '';
    pokemones = filterData(pokemones, "type", buttonFilterWater.value);
    viewData.namesPokeMap(pokemones,ulContentCards);
}); 

buttonFilterLegendary.addEventListener("click",function(){
    ulContentCards.innerHTML = '';
    pokemones = filterData(pokemones, "pokemon-rarity", buttonFilterLegendary.value);
    viewData.namesPokeMap(pokemones,ulContentCards);
}); 

buttonCleanFilter.addEventListener("click", ()=>{
    pokemones = data.pokemon;
    ulContentCards.innerHTML = '';
});

/* 
selectElement.addEventListener("input",()=>{
    ulContentCards.innerHTML = '';
    pokemones = sortData(pokemones,selectElement.value,selectElement.sortBy)
    viewData.namesPokeMap(pokemones,ulContentCards);
}); */