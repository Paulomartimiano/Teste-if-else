function setup() {
  createCanvas(400, 400);
  background(220);
   rect(50,150, 90,60)
  rect(250,150, 90,60)
   let x
  let y 
  x = random(0,50)
  x= int(x)
  y = random(0, 50)
  y = int(y)

  numero1 = x
  numero2 = y
 }

function draw() {
  textSize(30)
  textAlign(CENTER, CENTER)
  text(numero1, 95, 180)
  text(numero2, 295, 180)
  
  if(mouseIsPressed) {
    textSize(25)
  if(numero1 > numero2){
    background('blue')
    textAlign(CENTER, CENTER)
    text('Número 1 é maior que número 2', 200, 200)
    
  } else {
    background('green')
    textAlign(CENTER, CENTER)
    text('Número 2 é maior que número 1', 200, 200)
    
  }
    noLoop()
  console.log(numero1, numero2)
  }
}