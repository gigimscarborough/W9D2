function MovingObject(obj) {
    this.pos = obj.pos;
    this.vel = obj.vel;
    this.radius = obj.radius;
    this.color = obj.color;
}


MovingObject.prototype.draw = function(ctx){

    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 6.3, false );
    ctx.fillStyle = this.color
    // ctx.stroke();
    ctx.fill()
}

module.exports = MovingObject;