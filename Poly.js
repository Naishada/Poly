class Poly{
    constructor(x,y){
        var options = {
            isStatic : true,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
        this.body = Matter.Bodies.circle(x,y,10,options);
        this.image = loadImage("polygon.png")
       World.add(world,this.body);
    }
    display(){
        var pos = this.body.position
        fill("red");
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,20,20);

    }
}
    
