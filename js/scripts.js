window.addEventListener("load", function() {

    var brushWidth = 300;
    var brushOffset = brushWidth;
    var speed = 40;
    var txt = "Canvas Handwriting Example";
    var x = 40;
    var i = 0;

    var ctx = document.querySelector("canvas").getContext("2d");
    ctx.font = "1.5cm Dancing Script";
    ctx.lineWidth = .5;
    ctx.fillStyle = "#000";

    (function draw() {
        
        ctx.clearRect(x, 0, 800, 150);
        ctx.setLineDash([brushWidth - brushOffset, brushOffset - speed]);
        ctx.fillText(txt[i], x, 70);

        brushOffset -= speed;

        if(brushOffset > 0) {
            requestAnimationFrame(draw);
        }
        else {
            brushOffset = brushWidth;
            x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();

            if(i < txt.length) {
                requestAnimationFrame(draw);
            }
        }
    })();
});