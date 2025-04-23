let brushSize = 40;
let redLayer;
let terms = [];
let termsText = [
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
let agreeButton;

function setup() {
  createCanvas(windowWidth, windowHeight);
  redLayer = createGraphics(width, height);
  redLayer.background(255, 0, 0);
  textFont('Georgia');
  textSize(16);
  fill(0);
  noStroke();

  // Randomize term positions
  for (let t of termsText) {
    let x = random(50, width - 300);
    let y = random(50, height - 100);
    terms.push({ text: t, x: x, y: y });
  }

  // Create AGREE button
  agreeButton = createButton('AGREE');
  agreeButton.position((windowWidth / 2) - 40, windowHeight - 50);
  agreeButton.style('padding', '10px 20px');
  agreeButton.style('font-family', 'Georgia');
  agreeButton.style('font-size', '16px');
  agreeButton.style('background-color', '#000');
  agreeButton.style('color', '#fff');
  agreeButton.style('border', 'none');
  agreeButton.style('cursor', 'pointer');
  agreeButton.mousePressed(() => {
    alert("You’ve already agreed.");
  });
}

function draw() {
  background(255);
  drawTerms();
  image(redLayer, 0, 0);

  if (mouseIsPressed) {
    redLayer.erase();
    redLayer.ellipse(mouseX, mouseY, brushSize);
    redLayer.noErase();
  }
}

function drawTerms() {
  fill(0);
  textSize(16);
  for (let t of terms) {
    text(t.text, t.x, t.y, 250);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redLayer.resizeCanvas(windowWidth, windowHeight);
  agreeButton.position((windowWidth / 2) - 40, windowHeight - 50);
}
