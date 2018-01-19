class Rectangle {
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
  
  var r;
  var g;
  var b;
  var thickness = 5;

  var tool = new Rectangle(); //the current tool
  
  var main_canvas, temp_canvas;
  var mouseDownX, mouseDownY; //the mouse position when we pressed the mouse
  
  function mousePressed() {
    mouseDownX = mouseX;
    mouseDownY = mouseY;
  }
  
  function mouseReleased() {
    main_canvas.image(temp_canvas, 0, 0); //we apply the object which has been drawn with the current tool to the actual drawing
  }
  
  function setupSliders() {
    r = createSlider(0, 255, 0, 1);
    r.position(10, 10);
  
    g = createSlider(0, 255, 0, 1);
    g.position(10, 50);
  
    b = createSlider(0, 255, 0, 1);
    b.position(10, 90);

    //thickness = createSlider(1, 20, 1, 0);
  }
  
  function setup() {
    setupSliders();
  
    createCanvas(window.innerWidth, window.innerHeight);

    main_canvas = createGraphics(width, height); //contains the actual drawing
    temp_canvas = createGraphics(width, height); //contains the temporary object being drawn by the current tool
  
    background(255);
  }
  
  function draw() {
    clear();
    image(main_canvas, 0, 0);
    tool.update();
  }