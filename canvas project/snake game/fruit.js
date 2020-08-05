function Fruit(){
    this.x;
    this.y;

  this.picklocation = function(){
      this.x=(Math.floor((Math.random() * 29) + 1) * scale)
      this.y=(Math.floor((Math.random() * 29) + 1) * scale)
 }
  this.draw = function(){
      c.fillStyle = 'red';
      c.fillRect(this.x,this.y,scale,scale);
  }
}