// estas funciones son de ejemplo
const ulContentCards = document.getElementById("root");

export const renderItems = (data,htmlContainer=ulContentCards,bestAttackType='') => {
  // Limpiar el contenido del contenedor
  htmlContainer = document.getElementById("root");
  htmlContainer.innerHTML = "";
  const ulElementCard = document.createElement("ul");

  // Recorrer los datos y agregar las tarjetas de Pokémon
  data.forEach(function (data) {
      
    // Se crea un elemento <li> y se le asigna un class para dar estilos en css
    const liElementCard = document.createElement("li");
    liElementCard.className = "tarjeta " + data.type[0];
    liElementCard.setAttribute("itemscope", "");
    liElementCard.setAttribute("itemtype", "pokemon");

    //Se crear la imagen <img> 
    const imgElementCard = document.createElement("img");
    imgElementCard.className = "imgPokemon";
    imgElementCard.src = data.img;

    //Se crea un elemento <dl> donde se van a encontrar los detalles del pokemon
    const dlElementCard = document.createElement("dl");
    /*     dlElementCard.setAttribute("itemscope", "");
    dlElementCard.setAttribute("itemtype", "pokemon"); */

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
    ddDescripcionCard.textContent = '';

    // Agregar la imagen y el elemento dl a la tarjeta
    liElementCard.appendChild(imgElementCard);
    liElementCard.appendChild(dlElementCard);

    // Agregar los elementos creados como hijos en la estructura deseada
    dlElementCard.appendChild(dtNombreCard);
    dlElementCard.appendChild(ddNombreCard);
    dlElementCard.appendChild(dtDescripcionCard);
    dlElementCard.appendChild(ddDescripcionCard);
    
    //Diseño en caso de haber seleccionado algún typo previamente
    if (bestAttackType!=='' && bestAttackType.best.type!==undefined){
      // Crear elementos <dt> y <dd> para los mejores y peores ataques
      const dtBestAttack = document.createElement("dt");
      const dtWorstAttack = document.createElement("dt");

      const ddBestAttack = document.createElement("dd");
      const ddWorstAttack = document.createElement("dd");

      dtBestAttack.textContent = "Mejor ataque tipo "+ bestAttackType.best.type;
      dtWorstAttack.textContent = "Peor ataque tipo "+ bestAttackType.worst.type;

      ddBestAttack.setAttribute("itemprop", "ataque");
      ddWorstAttack.setAttribute("itemprop", "ataque");
      
      ddBestAttack.textContent = bestAttackType.best.name + " (Daño:"+bestAttackType.best['base-damage']+")";
      ddWorstAttack.textContent = bestAttackType.worst.name + " (Daño:"+bestAttackType.worst['base-damage']+")";
      dlElementCard.appendChild(dtBestAttack);
      dlElementCard.appendChild(ddBestAttack);
      dlElementCard.appendChild(dtWorstAttack);
      dlElementCard.appendChild(ddWorstAttack);
    }
    ulElementCard.appendChild(liElementCard);
  });
  htmlContainer.appendChild(ulElementCard)
  //console.log(typeof(htmlContainer.innerHTML));
  return htmlContainer.innerHTML;
}

