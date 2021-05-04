mouseEvent = "empty";
colour = "black";
width_of_line = 5;
radius = 10;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
canvas.addEventListener("mousedown", my_mousedown);


function my_mousedown(e)
{
    colour = document.getElementById("colour").value;
    width_of_line = document.getElementById("width").value;
    radius = document.getElementById("radius").value;

    mouseEvent="mousedown";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent="mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent="mouseUp";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    current_position_of_x = e.clientX - canvas.offsetLeft;
    current_position_of_y = e.clientY - canvas.offsetTop;

    if (mouseEvent =="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle = colour;
    ctx.lineWidth = width_of_line;
    ctx.arc(current_position_of_x,current_position_of_y,radius,0,2 * Math.PI);
    ctx.stroke();
}

}

function clear_canvas(){
    ctx.clearRect(0,0, canvas.width, canvas.height)
}

    
