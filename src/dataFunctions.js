// estas funciones son de ejemplo


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

export const filterData = (data, filterBy, value) =>{
  data = data.filter(function(poke){
  const propertyValue = getPropertyValue(poke, filterBy); //extrae a los valores anidados (puede ser un elemento o un array)
  return propertyValue.includes(value); //se usa includes y no === ara que traida todos los objetos con esa caracteristica (por elemento o array)
  });
  return data;
};

export const sortData = (data, sortBy, sortOrder) => {
  if (sortOrder === 'asc') {
      return data.sort((a, b) => getPropertyValue(a,sortBy).localeCompare(getPropertyValue(b,sortBy)));
  } else if (sortOrder === 'desc') {
      return data.sort((a, b) => getPropertyValue(b,sortBy).localeCompare(getPropertyValue(a,sortBy)));
  } else {
      // Si no se especifica el orden se devuelve el arreglo original sin cambios (asc)
      return data;
  }
};
