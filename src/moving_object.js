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

MovingObject.prototype.move = function(ctx) {
    // debugger;
    const that = this;
    // console.log(that);
    // console.log(ctx);
    function myMove() {
        // debugger;
        that.pos[0] += that.vel[0];
        that.pos[1] += that.vel[1];
        // ctx.arc((that.pos[0] += ), (that.pos[1] += that.vel[1]), that.radius, 0, 6.3, false);
        that.draw(ctx);
    }
    return setInterval(myMove, 100);
}

module.exports = MovingObject;