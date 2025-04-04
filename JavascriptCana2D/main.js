// Log "hello world" to the console
console.log("hello world");

// Define a constant for the circle's radius
const RADIUS = 250;
// Define constants for the circle's center coordinates
const X_CIRCLE_CENTER = 300;
const Y_CIRCLE_CENTER = 300;

// Declare variables for the canvas element and its context
let canvas;
let ctx;

// Define a class to hold the mouse position
class MousePosition {
    constructor(x, y) {
        this.x = x, // Set the x-coordinate
        this.y = y; // Set the y-coordinate
    }
}

// Create an instance of MousePosition to hold the current mouse position
let mousePos = new MousePosition(0, 0);

// Add an event listener to call setupCanvas when the DOM content is loaded
document.addEventListener('DOMContentLoaded', setupCanvas);

// Function to set up the canvas
function setupCanvas() {
    // Get reference to the canvas element by its ID
    canvas = document.getElementById("my-canvas");
    // Get the 2D drawing context of the canvas
    ctx = canvas.getContext("2d");
    // Draw the initial canvas
    drawCanvas();
    // Add an event listener to redraw the canvas when the mouse moves
    canvas.addEventListener("mousemove", redrawCanvas);
}

// Function to draw the initial canvas
function drawCanvas() {
    // Draw a rectangle border around the canvas
    drawRectangle("#839192", 5, 0, 0, 600, 600);
    // Draw a circle at the center of the canvas
    drawCircle("#839192", 1, X_CIRCLE_CENTER, Y_CIRCLE_CENTER, RADIUS, 0, 2 * Math.PI);
    // Draw vertical and horizontal guide lines through the center of the canvas
    drawLine("#839192", 1, X_CIRCLE_CENTER, 0, X_CIRCLE_CENTER, 600);
    drawLine("#839192", 1, 0, Y_CIRCLE_CENTER, 600, Y_CIRCLE_CENTER);
}

// Function to redraw the canvas when the mouse moves
function redrawCanvas(evt) {
    // Clear the entire canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Redraw the initial canvas
    drawCanvas();
    // Update the mouse position based on the event
    getMousePosition(evt);
    // Draw the x and y coordinates of the mouse position
    drawTextAtPoint(ctx, "X : " + mousePos.x, 15, 25);
    drawTextAtPoint(ctx, "Y : " + mousePos.y, 15, 45);
    // Calculate the angle of the mouse position in degrees
    let angleOfMouseDegrees = getAngleUsingXAndY(mousePos.x, mousePos.y);
    // Draw the angle in degrees
    drawTextAtPoint(ctx, "Degrees : " + angleOfMouseDegrees, 15, 65);
    // Draw a triangle based on the angle
    drawTriangle(angleOfMouseDegrees);
}

// Function to draw a rectangle
function drawRectangle(strokeColor, lineWidth, startX, startY, endX, endY) {
    ctx.strokeStyle = strokeColor; // Set the stroke color
    ctx.lineWidth = lineWidth; // Set the line width
    ctx.strokeRect(startX, startY, endX, endY); // Draw the rectangle
}

// Function to draw a circle
function drawCircle(strokeColor, lineWidth, xCircCenter, yCircCenter, radius, arcStart, arcEnd) {
    ctx.strokeStyle = strokeColor; // Set the stroke color
    ctx.lineWidth = lineWidth; // Set the line width
    ctx.beginPath(); // Begin a new path
    ctx.arc(xCircCenter, yCircCenter, radius, arcStart, arcEnd); // Draw the arc (circle)
    ctx.stroke(); // Stroke the path
}

// Function to draw a line
function drawLine(strokeColor, lineWidth, xStart, yStart, xEnd, yEnd) {
    ctx.strokeStyle = strokeColor; // Set the stroke color
    ctx.lineWidth = lineWidth; // Set the line width
    ctx.beginPath(); // Begin a new path
    ctx.moveTo(xStart, yStart); // Move to the start of the line
    ctx.lineTo(xEnd, yEnd); // Draw the line to the end point
    ctx.stroke(); // Stroke the path
}

