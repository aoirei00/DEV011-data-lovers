import {filterData,filterDataGeneration,computeStats,sortData} from './dataFunctions.js';
import data from './data/pokemon/pokemon.js';
import {renderItems} from './view.js';

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
//const buttonChangeView = document.querySelector('button[id="cambioVista"]');
const buttonCleanFilter = document.querySelector('button[id="limpiarFiltro"]');

//Lista para ordedar las tarjetas
const selectElementName = document.getElementById("name");
const selectElementNum = document.getElementById("num");

//Selector de tarjetas ul
const ulContentCards = document.getElementById("root");

let bestAtack = '';

renderItems(pokemones,ulContentCards,bestAtack);


//Funciones de filtrado por tipo 
buttonFilterWater.addEventListener("click",function(event){
  pokemones = filterData(pokemones, "type", event.target.value);
  event.target.style.border = "3px solid red";
  if (pokemones.length===0){
    reinicioParametros();
    ulContentCards.innerHTML="<h2>No hay pokemónes con esas características.</h2>";
  }else{
    selectElementNum.value="default";
    selectElementName.value="default";
    bestAtack = computeStats(data.pokemon,event.target.value);
    renderItems(pokemones,ulContentCards,bestAtack);
  }
}); 

buttonFilterFire.addEventListener("click",function(event){
  pokemones = filterData(pokemones, "type", event.target.value);
  event.target.style.border = "3px solid red";
  if (pokemones.length===0){
    reinicioParametros();
    ulContentCards.innerHTML="<h2>No hay pokemónes con esas características.</h2>";
  }else{
    selectElementNum.value="default";
    selectElementName.value="default";
    bestAtack = computeStats(data.pokemon,event.target.value);
    renderItems(pokemones,ulContentCards,bestAtack);
  }
}); 

buttonFilterFight.addEventListener("click",function(event){
  pokemones = filterData(pokemones, "type", (event.target.value,"fighting"));
  event.target.style.border = "3px solid red";
  if (pokemones.length===0){
    reinicioParametros();
    ulContentCards.innerHTML="<h2>No hay pokemónes con esas características.</h2>";
  }else{
    selectElementNum.value="default";
    selectElementName.value="default";
    bestAtack = computeStats(data.pokemon,event.target.value);
    renderItems(pokemones,ulContentCards,bestAtack);
  }
}); 

buttonFilterBug.addEventListener("click",function(event){
  pokemones = filterData(pokemones, "type", event.target.value);
  event.target.style.border = "3px solid red";
  if (pokemones.length===0){
    reinicioParametros();
    ulContentCards.innerHTML="<h2>No hay pokemónes con esas características.</h2>";
  }else{
    selectElementNum.value="default";
    selectElementName.value="default";
    bestAtack = computeStats(data.pokemon,event.target.value);
    renderItems(pokemones,ulContentCards,bestAtack);
  }
}); 

buttonFilterGrass.addEventListener("click",function(event){
  pokemones = filterData(pokemones, "type", event.target.value);
  event.target.style.border = "3px solid red";
  if (pokemones.length===0){
    reinicioParametros();
    ulContentCards.innerHTML="<h2>No hay pokemónes con esas características.</h2>";
  }else{
    selectElementNum.value="default";
    selectElementName.value="default";
    bestAtack = computeStats(data.pokemon,event.target.value);
    renderItems(pokemones,ulContentCards,bestAtack);
  }
}); 

buttonFilterGround.addEventListener("click",function(event){
  pokemones = filterData(pokemones, "type", event.target.value);
  event.target.style.border = "3px solid red";
  if (pokemones.length===0){
    reinicioParametros();
    ulContentCards.innerHTML="<h2>No hay pokemónes con esas características.</h2>";
  }else{
    selectElementNum.value="default";
    selectElementName.value="default";
    bestAtack = computeStats(data.pokemon,event.target.value);
    renderItems(pokemones,ulContentCards,bestAtack);
  }
}); 

buttonFilterFlying.addEventListener("click",function(event){
  pokemones = filterData(pokemones, "type", event.target.value);
  event.target.style.border = "3px solid red";
  if (pokemones.length===0){
    reinicioParametros();
    ulContentCards.innerHTML="<h2>No hay pokemónes con esas características.</h2>";
  }else{
    selectElementNum.value="default";
    selectElementName.value="default";
    bestAtack = computeStats(data.pokemon,event.target.value);
    renderItems(pokemones,ulContentCards,bestAtack);
  }
}); 

buttonFilterFairy.addEventListener("click",function(event){
  pokemones = filterData(pokemones, "type", event.target.value);
  event.target.style.border = "3px solid red";
  if (pokemones.length===0){
    reinicioParametros();
    ulContentCards.innerHTML="<h2>No hay pokemónes con esas características.</h2>";
  }else{
    selectElementNum.value="default";
    selectElementName.value="default";
    bestAtack = computeStats(data.pokemon,event.target.value);
    renderItems(pokemones,ulContentCards,bestAtack);
  }
}); 

