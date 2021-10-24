class Ball {
    constructor(x,y){
        var options = {
            restitution:0.7,
            friction:0.8,
            density:0.6
        }
        this.radius = 10;
        this.body = Bodies.circle(x,y,radius,options);
        this.image = loadImage("Images/ball.png");
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,0,10,10);
        pop();
        
    }
};