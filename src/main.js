import {filterData,filterDataGeneration,computeStats,sortData} from './dataFunctions.js';
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
let selectElementName = document.getElementById("name");
let selectElementNum = document.getElementById("num");

//Selector de tarjetas ul
const ulContentCards = document.getElementById("root");

let bestAtack = '';

//Funciones de filtrado por tipo 
buttonFilterWater.addEventListener("click",function(){
    ulContentCards.innerHTML = '';
    pokemones = filterData(pokemones, "type", buttonFilterWater.value);
    selectElementNum.value="default";
    selectElementName.value="default";
    if (pokemones.length===0){
        ulContentCards.innerHTML="<h2>No hay pokemónes con esas características.</h2>";
        pokemones = data.pokemon;
    }else{
        bestAtack = computeStats(data.pokemon,buttonFilterWater.value);
        viewData.namesPokeMapType(pokemones,ulContentCards,bestAtack);
    }
}); 

buttonFilterFire.addEventListener("click",function(){
    ulContentCards.innerHTML = '';
    pokemones = filterData(pokemones, "type", buttonFilterFire.value);
    selectElementNum.value="default";
    selectElementName.value="default";
    if (pokemones.length===0){
        ulContentCards.innerHTML="<h2>No hay pokemónes con esas características.</h2>";
        pokemones = data.pokemon;
    }else{
        bestAtack = computeStats(data.pokemon,buttonFilterFire.value);
        viewData.namesPokeMapType(pokemones,ulContentCards,bestAtack);
    }
}); 

buttonFilterFight.addEventListener("click",function(){
    ulContentCards.innerHTML = '';
    pokemones = filterData(pokemones, "type", (buttonFilterFight.value, "fighting"));
    selectElementNum.value="default";
    selectElementName.value="default";
    if (pokemones.length===0){
        ulContentCards.innerHTML="<h2>No hay pokemónes con esas características.</h2>";
        pokemones = data.pokemon;
    }else{
        bestAtack = computeStats(data.pokemon,buttonFilterFight.value);
        viewData.namesPokeMapType(pokemones,ulContentCards,bestAtack);
    }
}); 

buttonFilterBug.addEventListener("click",function(){
    ulContentCards.innerHTML = '';
    pokemones = filterData(pokemones, "type", buttonFilterBug.value);
    selectElementNum.value="default";
    selectElementName.value="default";
    if (pokemones.length===0){
        ulContentCards.innerHTML="<h2>No hay pokemónes con esas características.</h2>";
        pokemones = data.pokemon;
    }else{
        bestAtack = computeStats(data.pokemon,buttonFilterBug.value);
        viewData.namesPokeMapType(pokemones,ulContentCards,bestAtack);
    }
}); 

buttonFilterGrass.addEventListener("click",function(){
    ulContentCards.innerHTML = '';
    pokemones = filterData(pokemones, "type", buttonFilterGrass.value);
    selectElementNum.value="default";
    selectElementName.value="default";
    if (pokemones.length===0){
        ulContentCards.innerHTML="<h2>No hay pokemónes con esas características.</h2>";
        pokemones = data.pokemon;
    }else{
        bestAtack = computeStats(data.pokemon,buttonFilterGrass.value);
        viewData.namesPokeMapType(pokemones,ulContentCards,bestAtack);
    }
}); 

buttonFilterGround.addEventListener("click",function(){
    ulContentCards.innerHTML = '';
    pokemones = filterData(pokemones, "type", buttonFilterGround.value);
    selectElementNum.value="default";
    selectElementName.value="default";
    if (pokemones.length===0){
        ulContentCards.innerHTML="<h2>No hay pokemónes con esas características.</h2>";
        pokemones = data.pokemon;
    }else{
        bestAtack = computeStats(data.pokemon,buttonFilterGround.value);
        viewData.namesPokeMapType(pokemones,ulContentCards,bestAtack);
    }
}); 

buttonFilterFlying.addEventListener("click",function(){
    ulContentCards.innerHTML = '';
    pokemones = filterData(pokemones, "type", buttonFilterFlying.value);
    selectElementNum.value="default";
    selectElementName.value="default";
    if (pokemones.length===0){
        ulContentCards.innerHTML="<h2>No hay pokemónes con esas características.</h2>";
        pokemones = data.pokemon;
    }else{
        bestAtack = computeStats(data.pokemon,buttonFilterFlying.value);
        viewData.namesPokeMapType(pokemones,ulContentCards,bestAtack);
    }
}); 

buttonFilterFairy.addEventListener("click",function(){
    ulContentCards.innerHTML = '';
    pokemones = filterData(pokemones, "type", buttonFilterFairy.value);
    selectElementNum.value="default";
    selectElementName.value="default";
    if (pokemones.length===0){
        ulContentCards.innerHTML="<h2>No hay pokemónes con esas características.</h2>";
        pokemones = data.pokemon;
    }else{
        bestAtack = computeStats(data.pokemon,buttonFilterFairy.value);
        viewData.namesPokeMapType(pokemones,ulContentCards,bestAtack);
    }
}); 

