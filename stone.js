class Stone{
    constructor(x,y,width,height){
        var options={
       isStatic:false,
       restitution:0,
       friction:1,
       desity:1.2
        }
    this.body = Bodies.rectangle(x,y,width,height,options);
      this.image = loadImage("Plucking mangoes/stone.png");
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
    }
    display(){
      image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
    }
  }