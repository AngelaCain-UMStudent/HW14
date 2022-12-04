//ANGELA CAIN - MART 120 - DEC 2022
//######################################################################################################################
// Users X and Y________________________________________________________________________________
var userX = 100;
var userY = 100;
// Key Handler Codes__________________________________________________________________________________________________________________________
var s = 83;
var a = 65;
var d = 68;

// Shapes and Arrays____________________________________________________________________________________________________________
var drawX = 30;
var drawY = 50;

var drawXs = [];
var drawYx = [];
var diameters = [];

var drawXspeeds = [];
var drawYspeeds = [];

// Mouse click shapes
var mousX;
var mousY;
//_____________________________________________________________________________________________________________________________________________________________________
function setup() {
    createCanvas(500, 600);
    // get a random speed when the it first starts
    for (var i = 0; i < 50; i++) {
        drawXspeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        drawYspeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        drawXs[i] = getRandomNumber(500);
        drawYx[i] = getRandomNumber(600);
        diameters[i] = getRandomNumber(30);
    }

    createCharacter(200, 350);
}

function draw() {
    background(196, 131, 201);
    stroke(0);
    fill(0);

    // borders___________________________________________________________________________________________________________________________________________________
    createBorders(10);

    // exit message
    textSize(16);
    text("Goal!", width - 50, height - 50)
    drawCharacter();
    characterMovement();
    //________________________________________________________________________________________________________________________________________________________________
    // opposition
    fill(129, 164, 262);
    // draw the shape
    for (var i = 0; i < drawXs.length; i++) {
        circle(drawXs[i], drawYx[i], diameters[i]);
        drawXspeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        drawYspeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

        // move the shape
        drawXs[i] += drawXspeeds[i];
        drawYx[i] += drawYspeeds[i];

        if (drawXs[i] > width) {
            drawXs[i] = 0;
        }
        if (drawXs[i] < 0) {
            drawXs[i] = width;
        }
        if (drawYx[i] > height) {
            drawYx[i] = 0;
        }
        if (drawYx[i] < 0) {
            drawYx[i] = height;
        }
    }
    // Check Win ______________________________________________________________________________________________________________________________________________
    if (userX > width && userY > width - 50) {
        fill(0, 92, 3);
        stroke(5);
        textSize(50);
        text("Congrats! Winner!", width / 2 - 100, height / 2 - 100);
    }

    // Mouse Click Shape _____________________________________________________________________________________________________________________________________
    fill(139, 168, 264);
    circle(mousX, mousY, 25);
}

function characterMovement() {
    // handle the keys
    if (keyIsDown(s)) {
        userY += 10;
    }
    if (keyIsDown(a)) {
        userX -= 10;
        console.log("movement: " + userX);
    }
    if (keyIsDown(d)) {
        userX += 10;
    }
}
//________________________________________________________________________________________________________________________________________________________________________
function createCharacter(x, y) {
    userX = x;
    userY = y;
}
//_____________________________________________________________________________________________________________________________________________________________________
function drawCharacter() {
    fill(23, 40, 123);
    circle(userX, userY, 25);
}
//_________________________________________________________________________________________________________________________________________________________________
function createBorders(thickness) {
    fill(100, 100, 100)
    // top border
    rect(0, 0, width, thickness);
    // left border
    rect(0, 0, thickness, height);
    // bottom border
    rect(0, height - thickness, width, thickness);
    // right upper border
    rect(width - thickness, 0, thickness, height - 50);
}

function mouseClicked() {
    mousX = mouseX;
    mousY = mouseY;
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}