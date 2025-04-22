let brushSize = 40;
let redLayer;
let revealedPixels = 0;
let totalPixels;
let percentage = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  redLayer = createGraphics(width, height);
  redLayer.background(255, 0, 0); // solid red

  totalPixels = width * height;

  textFont('Georgia');
  textSize(16);
  fill(0);
  noStroke();
}

function draw() {
  background(255);

  // Draw the fake TOS (could be replaced with real text HTML/CSS)
  drawTerms();

  // Draw and update the red overlay
  image(redLayer, 0, 0);

  if (mouseIsPressed) {
    redLayer.erase();
    redLayer.ellipse(mouseX, mouseY, brushSize);
    redLayer.noErase();
  }

  // Calculate percentage revealed
  let pixels = redLayer.get().pixels;
  revealedPixels = 0;
  for (let i = 3; i < pixels.length; i += 4) {
    if (pixels[i] === 0) {
      revealedPixels++;
    }
  }

  percentage = floor((revealedPixels / totalPixels) * 100);

  // Display percentage (top-left)
  fill(50);
  noStroke();
  textSize(16);
  text(`${percentage}%`, 20, 30);
}

function drawTerms() {
  let margin = 60;
  let y = margin;
  let terms = [
    "By accessing this website, you agree to the following terms.",
    "You agree to let us watch you while you browse.",
    "You agree to forget what you were searching for.",
    "You agree to never read this, and still proceed.",
    "You agree that your memories may be harvested.",
    "You agree to continue scrolling until your sense of self dissolves.",
    "You agree to the illusion of choice.",
    "You agree to give consent retroactively.",
    "You agree that we may change these terms without notice.",
    "You agree that you’ve already agreed."
  ];

  fill(0);
  textSize(16);
  for (let t of terms) {
    text(t, margin, y, width - 2 * margin);
    y += 40;
  }
}
