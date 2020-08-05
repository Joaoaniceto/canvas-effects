var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

const scale = 10;

const row = canvas.width /10;
const columns = canvas.height / 10;

var snake;

function setup(){
    snake = new Snake();
    fruit = new Fruit();
    fruit.picklocation();



    window.setInterval(() => {
    c.clearRect(0,0,canvas.width,canvas.height);
    fruit.draw();    
    snake.update();
    snake.draw();
    snake.path(fruit);   

    if (snake.eat(fruit)){
        fruit.picklocation();
    }
    },1)
}


window.addEventListener('keydown',(evt) =>{
    var direction = evt.key.replace("Arrow",'');
    snake.changeDirection(direction);
} )

setup();