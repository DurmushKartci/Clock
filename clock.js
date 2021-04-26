function setup(){
    createCanvas(300,300);
    angleMode(DEGREES)
    
}

function draw(){
    background(255);

    let hr = hour();
    let mn = minute();
    let sc = second();

    translate(width/2, height/2);
    rotate(-90);

    strokeWeight(6);
    noFill();
    
    
    // stroke(221,255,217);
    // arc(0,0,265,265,0,360);

    strokeWeight(12.6);
    stroke(196,69,54);
    let endhr = map(hr % 12, 0, 12, 0, 360)
    arc(0, 0, 270, 270, 0, endhr)

    push();
    rotate(endhr)
    line(0,0,95,0)
    pop();
    
    stroke(166,87,170);
    let endmn = map(mn, 0, 60, 0, 360)
    arc(0, 0, 245, 245, 0, endmn)

    push();
    rotate(endmn)
    line(0,0,80,0)
    pop();

    
    

    stroke(89,162,176);
    let endsc = map(sc, 0, 60, 0, 360)
    arc(0, 0, 220, 220, 0, endsc)

    push();
    rotate(endsc)
    line(0,0,60,0)
    pop();

    stroke(255);
    strokeWeight(10)
    point(0, 0);
    
    
}