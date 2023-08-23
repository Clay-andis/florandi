const cargarSonido = function (fuente) {
    const sonido = document.createElement("audio");
    sonido.src = fuente;
    sonido.setAttribute("preload", "auto");
    sonido.setAttribute("controls", "none");
    sonido.style.display = "none"; // <-- oculto
    document.body.appendChild(sonido);
    return sonido;
};
const $botonReproducir = document.querySelector("#btnReproducir"),
    $botonPausar = document.querySelector("#btnPausar"),
    $botonReiniciar = document.querySelector("#btnReiniciar");
// El sonido que podemos reproducir o pausar
const sonido = cargarSonido("https://github.com/Clay-andis/florandi/blob/d46fe149f9d30e8e04a613af490048bdfa6bd8dc/music/thousand.mp3");
$botonReproducir.onclick = () => {
    sonido.play();
};