buttonFilterElectric.addEventListener("click",function(event){
  pokemones = filterData(pokemones, "type", event.target.value);
  event.target.style.border = "3px solid red";
  if (pokemones.length===0){
    reinicioParametros();
    ulContentCards.innerHTML="<h2>No hay pokemónes con esas características.</h2>";
  }else{
    selectElementNum.value="default";
    selectElementName.value="default";
    bestAtack = computeStats(data.pokemon,event.target.value);
    renderItems(pokemones,ulContentCards,bestAtack);
  }
}); 

buttonFilterNormal.addEventListener("click",function(event){
  pokemones = filterData(pokemones, "type", event.target.value);
  event.target.style.border = "3px solid red";
  if (pokemones.length===0){
    reinicioParametros();
    ulContentCards.innerHTML="<h2>No hay pokemónes con esas características.</h2>";
  }else{
    selectElementNum.value="default";
    selectElementName.value="default";
    bestAtack = computeStats(data.pokemon,event.target.value);
    renderItems(pokemones,ulContentCards,bestAtack);
  }
}); 

buttonFilterPoison.addEventListener("click",function(event){
  pokemones = filterData(pokemones, "type", event.target.value);
  event.target.style.border = "3px solid red";
  if (pokemones.length===0){
    reinicioParametros();
    ulContentCards.innerHTML="<h2>No hay pokemónes con esas características.</h2>";
  }else{
    selectElementNum.value="default";
    selectElementName.value="default";
    bestAtack = computeStats(data.pokemon,event.target.value);
    renderItems(pokemones,ulContentCards,bestAtack);
  }
}); 

buttonFilterGhost.addEventListener("click",function(event){
  pokemones = filterData(pokemones, "type", event.target.value);
  event.target.style.border = "3px solid red";
  if (pokemones.length===0){
    reinicioParametros();
    ulContentCards.innerHTML="<h2>No hay pokemónes con esas características.</h2>";
  }else{
    selectElementNum.value="default";
    selectElementName.value="default";
    bestAtack = computeStats(data.pokemon,event.target.value);
    renderItems(pokemones,ulContentCards,bestAtack);
  }
}); 

buttonFilterDark.addEventListener("click",function(event){
  pokemones = filterData(pokemones, "type", event.target.value);
  event.target.style.border = "3px solid red";
  if (pokemones.length===0){
    reinicioParametros();
    ulContentCards.innerHTML="<h2>No hay pokemónes con esas características.</h2>";
  }else{
    selectElementNum.value="default";
    selectElementName.value="default";
    bestAtack = computeStats(data.pokemon,event.target.value);
    renderItems(pokemones,ulContentCards,bestAtack);
  }
}); 

buttonFilterIce.addEventListener("click",function(event){
  pokemones = filterData(pokemones, "type", event.target.value);
  event.target.style.border = "3px solid red";
  if (pokemones.length===0){
    reinicioParametros();
    ulContentCards.innerHTML="<h2>No hay pokemónes con esas características.</h2>";
  }else{
    selectElementNum.value="default";
    selectElementName.value="default";
    bestAtack = computeStats(data.pokemon,event.target.value);
    renderItems(pokemones,ulContentCards,bestAtack);
  }
}); 

buttonFilterPsychic.addEventListener("click",function(event){
  pokemones = filterData(pokemones, "type", event.target.value);
  event.target.style.border = "3px solid red";
  if (pokemones.length===0){
    reinicioParametros();
    ulContentCards.innerHTML="<h2>No hay pokemónes con esas características.</h2>";
  }else{
    selectElementNum.value="default";
    selectElementName.value="default";
    bestAtack = computeStats(data.pokemon,event.target.value);
    renderItems(pokemones,ulContentCards,bestAtack);
  }
}); 

buttonFilterDragon.addEventListener("click",function(event){
  pokemones = filterData(pokemones, "type", event.target.value);
  event.target.style.border = "3px solid red";
  if (pokemones.length===0){
    reinicioParametros();
    ulContentCards.innerHTML="<h2>No hay pokemónes con esas características.</h2>";
  }else{
    selectElementNum.value="default";
    selectElementName.value="default";
    bestAtack = computeStats(data.pokemon,event.target.value);
    renderItems(pokemones,ulContentCards,bestAtack);
  }
}); 

buttonFilterSteel.addEventListener("click",function(event){
  pokemones = filterData(pokemones, "type", event.target.value);
  event.target.style.border = "3px solid red";
  if (pokemones.length===0){
    reinicioParametros();
    ulContentCards.innerHTML="<h2>No hay pokemónes con esas características.</h2>";
  }else{
    selectElementNum.value="default";
    selectElementName.value="default";
    bestAtack = computeStats(data.pokemon,event.target.value);
    renderItems(pokemones,ulContentCards,bestAtack);
  }
}); 

