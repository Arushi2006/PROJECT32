class Box
{
  constructor(x,y,width,height)
  {
    var options=
    {
      restitution:0.7,
      density:0.3
    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
    this.Visibility=255;
  }  

SCORE()
{
  if(this.visibility<0 && this.visibility>255)
  {
    score++;
    
  }

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  
  
  
}

  display()
  {
      if(this.body.speed<3)
      {
      World.remove(world,this.body);
      push()
      this.Visibility=this.Visibility-5;
      tint(255,this.Visibility);
      fill(random(0,255),random(0,255),random(0,255));
      rect(this.body.position.x,this.body.position.y,this.width,this.height);
      pop();
      }
     }
}
