class Ballon {

    constructor(x,y,width,height){
    var options = {
       
     restitution: 0.8,   
    friction: 1.0,
    density: 0.06
    }
     this.image = loadImage("Hot Air Ballon-02.png");
     this.body = Bodies.rectangle(x,y,width,height,options); 
     World.add(world, this.body);
     this.width = width
     this.height = height
    
    
    }
    display(){
    var angle = this.body.angle
    var pos = this.body.position 
    push();
    translate(pos.x,pos.y)
    rotate(angle)
    strokeWeight(4);
    stroke("pink")
    fill("lightpink")
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height)
    pop();
    }
    
    
    
    
    
    }       