buttonFilterRock.addEventListener("click",function(event){
  pokemones = filterData(pokemones, "type", event.target.value);
  event.target.style.border = "3px solid red";
  if (pokemones.length===0){
    reinicioParametros();
    ulContentCards.innerHTML="<h2>No hay pokemónes con esas características.</h2>";
  }else{
    selectElementNum.value="default";
    selectElementName.value="default";
    bestAtack = computeStats(data.pokemon,event.target.value);
    renderItems(pokemones,ulContentCards,bestAtack);
  }
}); 

//Funciones de filtrado para botones por rareza
buttonFilterLegendary.addEventListener("click",function(event){
  pokemones = filterData(pokemones, "pokemon-rarity", event.target.value);
  event.target.style.border = "3px solid red";
  if (pokemones.length===0){
    reinicioParametros();
    ulContentCards.innerHTML="<h2>No hay pokemónes con esas características.</h2>";
  }else{
    selectElementNum.value="default";
    selectElementName.value="default";
    renderItems(pokemones,ulContentCards,bestAtack);
  }
}); 

buttonFilterMythic.addEventListener("click",function(event){
  pokemones = filterData(pokemones, "pokemon-rarity", event.target.value);
  event.target.style.border = "3px solid red";
  if (pokemones.length===0){
    reinicioParametros();
    ulContentCards.innerHTML="<h2>No hay pokemónes con esas características.</h2>";
  }else{
    selectElementNum.value="default";
    selectElementName.value="default";
    renderItems(pokemones,ulContentCards,bestAtack);
  }
}); 


//Funciones de filtrado para botones por region 
buttonFilterKanto.addEventListener("click",function(event){
  pokemones = filterDataGeneration(pokemones, "generation", event.target.value);
  event.target.style.border = "3px solid red";
  if (pokemones.length===0){
    reinicioParametros();
    ulContentCards.innerHTML="<h2>No hay pokemónes con esas características.</h2>";
  }else{
    selectElementNum.value="default";
    selectElementName.value="default";
    renderItems(pokemones,ulContentCards,bestAtack);
  }
}); 

buttonFilterJohto.addEventListener("click",function(event){
  pokemones = filterDataGeneration(pokemones, "generation", event.target.value);
  event.target.style.border = "3px solid red";
  if (pokemones.length===0){
    reinicioParametros();
    ulContentCards.innerHTML="<h2>No hay pokemónes con esas características.</h2>";
  }else{
    selectElementNum.value="default";
    selectElementName.value="default";
    renderItems(pokemones,ulContentCards,bestAtack);
  }
}); 

//Funciones de boton de limpieza de filtros
buttonCleanFilter.addEventListener("click", ()=>{
  reinicioParametros();
  renderItems(pokemones,ulContentCards,bestAtack);
});

//Selección de ordenado por nombre
selectElementName.addEventListener("change",()=>{
  ulContentCards.innerHTML = '';
  pokemones = sortData(pokemones,selectElementName.name,selectElementName.value);
  selectElementNum.value="default";
  renderItems(pokemones,ulContentCards,bestAtack);
});

//Selección de ordenado por numero
selectElementNum.addEventListener("change",()=>{
  ulContentCards.innerHTML = '';
  pokemones = sortData(pokemones,selectElementNum.name,selectElementNum.value);
  selectElementName.value="default";
  renderItems(pokemones,ulContentCards,bestAtack);
});

//Funcion de reinicio de parámetros
function reinicioParametros() {
  pokemones = data.pokemon;
  bestAtack = '';
  ulContentCards.innerHTML = '';
  selectElementNum.value="default";
  selectElementName.value="default";
  buttonFilterWater.style.border = "0px";
  buttonFilterFire.style.border = "0px";
  buttonFilterFight.style.border = "0px";
  buttonFilterBug.style.border = "0px";
  buttonFilterGrass.style.border = "0px";
  buttonFilterGround.style.border = "0px";
  buttonFilterFlying.style.border = "0px";
  buttonFilterFairy.style.border = "0px";
  buttonFilterElectric.style.border = "0px";
  buttonFilterNormal.style.border = "0px";
  buttonFilterPoison.style.border = "0px";
  buttonFilterGhost.style.border = "0px";
  buttonFilterDark.style.border = "0px";
  buttonFilterIce.style.border = "0px";
  buttonFilterPsychic.style.border = "0px";
  buttonFilterDragon.style.border = "0px";
  buttonFilterSteel.style.border = "0px";
  buttonFilterRock.style.border = "0px";
  buttonFilterMythic.style.border = "0px";
  buttonFilterLegendary.style.border = "0px";
  buttonFilterKanto.style.border = "0px";
  buttonFilterJohto.style.border = "0px";  
  return pokemones;
}
