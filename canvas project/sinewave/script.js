var canvas = document.querySelector('canvas');
var button = document.querySelector('button');
console.log(button);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');



var mouse = {
  x: undefined,
  y: undefined
}

window.addEventListener('mousemove',(event) => {
 mouse.x = event.x;
 mouse.y = event.y;
})

var x = 100
var a = 100;
var y = 0;
let bool = undefined;
// criar o primeiro objeto
function draw1(){
    c.beginPath();
    c.moveTo(canvas.width/2 +100+y,0);
    c.lineTo(canvas.width/2 -100+y,canvas.height);
    c.lineTo(0,canvas.height);
    c.lineTo(0,0);
    c.closePath();
    c.stroke();
    c.fill();
}
// criar o segundo objeto
function draw2(){
    c.beginPath();
    c.moveTo(canvas.width - (canvas.width/2-100 + y),0); 
    c.lineTo(canvas.width - (canvas.width/2 +100 + y),canvas.height);
    c.lineTo(canvas.width,canvas.height);
    c.lineTo(canvas.width,0);
    c.closePath();
    c.stroke();
    c.fill();
}
// função de controlo do primiro objeto
function update(){
    draw1();
    if (bool == true) y-=5;  
    if (bool == false) y+=5;  
}
// função de controlo do segundo objeto
function update1(){
    draw2();
    if (bool == true) y-=5;
    if (bool == false) y+=5;  
}
// função que poe o controlo a funcionar
function trade(){
    if (bool == true) return bool = false;
    else return bool = true;   
}

// ativa o controlo
button.addEventListener('click',function(){
    trade();
});   
// função de fluir

function animated(){
    requestAnimationFrame(animated)
   
    c.clearRect(0,0,canvas.width,canvas.height); 
    update();
    update1();
    if ((canvas.width/2 +100+y) <= 0){trade()};
    if((canvas.width/2 +100+y) >= canvas.width/2+100){bool = undefined}

}
var radius=50;

function draw3() {
    c.beginPath();
    c.arc(canvas.width/2,canvas.height/2,radius,0,Math.PI * 2, false);
    c.fillStyle = 'red';
    c.fill();
    }



animated();
draw3();

function dist(){
 
}
