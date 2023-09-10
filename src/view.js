// estas funciones son de ejemplo

const viewData = {

renderItemsType: (data,bestAtackType) => {
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

  // Crear elementos <dt> y <dd> para los mejores y peores ataques
  const dtBestAttack = document.createElement("dt");
  const dtBestWorst = document.createElement("dt");
  const ddBestAttack = document.createElement("dd");
  const ddBestWorst = document.createElement("dd");
  dtBestAttack.textContent = "Mejor ataque tipo "+ bestAtackType.best.type;
  dtBestWorst.textContent = "Peor ataque tipo "+ bestAtackType.worst.type;
  ddBestAttack.setAttribute("itemprop", "ataque");
  ddBestWorst.setAttribute("itemprop", "ataque");
  ddBestAttack.textContent = bestAtackType.best.name + " (Daño:"+bestAtackType.best['base-damage']+")";
  ddBestWorst.textContent = bestAtackType.worst.name + " (Daño:"+bestAtackType.worst['base-damage']+")";

  // Agregar la imagen y el elemento dl a la tarjeta
  liElementCard.appendChild(imgElementCard);
  liElementCard.appendChild(dlElementCard);

  // Agregar los elementos creados como hijos en la estructura deseada
  dlElementCard.appendChild(dtNombreCard);
  dlElementCard.appendChild(ddNombreCard);
  dlElementCard.appendChild(dtDescripcionCard);
  dlElementCard.appendChild(ddDescripcionCard);
  dlElementCard.appendChild(dtBestAttack);
  dlElementCard.appendChild(ddBestAttack);
  dlElementCard.appendChild(dtBestWorst);
  dlElementCard.appendChild(ddBestWorst);

  return liElementCard;
},

namesPokeMapType: (data, htmlContainer,bestAtackType) => {
  // Limpiar el contenido del contenedor
  htmlContainer.innerHTML = "";

  // Recorrer los datos y agregar las tarjetas de Pokémon
  data.forEach(function (entry) {
      const tarjetaPokemon = viewData.renderItemsType(entry,bestAtackType);
      htmlContainer.appendChild(tarjetaPokemon);
  });
},

renderItems: (data,bestAtackType) => {
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

namesPokeMap: (data, htmlContainer,bestAtackType) => {
  // Limpiar el contenido del contenedor
  htmlContainer.innerHTML = "";

  // Recorrer los datos y agregar las tarjetas de Pokémon
  data.forEach(function (entry) {
      const tarjetaPokemon = viewData.renderItems(entry,bestAtackType);
      htmlContainer.appendChild(tarjetaPokemon);
  });
}
}

export default viewData;
