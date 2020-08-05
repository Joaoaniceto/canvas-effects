var canvas = document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");


//var x = Math.random() * innerWidth;
//var dx = 4 ;
//var y = Math.random() * innerHeight;
//var dy = 4;

var mouse ={
  x: undefined,
  y: undefined
}

var color = [
  'black',
  'blue',
  'red',
  'orange',
  'purple',
  'green',
  'yellow'
];

window.addEventListener('mousemove',function(event){
 mouse.x = event.x;
 mouse.y = event.y;
console.log(mouse);
});
var circlearray = [];


for(i=0; i<500;i++){
  var x = Math.random() * (innerWidth - (radius*2)) + radius;
  var dx = (Math.random() -0.5) * 2;
  var y = Math.random() * (innerHeight - (radius*2)) + radius;
  var dy = (Math.random() -0.5) * 2;
  var minradius = Math.random()*4+3;
  var radius = 50;
  circlearray.push(new Circle(x,y,dx,dy,radius));
}
function Circle(x,y,dx,dy,radius){
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minradius = minradius;
  this.color = color[Math.floor(Math.random() * color.length)];

  this.draw = function() {
  c.beginPath();
  c.arc(this.x,this.y,this.radius,0,Math.PI * 2, false);
  c.fillStyle = this.color;
  c.fill();
  }

  this.update = function(){
    if (this.x+ this.radius > innerWidth || this.x - this.radius<0){
    this.dx=-this.dx;
  } 
 
  if ((this.y+ this.radius) > innerHeight || this.y- this.radius <0){
   this.dy = -this.dy;
  }
   this.x += this.dx;
   this.y += this.dy;

  if(mouse.x - this.x < 80  && mouse.x - this.x > -80 
   && mouse.y -this.y <80 && mouse.y - this.y > -80  && this.radius<50){
     this.radius +=1.5;
   } else if (this.radius>this.minradius){
     this.radius -= 1;
   }

   this.draw();
  }
} 

function animate(){
  requestAnimationFrame(animate);
  c.clearRect(0,0,innerWidth,innerHeight);
  for(var i = 0;i<circlearray.length;i++){
   circlearray[i].update();
  }
}
animate();

