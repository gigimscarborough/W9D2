const MovingObject = require("./moving_object.js");

window.MovingObject = MovingObject;


document.addEventListener('DOMContentLoaded', function() {
    
    canvas = document.getElementById("game-canvas");
    window.ctx = canvas.getContext("2d");
    
    ctx.fillStyle = "black"
    ctx.fillRect(20, 15, 500, 500);

    const newObj = new MovingObject({
        pos: [30, 30],
        vel: [10, 10],
        radius: 5,
        color: "#00FF00"
    })
    newObj.draw(ctx)

})