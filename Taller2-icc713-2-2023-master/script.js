// you can use this variable like this: videoGames.N64 to get the N64 video games list
const videoGames = require('./load-games.js');


//constantes
const ps2 = 'PS2';
const gba = 'GBA';
const n64 = 'N64';
const generoEjemplo = 'RPG';

//se recomienda 2 juegos para cada consola
recomendar2JegosPorConsola(ps2);
recomendar2JegosPorConsola(gba);
recomendar2JegosPorConsola(n64);

//se recomienda 3 juegos por genero
recomendar3JuegosPorGenero(generoEjemplo);

//se recomienda un juego por consola y genero
recomendarJuegoPorConsolaYGenero(gba, generoEjemplo);

//esta funcion recibe la consola de la cual mostrará recomendaciones
function recomendar2JegosPorConsola(consola) {
  if (consola == 'GBA') {
    recomendarNumeroDeElementosDeLista(2, videoGames.GBA)
  } else if (consola == 'PS2'){
    recomendarNumeroDeElementosDeLista(2, videoGames.PS2)
  }else{
    recomendarNumeroDeElementosDeLista(2, videoGames.N64)
  }
}

//esta función genera un numero aleatorio entre 0 y el numero que recibe por parametro
function generarNumeroAleatorioEntre0YNumero(numero) {
  return Math.floor(Math.random() * numero);
}

//esta funcion muestra un número n de elementos aleatodrios de la lista que se le da
function recomendarNumeroDeElementosDeLista(numero, lista) {
  for (let i = 0; i < numero; i++) {
    const juegoRecomendado = lista[generarNumeroAleatorioEntre0YNumero(lista.length)];
    console.log("- ", juegoRecomendado.name, "-", juegoRecomendado.genres, "-", juegoRecomendado.video_console);
  }
}

//recomienda 3 juegos aleatorios del mismo genero
function recomendar3JuegosPorGenero(genero) {
  const juegosMismoGenero = entregarListaJuegosMismoGenero(genero);
  for (let i = 0; i < 3; i++) {
    let juegoRecomendado = juegosMismoGenero[generarNumeroAleatorioEntre0YNumero(juegosMismoGenero.length)];
    console.log("- ", juegoRecomendado.name, "-", juegoRecomendado.genres, "-", juegoRecomendado.video_console);
  }
}

//esta funcion recorre cada array agregando a una lista los juegos que tengan el mismo genero y luego devuelve esta lista
function entregarListaJuegosMismoGenero(genero) {
  let listaJuegosMismoGenero = [];
  videoGames.GBA.filter(j => {
    if (j.genres.includes(genero)) {
      listaJuegosMismoGenero.push(j);
    }
  })
  videoGames.PS2.filter(j => {
    if (j.genres.includes(genero)) {
      listaJuegosMismoGenero.push(j);
    }
  })
  videoGames.N64.filter(j => {
    if (j.genres.includes(genero)) {
      listaJuegosMismoGenero.push(j);
    }
  })
  return listaJuegosMismoGenero;
}

//recomienda un juego que coincida con la consola y tenga el mismo genero
function recomendarJuegoPorConsolaYGenero(consola, genero) {
  const listaTodosLosJuegos = [].concat(videoGames.GBA, videoGames.N64, videoGames.PS2);
  const listaJuegosCoinciden = listaTodosLosJuegos.filter(j => j.genres.includes(genero) && j.video_console == consola);
  const juegoRecomendado = listaJuegosCoinciden[generarNumeroAleatorioEntre0YNumero(listaJuegosCoinciden.length)]
  console.log("- ", juegoRecomendado.name, "-", juegoRecomendado.genres, "-", juegoRecomendado.video_console)
}