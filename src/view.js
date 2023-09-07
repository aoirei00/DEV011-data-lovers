// estas funciones son de ejemplo

const viewData = {

  renderItems:(data)=>{
    let output = '<li class="tarjeta" type="none">' +
    '<img id="imgPokemon" class="imgPokemon" src = "' + data.img + '"/>' +
    '<dl itemscope itemtype="pokemon">' +
    '<dt>Nombre:</dt><dd itemprop="name">' + data.name + '</dd>' +
    '<dt>Descripción:</dt><dd itemprop="about">' + data.about + '</dd>' +
    '</li>'
    return output
  },
  namesPokeMap:(data,htmlfhater)=>{ 
    let data2 = data.map(function(entry){
      htmlfhater.innerHTML += viewData.renderItems(entry)
      return htmlfhater
    });
return data2
}
}

export default viewData;