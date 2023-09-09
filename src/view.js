// estas funciones son de ejemplo

const viewData = {

 //* renderItems:(data)=>{
    //let output = '<li class="tarjeta" type="none">' +
    //'<img id="imgPokemon" class="imgPokemon" src = "' + data.img + '"/>' +
    //'<dl itemscope itemtype="pokemon">' +
    //'<dt>Nombre:</dt><dd itemprop="name">' + data.name + '</dd>' +
    //'<dt>Descripción:</dt><dd itemprop="about">' + data.about + '</dd>' +
    //'</li>'
    //return output
  //},
  //namesPokeMap:(data,htmlfhater)=>{ 
    //let data2 = data.map(function(entry){
      //htmlfhater.innerHTML += viewData.renderItems(entry)
      //return htmlfhater
    //});
//return data2
//}

renderItems: (data) => {
  // Se crea un elemento <li> y se le asigna un class para dar estilos en css
  const liElementCard = document.createElement("li");
  liElementCard.className = "tarjeta " + data.type[0];

  //Se crear la imagen <img> 
  const imgElementCard = document.createElement("img");
  imgElementCard.className = "imgPokemon";
  imgElementCard.src = data.img;

  //Se crea un elemento <dl> donde se van a encontrar los detalles del pokemon
  const dlElementCard = document.createElement("dl");
  dlElementCard.setAttribute("itemscope", "");
  dlElementCard.setAttribute("itemtype", "pokemon");

  //Se crean elementos <dt> y <dd> para el Nombre del Pokémon
  const dtNombreCard = document.createElement("dt");
  const ddNombreCard = document.createElement("dd");
  dtNombreCard.textContent = "Nombre:";
  ddNombreCard.setAttribute("itemprop", "name");
  ddNombreCard.textContent = data.name;

  // Crear elementos <dt> y <dd> para la Descripción del Pokémon
  const dtDescripcionCard = document.createElement("dt");
  const ddDescripcionCard = document.createElement("dd");
  dtDescripcionCard.textContent = "Descripción:";
  ddDescripcionCard.setAttribute("itemprop", "about");
  ddDescripcionCard.textContent = data.about;

  // Agregar la imagen y el elemento dl a la tarjeta
  liElementCard.appendChild(imgElementCard);
  liElementCard.appendChild(dlElementCard);

  // Agregar los elementos creados como hijos en la estructura deseada
  dlElementCard.appendChild(dtNombreCard);
  dlElementCard.appendChild(ddNombreCard);
  dlElementCard.appendChild(dtDescripcionCard);
  dlElementCard.appendChild(ddDescripcionCard);


  return liElementCard;
},

namesPokeMap: (data, htmlContainer) => {
  // Limpiar el contenido del contenedor
  htmlContainer.innerHTML = "";

  // Recorrer los datos y agregar las tarjetas de Pokémon
  data.forEach(function (entry) {
      const tarjetaPokemon = viewData.renderItems(entry);
      htmlContainer.appendChild(tarjetaPokemon);
  });
}
}

export default viewData;
