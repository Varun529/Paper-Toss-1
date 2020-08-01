class Paper{
    constructor(x,y){
        var options={
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density:1.2
        }
        this.body= Bodies.rectangle(x,y,25,25,options);
        this.width=25;
        this.height=25;
        World.add(world,this.body);
    }
    display(){
       
       var pos =this.body.position; 
       rectMode(CENTER);
        fill("yellow");
        rect(pos.x, pos.y, this.width, this.height);
        push();
        translate(this.body.position.x, this.body.position.y);
        
        pop();
        
    }
}