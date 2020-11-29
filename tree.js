class Tree {
    constructor(x, y, width, height){
      this.w = width;
      this.y = height;
        this.body = Bodies.rectangle(x,y,width,height);
      this.image = loadImage("Plucking mangoes/tree.png");
    }
  display(){
    image(this.image,this.body.position.x,this.body.position.y,this.w,this.h);
  }
  };