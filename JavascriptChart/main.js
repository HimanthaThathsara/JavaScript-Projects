console.log("hi..");

// // ----- DRAW PIE CHART -----

// // This is how you structure JSON data
// // var data = '{"expenditures":[{"type":"Healthcare", "percent":"8"},{"type":"Insurance", "percent":"12"},{"type":"Food", "percent":"13"},{"type":"Housing", "percent":"33"},{"type":"Transportation", "percent":"16"},{"type":"Apparel", "percent":"3"},{"type":"Entertainment", "percent":"5"},{"type":"Healthcare", "percent":"8"},{"type":"Other", "percent":"2"}]}';

// // This data is structured as an array of expenditure objects
// // like this 
// // class Expenditures {
// //     constructor(type, percent) {
// //         this.type = type,
// //         this.percent = percent;
// //     }
// // }


let IdNumber = 1;
let valueNumber = 1;
let keyNumber = 1;

function AddRow(){

    for (let i = 0; i === 0 ; i++) {
        IdNumber = IdNumber += 1;
        keyNumber = keyNumber += 1;
        valueNumber = valueNumber += 1;
        break;
    }

    // Create a new div element to hold the inputs
    const newDiv = document.createElement('div');
    newDiv.className = "InputClass";
    newDiv.id = 'INputCollecter' + IdNumber;
    
    // Create the input elements
    const keyInput = document.createElement('input');
    keyInput.type = 'text';
    keyInput.id = 'Key'+ keyNumber;
    keyInput.placeholder = "Expenditure";
    keyInput.className = 'InputForJson';
    
    const valueInput = document.createElement('input');
    valueInput.type = 'number';
    valueInput.id = 'value' + valueNumber;
    valueInput.placeholder = "Percentage";
    valueInput.className = 'InputForJson';
    
    // Append the inputs to the new div
    newDiv.appendChild(keyInput);
    newDiv.appendChild(valueInput);
    
    // Append the new div to the parent element
    const parentElement = document.getElementById('INputCollecter1');
    parentElement.appendChild(newDiv);

    // Create and append a new line break after the new div
    // const newLine = document.createElement('br');
    // parentElement.appendChild(newLine);
}


function RemoveRow(){
    const parentElement = document.getElementById('INputCollecter1');
    const lastChild = parentElement.lastChild;
    parentElement.removeChild(lastChild);
}

let json;

function CreateJson(){
    let keyArray = [];
    let valueArray = [];
    let key;
    let value;
    json = '{ "expenditures": [';

    // Get all the input elements
    const inputElements = document.getElementsByClassName('InputForJson');

    // Get the values from the input elements and store them in arrays
    for (let i = 0; i < inputElements.length; i++) {
        if (i % 2 === 0) {
            key = inputElements[i].value;
            keyArray.push(key);
        } else {
            value = inputElements[i].value;
            valueArray.push(value);
        }
    }

    // Add the key value pairs to the json string
    for (let i = 0; i < keyArray.length; i++) {
        json += '{ "type": "' + keyArray[i] + '", "percent": "' + valueArray[i] + '" }';
        if (i < keyArray.length - 1) {
            json += ',';
        }
    }

    // Close the json string
    json += ']}';

    drawChart();
    console.log(json);
}

let data;
let expenditureArray = [];
let percentArray = [];
let colorArray = [];

function drawChart(){
    data = json;
    percentArray = createPercentArray();
    percentNameArray = createPercentNameArray();
    colorArray = createRandomColorArray();
    populateArray(data);
    drawPie();
}

function populateArray(jsonData){
    let expenseArray = JSON.parse(jsonData);
    for(i = 0; i < expenseArray.expenditures.length; i++){
        let expense = expenseArray.expenditures[i];
        expenditureArray[i] = expense;
    }
}

function createPercentArray(){
    let perArr = [];
    let perArrs = expenditureArray.map((expenditure) => expenditure.percent);
    for(i = 0; i < expenditureArray.length; i++){
        perArr[i] = expenditureArray[i].percent * .02;
    }

    let sum = 0;
    for (let i = 0; i < perArrs.length; i++) {
        let Convert = perArrs[i];
        Convert = Number(Convert);
        sum += Convert;
    }

    if (sum > 100) {
        alert('The sum of the percentages is greater than 100');
        return NaN;
    }
    else{
        return perArr;
    }

}

function createPercentNameArray(){
    let perArr = [];
    for(i = 0; i < expenditureArray.length; i++){
        perArr[i] = expenditureArray[i].type /*+ ' ' + expenditureArray[i].percent + '%'*/;
    }
    return perArr;
}

function createRandomColorArray(){
    let randColorArr = [];
    for(i = 0; i < expenditureArray.length; i++){
        randColorArr[i] = '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
    return randColorArr;
}

function drawPie(){
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    let startAngle = Math.PI/2;
    let endAngle = Math.PI/2;

    for(i = 0; i < percentArray.length; i++){
        startAngle = endAngle;
        endAngle = endAngle + (percentArray[i] * Math.PI);
        drawSlice(context, 300, 200, 150, startAngle, endAngle, colorArray[i]);
        drawSliceText(context, 300, 200, 150, startAngle, endAngle, percentNameArray[i]);
        
    }

    // for(i = 0; i < percentNameArray.length; i++){
    //     startAngle = endAngle;
    //     endAngle = endAngle + (percentArray[i] * Math.PI);
    //     drawSliceText(context, 300, 200, 150, startAngle, endAngle, percentNameArray[i]);
    // }
}

function drawSlice(ctx, sliceCenterX, sliceCenterY, radius, startAngle, endAngle, color){
    ctx.fillStyle = color;
    ctx.beginPath();
    let medianAngle = (startAngle + endAngle) / 2;
    xOffset = Math.cos(medianAngle) * 10;
    yOffset = Math.sin(medianAngle) * 10;
    ctx.moveTo(sliceCenterX + xOffset, sliceCenterY + yOffset);
    ctx.arc(sliceCenterX + xOffset, sliceCenterY + yOffset, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fill();
}

function drawSliceText(ctx, sliceCenterX, sliceCenterY, radius, startAngle, endAngle, percentText){
    let textX = sliceCenterX + Math.cos((startAngle + endAngle)/2) * radius;
    let textY = sliceCenterY + Math.sin((startAngle + endAngle)/2) * radius;
    ctx.fillStyle = 'black';
    ctx.font = '15px Calibri';
    ctx.fillText(percentText, textX, textY);
}


console.log(percentArray);