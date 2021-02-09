var mouseEvent = "empty";
var lastpostionofx = 0;
var lastpostionofy = 0;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
radius = "40"
color = "black";
widthofline = 1;
canvas.addEventListener("mousedown" , my_mousedown);
function my_mousedown(e) {
    radius = document.getElementById("radius").value;
    color = document.getElementById("color").value;
    widthofline = document.getElementById("width_of_line").value;
    mouseEvent = "mousedown";
}
canvas.addEventListener("mouseup" , my_mouseup);
function my_mouseup(e) {
    mouseEvent = "mouseup";
}
canvas.addEventListener("mouseleave" , my_mouseleave);
function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}
canvas.addEventListener("mousemove" , my_mousemove);
function my_mousemove(e) {
    currentpositionofx = e.clientX - canvas.offsetLeft;
    currentpositionofy = e.clientY - canvas.offsetTop;
    if(mouseEvent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=widthofline;
        ctx.arc(currentpositionofx, currentpositionofy, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
    lastpostionofx = currentpositionofx;
    lastpostionofy = currentpositionofy;
}


function cleararea(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}