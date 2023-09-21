// estas funciones son de ejemplo
const ulContentCards = document.getElementById("root");

export const renderItems = (data,htmlContainer=ulContentCards,bestAttackType='') => {
  // Limpiar el contenido del contenedor
  htmlContainer = document.getElementById("root");
  htmlContainer.innerHTML = "";
  //creamos el elemento ul para guardar las li
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

    //Se crean elementos <dt> y <dd> para el Nombre del Pokémon
    const dtNombreCard = document.createElement("dt");
    const ddNombreCard = document.createElement("dd");
    dtNombreCard.textContent = "Nombre:";
    ddNombreCard.setAttribute("itemprop", "name");
    ddNombreCard.textContent = '(' + data.num + ') ' + data.name.charAt(0).toUpperCase() + data.name.slice(1);

    // Crear elementos <dt> y <dd> para el tipo del Pokémon
    const dtTypeCard = document.createElement("dt");
    const ddTypeCard = document.createElement("dd");
    dtTypeCard.textContent = "Tipo:";
    ddTypeCard.setAttribute("itemprop", "type");
    data.type.forEach((entry)=>{
      const liType = document.createElement("li");
      liType.textContent = entry.charAt(0).toUpperCase()+entry.slice(1)
      ddTypeCard.appendChild(liType);
      return ddTypeCard;
    })
    
    // Crear elementos <dt> y <dd> para la región del Pokémon
    const dtRegionCard = document.createElement("dt");
    const ddRegionCard = document.createElement("dd");
    dtRegionCard.textContent = "Región:";
    ddRegionCard.setAttribute("itemprop", "region");
    ddRegionCard.textContent = data.generation.name.charAt(0).toUpperCase() + data.generation.name.slice(1);

    // Crear elementos <dt> y <dd> para el ataque rápido del Pokémon
    const dtAttackCard = document.createElement("dt");
    const ddAttackCard = document.createElement("dd");
    dtAttackCard.textContent = "Ataque rápido:";
    ddAttackCard.setAttribute("itemprop", "quick-move");
    data['quick-move'].forEach((entry)=>{   //se enlistan cada uno de los ataques rápidos
      const liQuickMove = document.createElement("li");
      liQuickMove.textContent = entry.name.charAt(0).toUpperCase()+entry.name.slice(1)+ " (Daño: "+entry['base-damage']+")";
      ddAttackCard.appendChild(liQuickMove);
      return ddAttackCard;
    })

    // Agregar los elementos creados como hijos en la estructura deseada
    dlElementCard.appendChild(dtNombreCard);
    dlElementCard.appendChild(ddNombreCard);
    dlElementCard.appendChild(dtTypeCard);
    dlElementCard.appendChild(ddTypeCard);
    dlElementCard.appendChild(dtRegionCard);
    dlElementCard.appendChild(ddRegionCard);
    dlElementCard.appendChild(dtAttackCard);
    dlElementCard.appendChild(ddAttackCard);

    // Agregar la imagen y el elemento dl a la tarjeta
    liElementCard.appendChild(imgElementCard);
    liElementCard.appendChild(dlElementCard);
    
    //Diseño en caso de haber seleccionado algún filtro de tipo previamente (arreglado en caso de no haber ataques de cierto tipo)
    if (bestAttackType!=='' && bestAttackType.best.type!==undefined){
      // Crear elementos <dt> y <dd> para los mejores y peores ataques
      const dtBestAttack = document.createElement("dt");
      const dtWorstAttack = document.createElement("dt");
      const ddBestAttack = document.createElement("dd");
      const ddWorstAttack = document.createElement("dd");

      //agrega texto dinámicopor tipo de ataque
      dtBestAttack.textContent = "Mejor ataque tipo "+ bestAttackType.best.type.charAt(0).toUpperCase()+bestAttackType.best.type.slice(1);
      dtWorstAttack.textContent = "Peor ataque tipo "+ bestAttackType.worst.type.charAt(0).toUpperCase()+bestAttackType.worst.type.slice(1);

      //agregar descripción de microdata
      ddBestAttack.setAttribute("itemprop", "ataque");
      ddWorstAttack.setAttribute("itemprop", "ataque");
      
      //información de los ataques, nombre y daño
      ddBestAttack.textContent =  bestAttackType.best.name.charAt(0).toUpperCase()+bestAttackType.best.name.slice(1) + " (Daño: "+bestAttackType.best['base-damage']+")";
      ddWorstAttack.textContent = bestAttackType.worst.name.charAt(0).toUpperCase()+bestAttackType.worst.name.slice(1) + " (Daño: "+bestAttackType.worst['base-damage']+")";

      //agrega los elementos creados a la card  
      dlElementCard.appendChild(dtBestAttack);
      dlElementCard.appendChild(ddBestAttack);
      dlElementCard.appendChild(dtWorstAttack);
      dlElementCard.appendChild(ddWorstAttack);
    }
    //incorpora las li en el ul
    ulElementCard.appendChild(liElementCard);
  });
  //incorpora las ul en el div #root
  htmlContainer.appendChild(ulElementCard)
  return htmlContainer.innerHTML;
}