// Function to draw text at a specific point
function drawTextAtPoint(ctx, text, x, y) {
    ctx.font = "15px Arial"; // Set the font style and size
    ctx.fillText(text, x, y); // Draw the text at the specified coordinates
}

// Function to get the mouse position relative to the canvas
function getMousePosition(evt) {
    // Get the canvas size and position relative to the web page
    let canvasDimensions = canvas.getBoundingClientRect();
    // Calculate the mouse position relative to the canvas
    mousePos.x = Math.floor(evt.clientX - canvasDimensions.left);
    mousePos.y = Math.floor(evt.clientY - canvasDimensions.top);
    // Convert the mouse position to a coordinate graph
    mousePos.x -= 300;
    mousePos.y = -1 * (mousePos.y - 300);
    return mousePos; // Return the updated mouse position
}

// Function to get the angle using x and y coordinates
function getAngleUsingXAndY(x, y) {
    let adjacent = x; // Adjacent side of the triangle
    let opposite = y; // Opposite side of the triangle
    // Calculate the angle in radians and convert to degrees
    return radiansToDegrees(Math.atan2(opposite, adjacent));
}

// Function to convert radians to degrees
function radiansToDegrees(rad) {
    if (rad < 0) {
        // Correct the negative angle by adding 360 degrees
        return (360.0 + (rad * (180 / Math.PI))).toFixed(2);
    } else {
        // Convert radians to degrees
        return (rad * (180 / Math.PI)).toFixed(2);
    }
}

// Function to convert degrees to radians
function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180); // Convert degrees to radians
}

// Function to draw a triangle based on the angle in degrees
function drawTriangle(angleDegrees) {
    // Move to the center of the circle
    ctx.moveTo(X_CIRCLE_CENTER, Y_CIRCLE_CENTER);
    // Calculate the end point of the hypotenuse using cosine
    let xEndPoint = X_CIRCLE_CENTER + RADIUS * Math.cos(degreesToRadians(angleDegrees));
    // Calculate the end point of the hypotenuse using sine
    let yEndPoint = Y_CIRCLE_CENTER + RADIUS * -(Math.sin(degreesToRadians(angleDegrees)));
    // Draw the angle in radians
    drawTextAtPoint(ctx, "Radians : " + degreesToRadians(angleDegrees).toFixed(2), 15, 85);
    // Draw the hypotenuse
    ctx.lineTo(xEndPoint, yEndPoint);
    ctx.stroke();
    // Draw the opposite side of the triangle
    ctx.moveTo(xEndPoint, yEndPoint);
    ctx.lineTo(xEndPoint, 300);
    ctx.stroke();
    // Draw the coordinates of the end point
    drawTextAtPoint(ctx, "(" + xEndPoint.toFixed(2) + "," + yEndPoint.toFixed(2) + ")", xEndPoint + 10, yEndPoint - 10);
    // Calculate the length of the hypotenuse
    let hypotenuseLength = getLineLength(X_CIRCLE_CENTER, Y_CIRCLE_CENTER, xEndPoint, yEndPoint);
    // Draw the length of the hypotenuse
    drawTextAtPoint(ctx, "Hypot L : " + hypotenuseLength.toFixed(2), 15, 105);
    // Calculate the length of the opposite side
    let oppositeLength = getLineLength(xEndPoint, yEndPoint, xEndPoint, 300);
    // Draw the length of the opposite side
    drawTextAtPoint(ctx, "Opp L : " + oppositeLength.toFixed(2), 15, 125);
}

// Function to calculate the length of a line segment
function getLineLength(x1, y1, x2, y2) {
    let xS = x2 - x1; // Calculate the difference in x-coordinates
    xS = xS * xS; // Square the difference
    let yS = y2 - y1; // Calculate the difference in y-coordinates
    yS = yS * yS; // Square the difference
    return Math.sqrt(xS + yS); // Return the square root of the sum of squares (distance formula)
}

