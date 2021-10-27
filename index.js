const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

var xPos = 0;
var yPos = 0;

context.rect(xPos, yPos, 50, 50);
function Player() {
    p1 = new Image();
    p1.src = 'assets/spider-model.jpg';
    
    p1.onload = function() {
        context.drawImage(p1, xPos, yPos)
    }
};

Player();

function move(e) {
    // alert(e.keyCode);
    if(e.keyCode == 39) {
        xPos+=5;
    }

    if(e.keyCode == 37) {
        xPos-=5;
    }

    if(e.keyCode == 38) {
        yPos-=5;
    }

    if(e.keyCode == 40) {
        yPos+=5;
    }

    canvas.width = canvas.width;
    context.rect(xPos, yPos, 50, 50);
    Player();


};

document.onkeydown = move;

console.log(canvas);