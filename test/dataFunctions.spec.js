import { example, anotherExample } from '../src/dataFunctions.js';
import { filterData, filterDataGeneration, sortData, computeStats } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';// se renombra como fakeData



/*describe('example', () => {

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});

describe('anotherExample', () => {

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/


describe('Test para la funcion filterData', () => {
  it('debe filtrar correctamente los Pokémon de tipo "Fire"', () => {
    const filteredData = filterData(fakeData, 'type', 'fire');
    // Agrega tus expectativas aquí, por ejemplo:
    expect(filteredData.length).toBe(1);
    expect(filteredData[0].name).toBe('ninetales');
  })
  
});

describe('Test para la filterDataGeneration', () => {
  it('debe filtrar correctamente los Pokémon de la generacion "kanto"', () => {
    const filteredData = filterDataGeneration(fakeData, 'generation', 'kanto');
    // Agrega tus expectativas aquí, por ejemplo:
    expect(filteredData.length).toBe(3);
    expect(filteredData[0].name).toBe('mew');
    expect(filteredData[1].name).toBe('ninetales');
    expect(filteredData[2].name).toBe('jigglypuff');
  })
  
});

describe('Test para la funcion sortData', () => {
  it('Se debe ordenar correctamente los Pokémon por nombre en orden ascendente', () => {
    const sortedData = sortData(fakeData, 'name');
    // Agrega tus expectativas aquí, por ejemplo:
    expect(sortedData[0].name).toBe('jigglypuff');
    expect(sortedData[1].name).toBe('mew');
    expect(sortedData[2].name).toBe('ninetales');
    expect(sortedData[3].name).toBe('totodile');
    expect(sortedData[4].name).toBe('tyranitar');
    
  });

  it('debe ordenar correctamente los Pokémon por nombre en orden descendente', () => {
    const sortedData = sortData(fakeData, 'name', 'desc');
    // Agrega tus expectativas aquí, por ejemplo:
    expect(sortedData[0].name).toBe('tyranitar');
    expect(sortedData[1].name).toBe('totodile');
    expect(sortedData[2].name).toBe('ninetales');
    expect(sortedData[3].name).toBe('mew');
    expect(sortedData[4].name).toBe('jigglypuff');
  });

  it('debe mantener el orden ascendente por defecto cuando sortOrder no se especifica', () => {
    const sortedData = sortData(fakeData, 'name');
    // Agrega tus expectativas aquí, por ejemplo:
    expect(sortedData[0].name).toBe('jigglypuff');
    expect(sortedData[1].name).toBe('mew');
    expect(sortedData[2].name).toBe('ninetales');
    expect(sortedData[3].name).toBe('totodile');
    expect(sortedData[4].name).toBe('tyranitar');
  });

  // Agrega más pruebas para otras situaciones de ordenación si es necesario
});


describe('computeStats', () => {
  it('debe calcular las estadísticas correctamente para movimientos de tipo "fire"', () => {
    const stats = computeStats(fakeData, 'fire');
    // Agrega tus expectativas aquí, por ejemplo:
    expect(stats.best.type).toBe('fire');
    expect(stats.best['base-damage']).toBe('14');
    expect(stats.worst.type).toBe('fire');
    expect(stats.worst['base-damage']).toBe('10');
  });

  // Agrega más pruebas para otras situaciones de cálculo de estadísticas si es necesario
});





