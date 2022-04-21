var contexto = document.getElementById("lienzoJuego").getContext("2d")
contexto.canvas.whidt = 300
contexto.canvas.height = 530
// variables 
var gravedad = 1.5
var FPS = 60
var personaje = {
  x: 100,
  y: 150,
  w: 50,
  h: 50,
  
}
var tuberias = new Array()
tuberias[0] = {
  x:contexto.canvas.whidt,
  y:0 
}
// variables imagenes
var bird = new Image()
bird.src = "imagenes/bird.png"

var background = new Image()
background.src = "imagenes/background.png"

var tuberiaNorte = new Image()
tuberiaNorte.src = "imagenes/tuberiaNorte.png"

var tuberiaSur = new Image()
tuberiaSur.src = "imagenes/tuberiaSur.png"

var suelo = new Image()
suelo.src = "imagenes/suelo.png"

// control
function presionar() {
   personaje.y -= 25 //controlar la caida 
}

//Bucle
setInterval(lopp, 1000 / FPS)
function lopp() {
  contexto.clearRect(0,0,300,530)
  // fondo
  contexto.drawImage(background,0,0)
  contexto.drawImage(suelo,0,contexto.canvas.height - suelo.height)
  //personaje
  contexto.drawImage(bird, personaje.x, personaje.y)

  // tuberias
  for(var i = 0; i < tuberias.length ; i++){ 
    var cosntante = tuberiaNorte.height + 80
    contexto.drawImage(tuberiaNorte,tuberias[i].x,tuberias[i].y)
    contexto.drawImage(tuberiaSur,tuberias[i].x,tuberias[i].y + cosntante)
    tuberias[i].x--

    if(tuberias[i].x == 150){
      tuberias.push({
        x:contexto.canvas.whidt
        // y:Math.floor(Math.random()*tuberiaNorte.height) - tuberiaNorte.height
      })
    }
}
  //condiciones 

  personaje.y += gravedad
}

window.addEventListener("keydown", presionar)
