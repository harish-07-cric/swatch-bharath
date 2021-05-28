class paper 
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0,	
			density:1.2		
			}
			this.body = Bodies.rectangle(x, y, width, height, options);
            this.width = width;
            this.height = height;
            this.image = loadImage("paper.png")
            World.add(world, this.body);
	} 
}

function keyPressed(){
	if (keyCode === UP_AROWW) {
		Matter.body.applyForce(paperObject.body,paperObject.body.position,{x : 130 , y : 145});
	}
}

display() 
	
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("green");
        fill(255);
        rect(0, 0, this.width, this.height);
        pop();


