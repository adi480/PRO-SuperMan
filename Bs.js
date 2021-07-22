class Bs{
    constructor(x,y,width,height){
      var options ={ isStatic: false}
      
      this.body =  Bodies.rectangle(x,y,width,height,options);
      World.add(world,this.body);
      this.width = width;
      this.height = height;
      this.image = loadImage("monster1.png");
      Matter.Body.setMass(this.body,this.body.mass*5);

    }
    display()
    {
      var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0,this.width,this.height);
        pop();

    }
  
  
  }