class Bowling{
    constructor(x,y){
        var options={
            restitution:0.4,
            density:1,
            friction:1
        }
        this.body = Bodies.circle(x,y,20,options);
        this.width = width;
        this.image = loadImage("sprites/bowling.png");
        World.add(world,this.body);
    }
    display(){
        if(this.body.speed<7){
            var angle = this.body.angle;
            var pos = this.body.position;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image,0,0,40,40);
            pop();
        }
        else{
            World.remove(world,this.body);
          }
    }
}