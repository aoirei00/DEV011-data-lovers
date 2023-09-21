import { filterData, filterDataGeneration, sortData, computeStats } from '../src/dataFunctions.js';//Se importan las funciones contenidas en el archivo dataFunctions
import { data as fakeData } from './data.js';// se renombra como fakeData

describe('Test para la funcion filterData', () => {//Se hace una descripcion de la peruebas contenidas y la funcion que se esta probando  
  it('debe filtrar correctamente los Pokémon de tipo "Fire"', () => {//It nos sirve para describir una prueba especifica y las expectativas de la prueba 
    const filteredData = filterData(fakeData, 'type', 'fire');//Se declara una variable la cual va a contener el resultado que le arroje cuando se llama a la funcion.
    expect(filteredData.length).toBe(1);// expect es el resultado esperado dentro de las pruebas en este caso nos esta diciendo que entre la longitud de la fake data solo se encuentra un elemento con esas caracteristicas 
    expect(filteredData[0].name).toBe('ninetales'); //Aqui la expectativa es que la funcion filter data es que nos regrese a ninetales 
    //.tobe es una funcion que compara el resultado obtenido con el resultado esperado si estas coinciden pasa la prueba.
  })
  
});

describe('Test para la filterDataGeneration', () => {
  it('debe filtrar correctamente los Pokémon de la generacion "kanto"', () => {
    const filteredData = filterDataGeneration(fakeData, 'generation', 'kanto');
    expect(filteredData.length).toBe(3);
    expect(filteredData[0].name).toBe('mew');
    expect(filteredData[1].name).toBe('ninetales');
    expect(filteredData[2].name).toBe('jigglypuff');
  })
  
});

describe('Test para la funcion sortData', () => {
  it('Se debe ordenar correctamente los Pokémon por nombre en orden ascendente', () => {
    const sortedData = sortData(fakeData, 'name', 'asc');
    expect(sortedData[0].name).toBe('jigglypuff');
    expect(sortedData[1].name).toBe('mew');
    expect(sortedData[2].name).toBe('ninetales');
    expect(sortedData[3].name).toBe('totodile');
    expect(sortedData[4].name).toBe('tyranitar');
    
  });

  it('debe ordenar correctamente los Pokémon por nombre en orden descendente', () => {
    const sortedData = sortData(fakeData, 'name', 'desc');
    expect(sortedData[0].name).toBe('tyranitar');
    expect(sortedData[1].name).toBe('totodile');
    expect(sortedData[2].name).toBe('ninetales');
    expect(sortedData[3].name).toBe('mew');
    expect(sortedData[4].name).toBe('jigglypuff');
  });

  it('debe mantener el orden ascendente por defecto cuando sortOrder no se especifica', () => {
    const sortedData = sortData(fakeData, 'name');
    expect(sortedData[0].name).toBe('jigglypuff');
    expect(sortedData[1].name).toBe('mew');
    expect(sortedData[2].name).toBe('ninetales');
    expect(sortedData[3].name).toBe('totodile');
    expect(sortedData[4].name).toBe('tyranitar');
  });

  
});


describe('computeStats', () => {
  it('debe calcular las estadísticas correctamente para movimientos de tipo "fire"', () => {
    const stats = computeStats(fakeData, 'fire');
    expect(stats.best.type).toBe('fire');
    expect(stats.best['base-damage']).toBe('14');
    expect(stats.worst.type).toBe('fire');
    expect(stats.worst['base-damage']).toBe('10');
  });

  
});





