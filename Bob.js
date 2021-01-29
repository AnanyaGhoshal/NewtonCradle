class Bob{

    constructor(x,y){

        var options={

            'isStatic':false,
            'restituion':0.3,
            'friction':0.5,
            'density':1.2,
            'gravity':1.0

        }

        this.radius = 25;
        this.body = Bodies.circle(x,y,25,options);
        World.add(world,this.body);
    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("yellow");
        strokeWeight(2);
        stroke("green");
        ellipseMode(RADIUS);
        circle(0,0,this.radius);
        pop();



    }
}