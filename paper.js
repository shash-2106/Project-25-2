class paper{
    constructor(x,y,width,height){
        var options = {
        isStatic : false,
        restitution : 0.3,
        friction : 0.5,
        density : 1.2
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.height = height;
        this.width = width;
        this.image = loadImage("crumpledpaper.png");
        World.add(world,this.body)
       
    }
    display(){
        var pos =this.body.position;
        console.log(pos);
        //fill("red")
        //rectMode(CENTER)
        //rect(pos.x,pos.y,this.width,this.height)
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
    }
}