buttonFilterElectric.addEventListener("click",function(){
    ulContentCards.innerHTML = '';
    pokemones = filterData(pokemones, "type", buttonFilterElectric.value);
    selectElementNum.value="default";
    selectElementName.value="default";
    if (pokemones.length===0){
        ulContentCards.innerHTML="<h2>No hay pokemónes con esas características.</h2>";
        pokemones = data.pokemon;
    }else{
        bestAtack = computeStats(data.pokemon,buttonFilterElectric.value);
        viewData.namesPokeMapType(pokemones,ulContentCards,bestAtack);
    }
}); 

buttonFilterNormal.addEventListener("click",function(){
    ulContentCards.innerHTML = '';
    pokemones = filterData(pokemones, "type", buttonFilterNormal.value);
    selectElementNum.value="default";
    selectElementName.value="default";
    if (pokemones.length===0){
        ulContentCards.innerHTML="<h2>No hay pokemónes con esas características.</h2>";
        pokemones = data.pokemon;
    }else{
        bestAtack = computeStats(data.pokemon,buttonFilterNormal.value);
        viewData.namesPokeMapType(pokemones,ulContentCards,bestAtack);
    }
}); 

buttonFilterPoison.addEventListener("click",function(){
    ulContentCards.innerHTML = '';
    pokemones = filterData(pokemones, "type", buttonFilterPoison.value);
    selectElementNum.value="default";
    selectElementName.value="default";
    if (pokemones.length===0){
        ulContentCards.innerHTML="<h2>No hay pokemónes con esas características.</h2>";
        pokemones = data.pokemon;
    }else{
        bestAtack = computeStats(data.pokemon,buttonFilterPoison.value);
        viewData.namesPokeMapType(pokemones,ulContentCards,bestAtack);
    }
}); 

buttonFilterGhost.addEventListener("click",function(){
    ulContentCards.innerHTML = '';
    pokemones = filterData(pokemones, "type", buttonFilterGhost.value);
    selectElementNum.value="default";
    selectElementName.value="default";
    if (pokemones.length===0){
        ulContentCards.innerHTML="<h2>No hay pokemónes con esas características.</h2>";
        pokemones = data.pokemon;
    }else{
        bestAtack = computeStats(data.pokemon,buttonFilterGhost.value);
        viewData.namesPokeMapType(pokemones,ulContentCards,bestAtack);
    }
}); 

buttonFilterDark.addEventListener("click",function(){
    ulContentCards.innerHTML = '';
    pokemones = filterData(pokemones, "type", buttonFilterDark.value);
    selectElementNum.value="default";
    selectElementName.value="default";
    if (pokemones.length===0){
        ulContentCards.innerHTML="<h2>No hay pokemónes con esas características.</h2>";
        pokemones = data.pokemon;
    }else{
        bestAtack = computeStats(data.pokemon,buttonFilterDark.value);
        viewData.namesPokeMapType(pokemones,ulContentCards,bestAtack);
    }
}); 

buttonFilterIce.addEventListener("click",function(){
    ulContentCards.innerHTML = '';
    pokemones = filterData(pokemones, "type", buttonFilterIce.value);
    selectElementNum.value="default";
    selectElementName.value="default";
    if (pokemones.length===0){
        ulContentCards.innerHTML="<h2>No hay pokemónes con esas características.</h2>";
        pokemones = data.pokemon;
    }else{
        bestAtack = computeStats(data.pokemon,buttonFilterIce.value);
        viewData.namesPokeMapType(pokemones,ulContentCards,bestAtack);
    }
}); 

buttonFilterPsychic.addEventListener("click",function(){
    ulContentCards.innerHTML = '';
    pokemones = filterData(pokemones, "type", buttonFilterPsychic.value);
    selectElementNum.value="default";
    selectElementName.value="default";
    if (pokemones.length===0){
        ulContentCards.innerHTML="<h2>No hay pokemónes con esas características.</h2>";
        pokemones = data.pokemon;
    }else{
        bestAtack = computeStats(data.pokemon,buttonFilterPsychic.value);
        viewData.namesPokeMapType(pokemones,ulContentCards,bestAtack);
    }
}); 

buttonFilterDragon.addEventListener("click",function(){
    ulContentCards.innerHTML = '';
    pokemones = filterData(pokemones, "type", buttonFilterDragon.value);
    selectElementNum.value="default";
    selectElementName.value="default";
    if (pokemones.length===0){
        ulContentCards.innerHTML="<h2>No hay pokemónes con esas características.</h2>";
        pokemones = data.pokemon;
    }else{
        bestAtack = computeStats(data.pokemon,buttonFilterDragon.value);
        viewData.namesPokeMapType(pokemones,ulContentCards,bestAtack);
    }
}); 

