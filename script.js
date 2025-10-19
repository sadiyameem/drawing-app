// variables
const canvas = document.getElementById("canvas");
canvas.height = window.innerHeight -100;
canvas.width = window.innerWidth -50;

const context = canvas.getContext("2d");

let x = null, 
    y = null;
    context.lineWidth = 5;
    let draw = false;

    // mouse events
    window.addEventListener('mousedown', (e)=>(draw=true))

    window.addEventListener('mouseup', (e)=>(draw=false))

    window.addEventListener('mousemove', (e)=>{
        if(x==null || y==null || !draw){
            x = e.clientX;
            y = e.clientY;
            return;
        }
        let currentX = e.clientX,
            currentY = e.clientY;

            context.beginPath();
            context.moveTo(x, y);
            context.lineTo(currentX, currentY);
            context.stroke();

            x = currentX;
            y = currentY;
    });

    // clear button
    document.getElementById('clear').onclick = function() {
        context.clearRect(0,0,canvas.width,canvas.height);
    };

    // color change buttons
    document.querySelectorAll('.colorChange').forEach(el=>{
        el.onclick = function(){
            context.strokeStyle = el.style.backgroundColor;
        };
    });

    // eraser button
    document.getElementById('eraser').onclick = function() {
        context.strokeStyle = "#FFFFFF";
    }

    // slider for the eraser
    const sizeSlider = document.getElementById('size');
    sizeSlider.addEventListener('input', function() {
        context.lineWidth = this.value;
    });

