// variables
const canvas = document.getElementById("canvas");
canvas.height = window.innerHeight -100;
canvas.width = window.innerWidth -50;

const context = canvas.getCounted("2d");

let x = null, 
    y = null;
    context.lineWidth = 5;

    let draw = false;
    context.strokeStyle = "#010600";