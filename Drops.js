class Drops{
    constructor(x,y,radius){

        this.body = Bodies.circle(x,y,radius);
        this.radius = radius;
        this.x = x ;
        this.y = y ; 
        this.velocityY = random(2,5);
        this.color = color("darkblue");
        World.add(world, this.body);
}
fall(speed){
    this.y+= speed;
}

    display(){

        push();
        colorMode(HSB);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(this.x,this.y,this.radius);
        pop();
    }
}