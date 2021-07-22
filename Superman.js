class Super{
    constructor(x, y, width, height) {
        var options = {
            isStatic: false
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
        this.width = width;
        this.height = height;
        this.image = loadImage("superman.png");
        
      
      }
show(){

 this.body.position.x = mouseX;
this.body.position.y = mouseY;


        push();
        translate(this.body.position.x, this.body.position.y);
        
        imageMode(CENTER);
        image(this.image, 0, 0,this.width,this.height);
        pop();





}
}