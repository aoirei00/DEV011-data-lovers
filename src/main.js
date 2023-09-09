import {filterData,sortData, getPropertyValue } from './dataFunctions.js';
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
const buttonFilterMythic = document.querySelector('button[value="mythic"]');
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


//Funciones de filtrado por tipo 
buttonFilterWater.addEventListener("click",function(){
    ulContentCards.innerHTML = '';
    pokemones = filterData(pokemones, "type", buttonFilterWater.value);
    viewData.namesPokeMap(pokemones,ulContentCards);
}); 

buttonFilterFire.addEventListener("click",function(){
    ulContentCards.innerHTML = '';
    pokemones = filterData(pokemones, "type", buttonFilterFire.value);
    viewData.namesPokeMap(pokemones,ulContentCards);
}); 

buttonFilterFight.addEventListener("click",function(){
    ulContentCards.innerHTML = '';
    pokemones = filterData(pokemones, "type", (buttonFilterFight.value));
    viewData.namesPokeMap(pokemones,ulContentCards);
}); 

buttonFilterBug.addEventListener("click",function(){
    ulContentCards.innerHTML = '';
    pokemones = filterData(pokemones, "type", buttonFilterBug.value);
    viewData.namesPokeMap(pokemones,ulContentCards);
}); 

buttonFilterGrass.addEventListener("click",function(){
    ulContentCards.innerHTML = '';
    pokemones = filterData(pokemones, "type", buttonFilterGrass.value);
    viewData.namesPokeMap(pokemones,ulContentCards);
}); 

buttonFilterGround.addEventListener("click",function(){
    ulContentCards.innerHTML = '';
    pokemones = filterData(pokemones, "type", buttonFilterGround.value);
    viewData.namesPokeMap(pokemones,ulContentCards);
}); 

buttonFilterFlying.addEventListener("click",function(){
    ulContentCards.innerHTML = '';
    pokemones = filterData(pokemones, "type", buttonFilterFlying.value);
    viewData.namesPokeMap(pokemones,ulContentCards);
}); 

buttonFilterFairy.addEventListener("click",function(){
    ulContentCards.innerHTML = '';
    pokemones = filterData(pokemones, "type", buttonFilterFairy.value);
    viewData.namesPokeMap(pokemones,ulContentCards);
}); 

buttonFilterElectric.addEventListener("click",function(){
    ulContentCards.innerHTML = '';
    pokemones = filterData(pokemones, "type", buttonFilterElectric.value);
    viewData.namesPokeMap(pokemones,ulContentCards);
}); 

buttonFilterNormal.addEventListener("click",function(){
    ulContentCards.innerHTML = '';
    pokemones = filterData(pokemones, "type", buttonFilterNormal.value);
    viewData.namesPokeMap(pokemones,ulContentCards);
}); 

buttonFilterPoison.addEventListener("click",function(){
    ulContentCards.innerHTML = '';
    pokemones = filterData(pokemones, "type", buttonFilterPoison.value);
    viewData.namesPokeMap(pokemones,ulContentCards);
}); 

buttonFilterGhost.addEventListener("click",function(){
    ulContentCards.innerHTML = '';
    pokemones = filterData(pokemones, "type", buttonFilterGhost.value);
    viewData.namesPokeMap(pokemones,ulContentCards);
}); 

buttonFilterDark.addEventListener("click",function(){
    ulContentCards.innerHTML = '';
    pokemones = filterData(pokemones, "type", buttonFilterDark.value);
    viewData.namesPokeMap(pokemones,ulContentCards);
}); 

buttonFilterIce.addEventListener("click",function(){
    ulContentCards.innerHTML = '';
    pokemones = filterData(pokemones, "type", buttonFilterIce.value);
    viewData.namesPokeMap(pokemones,ulContentCards);
}); 

buttonFilterPsychic.addEventListener("click",function(){
    ulContentCards.innerHTML = '';
    pokemones = filterData(pokemones, "type", buttonFilterPsychic.value);
    viewData.namesPokeMap(pokemones,ulContentCards);
}); 

buttonFilterDragon.addEventListener("click",function(){
    ulContentCards.innerHTML = '';
    pokemones = filterData(pokemones, "type", buttonFilterDragon.value);
    viewData.namesPokeMap(pokemones,ulContentCards);
}); 

buttonFilterSteel.addEventListener("click",function(){
    ulContentCards.innerHTML = '';
    pokemones = filterData(pokemones, "type", buttonFilterSteel.value);
    viewData.namesPokeMap(pokemones,ulContentCards);
}); 

buttonFilterRock.addEventListener("click",function(){
    ulContentCards.innerHTML = '';
    pokemones = filterData(pokemones, "type", buttonFilterRock.value);
    viewData.namesPokeMap(pokemones,ulContentCards);
}); 

//Funciones de filtrado para botones por rareza
buttonFilterLegendary.addEventListener("click",function(){
    ulContentCards.innerHTML = '';
    pokemones = filterData(pokemones, "pokemon-rarity", buttonFilterLegendary.value);
    viewData.namesPokeMap(pokemones,ulContentCards);
}); 

buttonFilterMythic.addEventListener("click",function(){
    ulContentCards.innerHTML = '';
    pokemones = filterData(pokemones, "pokemon-rarity", buttonFilterMythic.value);
    viewData.namesPokeMap(pokemones,ulContentCards);
}); 


//Funciones de filtrado para botones por region 
buttonFilterKanto.addEventListener("click",function(){
    ulContentCards.innerHTML = '';
    pokemones = filterData(pokemones, "generation", buttonFilterKanto.value);
    viewData.namesPokeMap(pokemones,ulContentCards);
}); 

buttonFilterJohto.addEventListener("click",function(){
    ulContentCards.innerHTML = '';
    pokemones = filterData(pokemones, "generation", buttonFilterJohto.value);
    viewData.namesPokeMap(pokemones,ulContentCards);
}); 

buttonCleanFilter.addEventListener("click", ()=>{
    console.log(buttonCleanFilter);
    pokemones = data.pokemon;
    ulContentCards.innerHTML = '';
});


/* 
selectElement.addEventListener("input",()=>{
    ulContentCards.innerHTML = '';
    pokemones = sortData(pokemones,selectElement.value,selectElement.sortBy)
    viewData.namesPokeMap(pokemones,ulContentCards);
}); */