buttonFilterSteel.addEventListener("click",function(){
    ulContentCards.innerHTML = '';
    pokemones = filterData(pokemones, "type", buttonFilterSteel.value);
    selectElementNum.value="default";
    selectElementName.value="default";
    if (pokemones.length===0){
        ulContentCards.innerHTML="<h2>No hay pokemónes con esas características.</h2>";
        pokemones = data.pokemon;
    }else{
        bestAtack = computeStats(data.pokemon,buttonFilterSteel.value);
        viewData.namesPokeMapType(pokemones,ulContentCards,bestAtack);
    }
}); 

buttonFilterRock.addEventListener("click",function(){
    ulContentCards.innerHTML = '';
    pokemones = filterData(pokemones, "type", buttonFilterRock.value);
    selectElementNum.value="default";
    selectElementName.value="default";
    if (pokemones.length===0){
        ulContentCards.innerHTML="<h2>No hay pokemónes con esas características.</h2>";
        pokemones = data.pokemon;
    }else{
        bestAtack = computeStats(data.pokemon,buttonFilterRock.value);
        viewData.namesPokeMapType(pokemones,ulContentCards,bestAtack);
    }
}); 

//Funciones de filtrado para botones por rareza
buttonFilterLegendary.addEventListener("click",function(){
    ulContentCards.innerHTML = '';
    pokemones = filterData(pokemones, "pokemon-rarity", buttonFilterLegendary.value);
    selectElementNum.value="default";
    selectElementName.value="default";
    if (pokemones.length===0){
        ulContentCards.innerHTML="<h2>No hay pokemónes con esas características.</h2>";
        pokemones = data.pokemon;
    }else if(bestAtack !==''){
        viewData.namesPokeMapType(pokemones,ulContentCards,bestAtack);
    }else{
        viewData.namesPokeMap(pokemones,ulContentCards);
    }
}); 

buttonFilterMythic.addEventListener("click",function(){
    ulContentCards.innerHTML = '';
    pokemones = filterData(pokemones, "pokemon-rarity", buttonFilterMythic.value);
    selectElementNum.value="default";
    selectElementName.value="default";
    if (pokemones.length===0){
        ulContentCards.innerHTML="<h2>No hay pokemónes con esas características.</h2>";
        pokemones = data.pokemon;
    }else if(bestAtack !==''){
        viewData.namesPokeMapType(pokemones,ulContentCards,bestAtack);
    }else{
        viewData.namesPokeMap(pokemones,ulContentCards);
    }
}); 


//Funciones de filtrado para botones por region 
buttonFilterKanto.addEventListener("click",function(){
    ulContentCards.innerHTML = '';
    pokemones = filterDataGeneration(pokemones, "generation", buttonFilterKanto.value);
    selectElementNum.value="default";
    selectElementName.value="default";
    if (pokemones.length===0){
        ulContentCards.innerHTML="<h2>No hay pokemónes con esas características.</h2>";
        pokemones = data.pokemon;
    }else if(bestAtack !==''){
        viewData.namesPokeMapType(pokemones,ulContentCards,bestAtack);
    }else{
        viewData.namesPokeMap(pokemones,ulContentCards);
    }
}); 

buttonFilterJohto.addEventListener("click",function(){
    ulContentCards.innerHTML = '';
    pokemones = filterDataGeneration(pokemones, "generation", buttonFilterJohto.value);
    selectElementNum.value="default";
    selectElementName.value="default";
    if (pokemones.length===0){
        ulContentCards.innerHTML="<h2>No hay pokemónes con esas características.</h2>";
        pokemones = data.pokemon;
    }else if(bestAtack !==''){
        viewData.namesPokeMapType(pokemones,ulContentCards,bestAtack);
    }else{
        viewData.namesPokeMap(pokemones,ulContentCards);
    }
}); 

//Funciones de boton de limieza de filtros
buttonCleanFilter.addEventListener("click", ()=>{
    pokemones = data.pokemon;
    bestAtack = '';
    ulContentCards.innerHTML = '';
    selectElementNum.value="default";
    selectElementName.value="default";
});

//Selección de ordenado por nombre
selectElementName.addEventListener("input",()=>{
    ulContentCards.innerHTML = '';
    pokemones = sortData(pokemones,selectElementName.name,selectElementName.value);
    selectElementNum.value="default";
    viewData.namesPokeMap(pokemones,ulContentCards);
});

//Selección de ordenado por numero
selectElementNum.addEventListener("input",()=>{
    ulContentCards.innerHTML = '';
    pokemones = sortData(pokemones,selectElementNum.name,selectElementNum.value);
    selectElementName.value="default";
    viewData.namesPokeMap(pokemones,ulContentCards);
});
