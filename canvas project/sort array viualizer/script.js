var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var scale = 10;
var list = []


for(let i=0;i*10<window.innerWidth;i++){
    
    list.push(new Bar(i*10,0,scale,Math.random()*innerHeight,"black"));

}

console.log(list);


function Bar(x,y,width,height,color){
this.x = x;
this.y = y;
this.width = width;
this.height = height;
this.color = color;

this.draw = function(){
        c.save();
        c.fillStyle=this.color;
        c.fillRect(this.x,this.y,this.width,this.height);
        c.restore();
    }

    this.tamanho = (Bar) => {
        return Bar.height
    }
}

var newlist = list.map(item => item.tamanho);
console.log(newlist);

 bublesort = (list) => {
    let temp
    for(let i = list.length;i>0;i--){
        for(let j=0;j<i;j++){
        if(list[j].height > list[j+1].height){
            temp = list[j] ;
            list[j] = list[j+1];
            list[j+1] = temp;
        }
        }
    }
}    



function animation(){
 for(let j=0;j<list.length;j++){
     list[j].draw();
 }
}
animation();
