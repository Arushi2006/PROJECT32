class Sling
{
    constructor(bodyA,pointB)
    {
      var options=
      {
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.04,
        length:10
      }
      
      this.pointB=pointB;
      this.slingshot=Constraint.create (options);
      World.add(world,this.slingshot);
    }
    fly()
    {
      this.slingshot.bodyA=null;
    }
    attach(body)
    {
      this.slingshot.bodyA=body;
    }
    display()
    {
    
      
        if(this.slingshot.bodyA)
        { 
        var pointA=this.slingshot.bodyA.position;
        var pointB=this.pointB;
        push();
        stroke(61,29,12);
        if(pointA.x<220)
        {
        strokeWeight(10);
        line(pointA.x-25,pointA.y,pointB.x-10,pointB.y);
        line(pointA.x-25,pointA.y,pointB.x+30,pointB.y-3);
        }
        else
        {
          strokeWeight(5);
          line(pointA.x+25,pointA.y,pointB.x-10,pointB.y);
          line(pointA.x+25,pointA.y,pointB.x+30,pointB.y-3)
        }
        pop();
    }
  }
}