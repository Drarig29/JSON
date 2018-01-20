class Rectangle {
    constructor() {
        this.name = "Rectangle";
    }

    update() {
        if (mouseIsPressed) {
            temp_canvas.clear();
            temp_canvas.strokeWeight(thickness);
            temp_canvas.stroke(r.value(), g.value(), b.value());
            temp_canvas.rect(mouseDownX, mouseDownY, mouseX - mouseDownX, mouseY - mouseDownY);
            image(temp_canvas, 0, 0);
        }
    }
}

class Line {
    constructor() {
        this.name = "Line";
    }

    update() {
        if (mouseIsPressed) {
            temp_canvas.clear();
            temp_canvas.strokeWeight(thickness);
            temp_canvas.stroke(r.value(), g.value(), b.value());
            temp_canvas.line(mouseDownX, mouseDownY, mouseX, mouseY);
            image(temp_canvas, 0, 0);
        }
    }
}

var r, g, b;
var thickness = 5;
var currentToolP;

var currentTool = 0;

var tools = [
    new Rectangle(),
    new Line()
];

var main_canvas, temp_canvas;
var mouseDownX, mouseDownY; //the mouse position when we pressed the mouse

function keyPressed() {
    if (keyCode == TAB) {
        currentTool = (currentTool + 1) % tools.length;
        currentToolP.elt.textContent = tools[currentTool].name;
    }
}

function mousePressed() {
    mouseDownX = mouseX;
    mouseDownY = mouseY;
}

function mouseReleased() {
    main_canvas.image(temp_canvas, 0, 0); //we apply the object which has been drawn with the current tool to the actual drawing
}

function setupControls() {
    r = createSlider(0, 255, 0, 1);
    r.position(10, 10);

    g = createSlider(0, 255, 0, 1);
    g.position(10, 50);

    b = createSlider(0, 255, 0, 1);
    b.position(10, 90);

    //thickness = createSlider(1, 20, 1, 0);

    currentToolP = createP(tools[currentTool].name);
    currentToolP.position(10, 130);
}

function setup() {
    setupControls();

    var c = createCanvas(0.9 * windowWidth, 0.95 * windowHeight);
    c.position(0.085 * windowWidth, 20);

    main_canvas = createGraphics(width, height); //contains the actual drawing
    temp_canvas = createGraphics(width, height); //contains the temporary object being drawn by the current tool

    temp_canvas.noFill();
}

function draw() {
    background(255);
    image(main_canvas, 0, 0);
    tools[currentTool].update();
}