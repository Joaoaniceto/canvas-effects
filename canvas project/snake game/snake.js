function Snake(){
    this.x=0;
    this.y=0;
    this.xspeed =10;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];
  

  this.draw = function(){
       c.fillStyle = "black";

       for(let i=0;i<this.tail.length;i++){
           c.fillRect(this.tail[i].x,this.tail[i].y,scale,scale);
       }

       c.fillRect(this.x,this.y,scale,scale);
  }

  this.update = function(){

   for(let i=0;i<this.tail.length-1;i++){
       this.tail[i] = this.tail[i+1]
   }

this.tail[this.total -1] = {x: this.x,y: this.y};





    this.x+=this.xspeed;
    this.y+= this.yspeed;
    if(this.x>=canvas.width){
        this.x=0;
    } else if(this.x<0){
        this.x=canvas.width;
    } else if(this.y>canvas.height){
        this.y=0;
    } else if(this.y<0){
        this.y=canvas.height;
    }


  }

  this.path = function(fruit){
     if(this.x != fruit.x ){
         this.xspeed = scale;
         this.yspeed = 0;
     } else if (this.y != fruit.y && this.x==fruit.x){
         this.yspeed = scale;
         this.xspeed =0;
     }
  }
  this.eat = function(fruit){
      if(this.x == fruit.x && this.y == fruit.y){
        this.total++;
          return true;
      }
      return false;
  }

  this.changeDirection = function(direction) {
      switch(direction){
          case 'Up':
              this.xspeed= 0;
              this.yspeed= -scale * 1;
              break;
          case 'Down':
                this.xspeed= 0;
                this.yspeed=scale ;
                break;
          case 'Left':
              this.xspeed= -scale * 1 ;
              this.yspeed=0;
              break;
          case 'Right':
              this.xspeed= scale;
              this.yspeed=0;
              break;
      }
  }
}
