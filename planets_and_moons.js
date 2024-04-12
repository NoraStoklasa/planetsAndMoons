"use strict";

// Angles variables for moon's orbit
let yellowAngle = 0;
let whiteAngle = 0;

// SIZE
let SIZE = 0.5;

function setup() {
    createCanvas(800, 800);
}

function draw() {
    background(0);

    // x and y coordinates of the canvas
    let CENTER_X = width / 2;
    let CENTER_Y = height / 2;

    let PLANET_DIAMETER = 60 * SIZE;

    let MOON_DIAMETER = PLANET_DIAMETER / 2;

    angleMode(DEGREES);

    
    // MOONS
    let planetRadius = MOON_DIAMETER / 2;

    // yellow moon
    let yellowRadiusX = 300 * SIZE; // x-radius yellow moon's orbit
    let yellowRadiusY = 50 * SIZE; // y-radius yellow moon's orbit
    let yellowX = CENTER_X + (yellowRadiusX * cos(yellowAngle)); // x-coor of yellow based on its orbit and angle
    let yellowY = CENTER_Y + (yellowRadiusY * sin(yellowAngle));
    fill(255, 255, 0);
    noStroke();
    ellipse(yellowX, yellowY, MOON_DIAMETER, MOON_DIAMETER);

    // white moon
    let whiteRadiusX = 80 * SIZE; 
    let whiteRadiusY = 200 * SIZE; 
    let whiteX = CENTER_X + (whiteRadiusX * cos(whiteAngle)); 
    let whiteY = CENTER_Y + (whiteRadiusY * sin(whiteAngle));
    fill(255);
    noStroke();
    ellipse(whiteX, whiteY, MOON_DIAMETER, MOON_DIAMETER);

    // Calculate angle towards yellow moon
    let PLANET_ANGLE = atan2(yellowY - CENTER_Y, yellowX - CENTER_X);

    // rotating the planet so that bright side faces the yellow moon
    PLANET_ANGLE += 90;

    // ANIMATE moons
    yellowAngle += 2;
    whiteAngle += 1;


    // MIDDLE CIRCLE - PLANET
    // dark half circle - planet
    fill(100);
    noStroke();
    arc(CENTER_X, CENTER_Y, PLANET_DIAMETER, PLANET_DIAMETER, PLANET_ANGLE, PLANET_ANGLE + 180, PIE);

    // light half circle - planet
    fill(240);
    noStroke();
    arc(CENTER_X, CENTER_Y, PLANET_DIAMETER, PLANET_DIAMETER, PLANET_ANGLE + 180, PLANET_ANGLE, PIE);


    //  YELLOW/WHITE CIRCLE - distance between center and the moon
    let yellowDistance = dist(CENTER_X, CENTER_Y, yellowX, yellowY);
    let whiteDistance = dist(CENTER_X, CENTER_Y, whiteX, whiteY);

    // Determine the closest moon
    let closestMoonColor;
    if (yellowDistance < whiteDistance) {
        closestMoonColor = color(255, 255, 0); // if yellow is closer
    } else {
        closestMoonColor = color(255); // if white closer
    }

    // SMALL SIRCLE in the middle of the planet
    // colour changing accordingly which moon is closest
    fill(closestMoonColor);
    ellipse(CENTER_X, CENTER_Y, MOON_DIAMETER, MOON_DIAMETER);


    // TRACKS of the moons
    // yellow tracks
    noFill();
    stroke(255, 255, 0);
    ellipse(CENTER_X, CENTER_Y, yellowRadiusX * 2, yellowRadiusY * 2);

    // white tracks
    noFill();
    stroke(255);
    ellipse(CENTER_X, CENTER_Y, whiteRadiusX * 2, whiteRadiusY * 2);


    // RED MOON
    let redRadius = 50 * SIZE;
    let redMoonDiameter = MOON_DIAMETER / 2;
    let redX = whiteX + (redRadius * cos(whiteAngle * 2));
    let redY = whiteY + (redRadius * sin(whiteAngle * 2));
    fill(255, 0, 0);
    noStroke();
    ellipse(redX, redY, redMoonDiameter, redMoonDiameter);

    // red moon tracks
    noFill();
    stroke(255, 0, 0);
    ellipse(whiteX, whiteY, 100 * SIZE, 100 * SIZE);
}
