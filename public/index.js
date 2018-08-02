var hoop = document.querySelector('.hoop');
var hoopColor;

function setup() {
    createCanvas(200,200);
}

function draw() {
    background(0);
    setColor();
    stroke(hoopColor);
    noFill();
    ellipse(height / 2, width / 2,50);
}

function setColor() {
    console.log(hoop.value)
    switch(hoop.value) {
        case "blue":
            hoopColor = "blue";
            break;
        default:
            hoopColor = "white";
    }
}