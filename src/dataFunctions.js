// estas funciones son de ejemplo

export const filterData = (data, filterBy, value) =>{
    return data.filter(element => element[filterBy].includes(value))
  };
    
  export const filterDataGeneration = (data, filterBy, value) =>{
    return data.filter(element => element[filterBy]["name"].includes(value))
  };
    
  /*   export const filterDataTypeAttack = (data, value) =>{
    return data.filter(element => {
      let aux;
      for (let i=0; i<element['quick-move'].length; i++){
      aux = element['quick-move'][i]['type'].includes(value);
      }
      return aux;
    })
    }; */
    
  export const sortData = (data, sortBy, sortOrder='asc') => {
    if (sortOrder === 'asc') {
      return data.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
    } else if (sortOrder === 'desc') {
      return data.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
    } else {
      // Si no se especifica el orden se devuelve el arreglo original sin cambios (asc)
      return data;
    }
  };
    
    
  export const computeStats = (data,type) =>{
    const aux=[];
    const Attacks={"best":{},"worst":{}};
    for (let poke=0; poke<data.length; poke++){
      for (let ataques=0; ataques<data[poke]['quick-move'].length; ataques++){
        if(data[poke]['quick-move'][ataques]['type'] === type){
          aux.push(data[poke]['quick-move'][ataques]['base-damage']);
          if(data[poke]['quick-move'][ataques]['base-damage']>=Math.max(...aux)){
            Attacks['best'] = data[poke]['quick-move'][ataques];
          }else if(data[poke]['quick-move'][ataques]['base-damage']<=Math.min(...aux)){
            Attacks['worst'] = data[poke]['quick-move'][ataques];
          }
        }
      }
    }
    return Attacks;
  };