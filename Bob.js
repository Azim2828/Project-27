class Bob{
	constructor(x,y,r)
	{
	
	var options
	options={
		restitution:1,
		friction:0.5,
		density:3,
		isStatic:false
	}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var bobpos=this.body.position;
			var angle = this.body.angle		
			push()
			translate(bobpos.x, bobpos.y);
			rotate(angle)
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkred");
	       ellipse(0,0,this.r,this.r)
			pop()
	}

}