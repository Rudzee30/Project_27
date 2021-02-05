class Rope{
    constructor(body1,body2,offsetx,offsety){
        this.offsetx=offsetx;
        this.offsety=offsety;
        var options={
            bodyA:body1,
            bodyB:body2,
            PointB:{x:this.offsetx,y:this.offsety}
        }
        this.body= Matter.Constraint.create(options);
        World.add(world,this.body);


    }
    dotted_Line(){
        var pointA=this.body.bodyA.position;
        var pointB=this.body.bodyB.position;
        strokeWeight(2);
        var Anchorx=pointA.x;
        var Anchory=pointA.y;
        var anchorx=pointB.x+ this.offsetx;
        var anchory=pointB.y+ this.offsety
        line(Anchorx,Anchory,anchorx,anchory);
    }
}