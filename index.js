var box = document.getElementById("box");
var boxheight = box.offsetHeight;
var boxwidth = box.offsetWidth;

// math.random() is [0,1]

//choosing random coordinates
var targetx = Math.random() * boxwidth;
var targety = Math.random() * boxheight;

console.log(`targetx: ${targetx}`);
console.log(`targety: ${targety}`);

// var x = event.clientX;     // Get the horizontal coordinate
// var y = event.clientY;     // Get the vertical coordinate
// var coor = "X coords: " + x + ", Y coords: " + y;

function distance(targetx, targety, mousex, mousey){
  var a = targetx - mousex;
  var b = targety - mousey;

  var c = Math.sqrt( a*a + b*b );
  console.log(c);
  return c;
}
var win = true;
var audio = new Audio('cowmoo.mp3');
function loco(e){
  if (win == true){
    console.log(`mousex: ${event.clientX}`);
    console.log(`mousey: ${event.clientY}`);
    var mousex = event.clientX
    var mousey = event.clientY
    var dist = distance(targetx, targety, mousex, mousey);
    box.style.backgroundColor = `rgb(${255 - dist}, 0, 0)`
    if (dist <= 20){
      box.style.backgroundColor = "green"
      audio.play();
      win = false;
    }
  }
}

// if distance() = loco();
//   background-color = blue;

box.addEventListener("mousemove", loco);
