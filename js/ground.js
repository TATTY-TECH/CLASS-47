class Ground {
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        push();
        fill("lightbrown")
        translate(this.body.position.x,this.body.position.y);
        rectImage(RECT);
        rect(0,0,this.width,this.height);
        pop();
        
    }
};