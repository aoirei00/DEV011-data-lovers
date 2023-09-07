import { filter } from './dataFunctions.js';
//import { renderItems } from './view.js';

// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
import viewData from './view.js';

const pokemones = data.pokemon

/* console.log(filter.filterData("data", "filterBy", "value")); */

function actualizar(imagen, nombre, descripcion){
    let output = '<li class="tarjeta bug" type="none">' +
    '<img id="imgPokemon" class="imgPokemon" src = "' +imagen+ '"/>'+
    '<dl itemscope itemtype="pokemon">' +
    '<dt>Nombre:</dt><dd itemprop="name">' + nombre+ '</dd>'+
    '<dt>Descripción:</dt><dd itemprop="about">' + descripcion + '</dd>'+
    '</li>'
    return output
}


// Función para acceder a un valor de data, dado un string de llaves
function getPropertyValue(obj, key) {
  const keys = key.split('.');  //Divide el string en llaves separadas
  let value = obj;  //declara el objeto que se va a ir actualizando (en diccionarios o arrays), segun vaya pasando por las llaves
  for (const k of keys) {   //Comienza el ciclo de entrada con las llaves
    if (value.hasOwnProperty(k)) {  //verifica que la llave exista en el objeto (en este nivel)
        value = value[k];   //Si existe lo actualiza y entra al obeto que tenga esa llave
    } else if (Array.isArray(value)){   //En caso de que no exista, verifica si es un array []
        for (let i = 0; i<value.length;i++){    //si es un array, lo recorre y aplica la misma función recursiva para cada elemento del array
            value[i]=getPropertyValue(value[i],key) //Actializa el elemento value, considerando que puede estar repetido en [i] y [j]
        }
    }
  }
  return value;
}

//const claveFiltro = "size.height"; // Filtrar por la generación "kanto"
//const valorFiltro = "0.99 m";

const claveFiltro = "quick-move.type"; // Filtrar por la generación "kanto"
const valorFiltro = "poison";

/*
function filtroGeneracion(data,condicional){
    let data2 = data.filter(function(entry){
        return entry.name.includes(condicional)});
    return data2 
}

let prueba = filtroGeneracion(pokemones,'pikachu')
console.log(prueba)
*/ 

function filterData(data, filterBy, value){
    const data2 = data.filter(function(pokemon){
    const propertyValue = getPropertyValue(pokemon, filterBy); //extrae a los valores anidados (puede ser un elemento o un array)
    return propertyValue.includes(value); //se usa includes y no === ara que traida todos los objetos con esa caracteristica (por elemento o array)
    });
    return data2;
}
//console.log("GPT",pokemonFiltrados);

function namesPokeMap(data,htmlfhater){ 
    let data2 = data.map(function(entry){
        htmlfhater.innerHTML += actualizar(entry.img, entry.name, entry.about)
        return htmlfhater
    });
return data2
}

let ulPokemon = document.getElementById("root")

let pokemonFiltrados = filterData(pokemones,"size.weight","90.5 kg")
//console.log()
namesPokeMap (pokemonFiltrados,ulPokemon)


function sortBy(data, sortBy, sortOrder) {
    if (sortOrder === 'asc') {
        return data.sort((a, b) => (a[sortBy] > b[sortBy]) ? 1 : -1);
    } else if (sortOrder === 'desc') {
        return data.sort((a, b) => (a[sortBy] < b[sortBy]) ? 1 : -1);
    } else {
        return data;
    }
  }
