const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

var xPos = 0;
var yPos = 0;

p1 = document.createElement('img');
p1.src = 'assets/spider-model-up.png';

context.rect(xPos, yPos, 50, 50);
function Player() {
    p1.onload = function() {
        context.drawImage(p1, xPos, yPos, 100, 100)
    }
};

Player();

function drawRotated(degrees){
    context.clearRect(0,0,canvas.width,canvas.height);
    context.save();
    context.translate(canvas.width/2,canvas.height/2);
    context.rotate(degrees*Math.PI/180);
}

function move(e) {
    // alert(e.keyCode);
    if(e.keyCode == 39) {
        xPos+=5;
        p1 = document.createElement('img');
        p1.src = 'assets/spider-model-right.png'
    }

    if(e.keyCode == 37) {
        xPos-=5;
        p1 = document.createElement('img');
        p1.src = 'assets/spider-model-left.png'
    }

    if(e.keyCode == 38) {
        yPos-=5;
        p1 = document.createElement('img');
        p1.src = 'assets/spider-model-up.png'
    }

    if(e.keyCode == 40) {
        yPos+=5;
        p1 = document.createElement('img');
        p1.src = 'assets/spider-model-down.png'
    }

    canvas.width = canvas.width;
    context.rect(xPos, yPos, 50, 50);
    Player();
};

document.onkeydown = move;

console.log(canvas);