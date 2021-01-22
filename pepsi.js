class Pepsi extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/pepsi.png");
    this.visibility = 225;
  }
  display(){
    if(this.body.speed<10){
      super.display();
    }
    else{
      var pos = this.body.position;
      push();
      World.remove(world,this.body);
      this.visibility = this.visibility-4;
      tint(225,this.visibility);
      rotate(this.body.angle);
      image(this.image,pos.x,pos.y,this.width,this.height);
      pop();
    }
  }
  
}
