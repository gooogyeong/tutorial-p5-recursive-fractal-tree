// recursive definition
// something is defined in relation to itself
// e.g. n! = n * (n - 1)!

// branch = one line with two shorter branches attached on one end,
// one heading left and the other heading right
// exit condition: branch is shorter than certain length

function setup() {
  createCanvas(400, 400);
  
  // createSlider(min, max, [value], [step])
  slider = createSlider(0, TWO_PI, PI / 4, 0.01) // PI / 4 = 45deg
}

function branch(length) {
  // line(200, height, 200, height - length)
  line(0, 0, 0, -length);
  translate(0, -length);
  const angle = slider.value()
  
  if (length > 4) {
    // push() saves the current drawing style settings and transformations
    // save where the branch diverge
    push();
    
    rotate(angle);
    branch(length * (2/3));
    
    // pop() restores these settings.
    // draw the line(branch) and then come back to where it diverged
    pop();
    
    push(); 
    
    rotate(angle * -1);
    branch(length * (2/3));
    
    pop();
  }
}

function draw() {
  background(51);
  stroke(255);
  
  // trunk of the tree
  // = a line starting from bottom center
  translate(200, height);
  branch(100);
}