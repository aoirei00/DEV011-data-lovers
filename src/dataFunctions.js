// función de filtro general, se usa para tipo y rareza
export const filterData = (data, filterBy, value) =>{
  return data.filter(element => element[filterBy].includes(value))
};
  
//filtro por nombre de generación
export const filterDataGeneration = (data, filterBy, value) =>{
  return data.filter(element => element[filterBy]["name"].includes(value))
};
  
//función para ordenar la data
export const sortData = (data, sortBy, sortOrder='asc') => {
  if (sortOrder === 'asc') {
    return data.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));  //(-1) el primer elemento va primero 
  } else if (sortOrder === 'desc') {
    return data.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));   //(1) el primer elemento va despues
  } 
};
  
//función que calcula el mejor y el peor ataque por cada tipo
export const computeStats = (data,type) =>{
  const aux=[]; //declaramos un arreglo auxiliar para guardar los puntos de daño de cada ataque
  const Attacks={"best":{},"worst":{}};    //declaramos un objeto vacio para guardar el mejor o el peor ataque
  for (let poke=0; poke<data.length; poke++){    //recorremos todos los pokemones
    for (let ataques=0; ataques<data[poke]['quick-move'].length; ataques++){    //recorremos todos los ataques de cada pokemón
      if(data[poke]['quick-move'][ataques]['type'] === type){    //validamos que el ataque sea del tipo que buscamos
        aux.push(Number(data[poke]['quick-move'][ataques]['base-damage']));    //guardamos su nivel de daño en el arreglo auxiliar
        if(data[poke]['quick-move'][ataques]['base-damage']>=Math.max(...aux)){    //validamos que sea el mejor hasta el momento
          Attacks['best'] = data[poke]['quick-move'][ataques];    //lo guardamos si es el mejor
          if ( Math.min(...aux)===Math.max(...aux)){   //validamos si es que tenemos un sólo ataque diferente
            Attacks['worst'] = data[poke]['quick-move'][ataques];    //en caso de tener un sólo ataque, se guarda el peor igual que el mejor
          }
        }else if(data[poke]['quick-move'][ataques]['base-damage'] <= Math.min(...aux)){    //validamos si es el peor ataque 
          Attacks['worst'] = data[poke]['quick-move'][ataques];    //lo guardamos si es el peor
        }
      }
    }
  }
  return Attacks;
};


