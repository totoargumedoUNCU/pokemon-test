// script.js

// Base de datos de pokemones - Es un Array de objetos
// (Cada elemento dentro del array es un objeto)
const listaPokemon = [
  {
    nombre: "Bulbasaur",
    img: "../img/bulbasaur.webp",
    tipo: ["Planta", "Veneno"],
    numero: 1,
    descripcion:
      "Bulbasaur es un Pokémon de tipo Planta y Veneno. Es conocido por la semilla en su espalda que crece con él.",
    hp: 45,
    hpActual: 45,
    ataque: 49,
    defensa: 49,
    velocidad: 45,
    colorFondo: "#78C850",
    colorBorde: "#4E8234",
  },
  {
    nombre: "Charmander",
    img: "../img/charmander.webp",
    tipo: ["Fuego"],
    numero: 4,
    descripcion:
      "Charmander es un Pokémon de tipo Fuego. Tiene una llama en la punta de su cola que indica su estado de ánimo.",
    hp: 39,
    hpActual: 39,
    ataque: 52,
    defensa: 43,
    velocidad: 65,
    colorFondo: "#F08030",
    colorBorde: "#C03028",
  },
  {
    nombre: "Squirtle",
    img: "../img/squirtle.webp",
    tipo: ["Agua"],
    numero: 7,
    descripcion:
      "Squirtle es un Pokémon de tipo Agua. Es conocido por su caparazón duro que le proporciona protección.",
    hp: 44,
    hpActual: 44,
    ataque: 48,
    defensa: 65,
    velocidad: 43,
    colorFondo: "#6890F0",
    colorBorde: "#445E9C",
  },
  {
    nombre: "Psyduck",
    img: "../img/psyduck.webp",
    tipo: ["Agua", "Psíquico"],
    numero: 54,
    descripcion:
      "Psyduck es un Pokémon de tipo Agua y Psíquico. A menudo sufre de dolores de cabeza que le permiten usar poderes psíquicos.",
    hp: 50,
    hpActual: 50,
    ataque: 52,
    defensa: 48,
    velocidad: 55,
    colorFondo: "#d6d308dc",
    colorBorde: "#9c9a07ff",
  },
  {
    nombre: "Gengar",
    img: "../img/gengar.webp",
    tipo: ["Fantasma", "Veneno"],
    numero: 94,
    descripcion:
      "Gengar es un Pokémon de tipo Fantasma y Veneno. Es conocido por su naturaleza traviesa y su habilidad para esconderse en las sombras.",
    hp: 60,
    hpActual: 60,
    ataque: 65,
    defensa: 60,
    velocidad: 110,
    colorFondo: "#705898",
    colorBorde: "#493963",
  },
  {
    nombre: "Gengar",
    img: "../img/gengar.webp",
    tipo: ["Fantasma", "Veneno"],
    numero: 94,
    descripcion:
      "Gengar es un Pokémon de tipo Fantasma y Veneno. Es conocido por su naturaleza traviesa y su habilidad para esconderse en las sombras.",
    hp: 60,
    hpActual: 60,
    ataque: 65,
    defensa: 60,
    velocidad: 110,
    colorFondo: "#705898",
    colorBorde: "#493963",
  },
];

// === NUEVO CÓDIGO PARA CARGAR LOS POKEMONES DINÁMICAMENTE ===

// 1. Guardamos en una variable el lugar donde vamos a poner las tarjetas.
//    Usamos 'document.getElementById' para "agarrar" el elemento del HTML.
const contenedorListaPokemon = document.getElementById("pokemon-lista");

// 2. Creamos una función para "dibujar" los pokemones en la página.
function cargarPokemones() {
  // Primero, vaciamos el contenedor por si tenía algo antes (como el HTML de ejemplo).
  contenedorListaPokemon.innerHTML = "";

  // 3. Recorremos nuestro array 'listaPokemon' con un 'forEach'.
  //    Esto es como un 'for' pero más moderno. Por cada 'pokemon' en la lista,
  //    ejecutamos el código que está entre las llaves {}.
  listaPokemon.forEach((pokemon) => {
    // 4. Creamos el HTML para la tarjeta del pokemon actual.
    //    Usamos "template literals" (las comillas ``) que nos permiten escribir
    //    HTML multilínea y meter variables adentro con ${...}. ¡Mucho más fácil!

    // Creamos las etiquetas de tipo dinámicamente.
    // El método 'map' crea un nuevo array con el HTML de cada tipo.
    // El método 'join' une todos los elementos de ese array en un solo string.
    const tiposHTML = pokemon.tipo
      .map((tipo) => `<span class="tipo ${tipo.toLowerCase()}">${tipo}</span>`)
      .join("");
    // Calculamos el porcentaje de HP. Tomamos 160 como un valor máximo de referencia.
    // Usamos Math.min para asegurarnos que si un poke tiene más de 160, la barra no se pase del 100%.
    const hpPorcentaje = Math.min((pokemon.hp / 160) * 100, 100);

    const tarjeta = `
      <div class="pokemon-tarjeta" style="background-color: ${
        pokemon.colorFondo
      }; border-color: ${pokemon.colorBorde}">
        <div class="pokemon-informacion">
          <div class="pokemon-encabezado">
            <h2 class="pokemon-nombre">${pokemon.nombre}</h2>
            <span class="pokemon-numero">#${String(pokemon.numero).padStart(
              3,
              "0"
            )}</span>
          </div>
          <div class="pokemon-tipos">
            ${tiposHTML}
          </div>
          <p class="pokemon-descripcion">${pokemon.descripcion}</p>
          <div class="pokemon-estadisticas">
            <div class="estadistica">
              <span class="estadistica-etiqueta">HP</span>
              <div class="estadistica-barra">
                <div class="estadistica-llena" style="width: ${hpPorcentaje}%">${
      pokemon.hp
    }</div>
              </div>
            </div>
            <div class="estadisticas-grupo">
              <div class="estadistica">
                <span class="estadistica-etiqueta">Ataque</span>
                <span class="estadistica-valor">${pokemon.ataque}</span>
              </div>
              <div class="estadistica">
                <span class="estadistica-etiqueta">Defensa</span>
                <span class="estadistica-valor">${pokemon.defensa}</span>
              </div>
              <div class="estadistica">
                <span class="estadistica-etiqueta">Velocidad</span>
                <span class="estadistica-valor">${pokemon.velocidad}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="pokemon-imagen">
          <img src="${pokemon.img}" alt="${pokemon.nombre}" />
        </div>
      </div>
    `;

    // 5. Finalmente, agregamos la tarjeta que acabamos de crear al contenedor.
    //    Usamos '+=' para que vaya agregando una después de la otra sin borrar las anteriores.
    contenedorListaPokemon.innerHTML += tarjeta;
  });
}

// 6. ¡Llamamos a la función para que todo se ponga en marcha cuando se carga la página!
cargarPokemones();
