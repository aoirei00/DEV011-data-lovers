import {filterData,filterDataGeneration,computeStats,sortData} from './dataFunctions.js';
import data from './data/pokemon/pokemon.js';
import {renderItems} from './view.js';

//se extrae pokemón de data por practicidad
let pokemones = data.pokemon

// Botones para filtrar por tipo de pokemon
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

//Botón para limpieza del filtro
const buttonCleanFilter = document.querySelector('button[id="limpiarFiltro"]');

//Selects para ordedar las tarjetas
const selectElementName = document.getElementById("name");
const selectElementNum = document.getElementById("num");

//Selector de Div para agregar las tarjetas en ul
const ulContentCards = document.getElementById("root");

//Elemento en blanco para guardar los mejores o peores ataques según sea el filtro aplicado
let bestAtack = '';

//Render inicial de todas las cards
renderItems(pokemones,ulContentCards,bestAtack);

//Funciones de filtrado por tipo 
buttonFilterWater.addEventListener("click",function(event){
  pokemones = filterData(pokemones, "type", event.target.value);    //filtro por tipo, actualizando la data (para filtros acumulativos)
  sortData(pokemones,selectElementNum.name,'asc')    //Reordenado de la data al orden original
  event.target.style.border = "3px solid red";    //Marcado de filtro seleccionado, con su contorno rojo
  if (pokemones.length===0){    //Validación de existencia de pokemones con esos filtros
    reinicioParametros();    //En caso de no haber pokemones, reinicio de parámetros y filtros
    ulContentCards.innerHTML="<h2>No hay pokemónes con esas características.</h2>";
  }else{    // en caso de haber pokemoes con las características del filtro...
    selectElementNum.value="default";  //reinicia los ordenamientos
    selectElementName.value="default";  
    bestAtack = computeStats(data.pokemon,event.target.value);    //calcula los ataques (mejor y peor) para dicho tipo
    renderItems(pokemones,ulContentCards,bestAtack);    //renderea las cards
  }
}); 

buttonFilterFire.addEventListener("click",function(event){
  pokemones = filterData(pokemones, "type", event.target.value);
  sortData(pokemones,selectElementNum.name,'asc')
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
  sortData(pokemones,selectElementNum.name,'asc')
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
  sortData(pokemones,selectElementNum.name,'asc')
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
  sortData(pokemones,selectElementNum.name,'asc')
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
  sortData(pokemones,selectElementNum.name,'asc')
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
  sortData(pokemones,selectElementNum.name,'asc')
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
  sortData(pokemones,selectElementNum.name,'asc')
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
  sortData(pokemones,selectElementNum.name,'asc')
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
  sortData(pokemones,selectElementNum.name,'asc')
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
  sortData(pokemones,selectElementNum.name,'asc')
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
  sortData(pokemones,selectElementNum.name,'asc')
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
  sortData(pokemones,selectElementNum.name,'asc')
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
  sortData(pokemones,selectElementNum.name,'asc')
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
  sortData(pokemones,selectElementNum.name,'asc')
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
  sortData(pokemones,selectElementNum.name,'asc')
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
  sortData(pokemones,selectElementNum.name,'asc')
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
  sortData(pokemones,selectElementNum.name,'asc')
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
  pokemones = filterData(pokemones, "pokemon-rarity", event.target.value);    //filtro por rareza, actualizando la data (para filtros acumulativos)
  sortData(pokemones,selectElementNum.name,'asc');    //reordenado de la data al orden original    
  event.target.style.border = "3px solid red";    //Marcado de filtro seleccionado, con su contorno rojo
  if (pokemones.length===0){    //Validación de existencia de pokemones con esos filtros
    reinicioParametros();    //En caso de no haber pokemones, reinicio de parámetros y filtros
    ulContentCards.innerHTML="<h2>No hay pokemónes con esas características.</h2>";
  }else{    // en caso de haber pokemoes con las características del filtro...
    selectElementNum.value="default";
    selectElementName.value="default";
    renderItems(pokemones,ulContentCards,bestAtack);    //renderea las cards
  }
}); 

buttonFilterMythic.addEventListener("click",function(event){
  pokemones = filterData(pokemones, "pokemon-rarity", event.target.value);
  sortData(pokemones,selectElementNum.name,'asc');
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
  sortData(pokemones,selectElementNum.name,'asc')
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
  sortData(pokemones,selectElementNum.name,'asc')
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
  reinicioParametros();    //al limpiar se reinician los parámetros y filtros
  renderItems(pokemones,ulContentCards,bestAtack);   //también se renderean todos los pokemones
});

//Selección de ordenado por nombre
selectElementName.addEventListener("change",()=>{
  ulContentCards.innerHTML = '';    // Se borra el contenido de las cards actuales
  pokemones = sortData(pokemones,selectElementName.name,selectElementName.value);     //se reordena la data
  selectElementNum.value="default";    //se elimina el ordenamiento por número
  renderItems(pokemones,ulContentCards,bestAtack);    //se muestran las nuevas cards
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
  pokemones = sortData(data.pokemon,selectElementNum.name,'asc');     //Se reinicia la data en el orden original
  bestAtack = '';    //re reinicia el objeto de los ataques por tipo (mejor y peor)
  ulContentCards.innerHTML = '';   //Se borran las cards actuales
  selectElementNum.value="default";   //se borran los filtros
  selectElementName.value="default";    //se eliminan el contorno de los filtros antes seleccionados
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
