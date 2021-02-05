class Bob  {
    constructor(x,y,radius) {
       var options={
        isStatic:false,
        
       

       }
       this.body= Bodies.circle(x,y,radius,options);
       this.radius=radius;
       World.add(world,this.body);

    }
    display() {
        var pos=this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("Magenta");
        circle(0,0,this.radius);
        pop();
      }
};