const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const flyEnemies = [];

document.onkeydown = move;
console.log(canvas);

canvas.width = 600;
canvas.height = 600;

var xPos = 275;
var yPos = 275;

flyCount = 0;

let flyArray = localStorage.getItem('fly');

var elementsPositionX = [
    50, 100, 150, 200, 250, 300, 350, 400, 450, 500 
]
var elementsPositionY = [
    50, 100, 150, 200, 250, 300, 350, 400, 450, 500 
]

gameOver = false;

p1 = document.createElement('img');
p1.src = 'assets/spider-model-up.png';

context.rect(xPos, yPos, 0, 0);

class Fly {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    draw() {
        context.beginPath()
        context.arc(this.x, this.y, this.radius, 0, Math.PI*2, false)
        context.fillStyle = this.color;
        context.fill();
    }
}

//functions

function Player() {
    p1.onload = function() {
        context.drawImage(p1, xPos, yPos, 50, 50)
    }
};

function move(e) {
    // alert(e.keyCode);
    if(e.keyCode == 39) {
        xPos+=50;
        p1 = document.createElement('img');
        p1.src = 'assets/spider-model-right.png'
    }

    if(e.keyCode == 37) {
        xPos-=50;
        p1 = document.createElement('img');
        p1.src = 'assets/spider-model-left.png'
    }

    if(e.keyCode == 38) {
        yPos-=50;
        p1 = document.createElement('img');
        p1.src = 'assets/spider-model-up.png'
    }

    if(e.keyCode == 40) {
        yPos+=50;
        p1 = document.createElement('img');
        p1.src = 'assets/spider-model-down.png'
    }

    canvas.width = canvas.width;
    context.rect(xPos, yPos, 50, 50);
    Player();
    drawBoard();
    flyEnemies.forEach((fly, index) => {
        if (xPos + 25 == fly.x && yPos + 25 == fly.y) {
            flyEnemies.splice(index, 1)
            if (flyEnemies.length > 7) {
                gameOver = true;
            }
            flyCount ++;
            localStorage.setItem('fly', flyCount)
            console.log(flyArray)
        }

        fly.draw();
    })

    setScore();
};

// Box width
var bw = 400;
// Box height
var bh = 400;
// Padding
var p = 10;

function drawBoard(){
    context.moveTo(0,0);
    context.lineTo(600,600);
    
    context.moveTo(600,0);
    context.lineTo(0,600);
    
    context.moveTo(300,0);
    context.lineTo(300,600);
    
    context.moveTo(0, 300);
    context.lineTo(600, 300);
    
    context.lineTo(512.1320343559643, 87.8679656440357);
    context.lineTo(300, 0);
    context.lineTo(87.8679656440357, 87.8679656440357);
    context.lineTo(0, 300);
    context.lineTo(87.8679656440357, 512.1320343559643);
    context.lineTo(300, 600);
    context.lineTo(512.1320343559643, 512.1320343559643);
    context.lineTo(600, 300);
    
    context.moveTo(500, 300);
    
    context.stroke();
}

function spawnFly() {
    setInterval(() => {
        let controlX = elementsPositionX[Math.floor(Math.random() * elementsPositionX.length)];
        let controlY = elementsPositionY[Math.floor(Math.random() * elementsPositionY.length)];
        let x;
        let y;

        if(controlX != 300 && controlY != 300 ) {
            x = controlX;
            y = x;
        }

        if (controlX == 300 || controlY == 300) {
            x = controlX;
            y = controlY;
        }
        
        let radius = 10;
        let color = 'black';

        flyEnemies.push(new Fly(x, y, radius, color))
    
        console.log(flyEnemies)

        flyEnemies.forEach(fly => {
            fly.draw();
            console.log(fly)
        })
    }, 5000);
}

function setScore() {
    if(localStorage.getItem('fly') != null) {
        document.getElementById('score').innerHTML = localStorage.getItem('fly')
    } else {
        document.getElementById('score').innerHTML = 0
    }
}

Player();
spawnFly();
drawBoard();