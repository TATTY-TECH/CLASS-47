class Zombie {
    constructor(x,y){
        var options = {
            restitution:0.7,
            friction:0.8,
            density:0.6
        }
        this.animation = loadAnimation("Images/zombie1.png","Images/zombie2.png","Images/zombie3.png","Images/zombie4.png");
        this.body = Bodies.circle(x,y,10,options);
        this.radius = 10;
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        image(this.animation,0,0,this.radius,this.radius);
        pop();
        
    }
};