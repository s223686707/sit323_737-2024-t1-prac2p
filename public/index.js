// Main Function
function colorCircle(whiteColor) {
    var changeColor = getRandomColor(whiteColor)
    console.log(changeColor); 
    const element = document.getElementById("ID");
    element.style = `background-color:${changeColor}`;
}

// Utility Function
function getRandomColor(whiteColor){
    var maxVal = whiteColor;
    var randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber); // conversion from hex to int
    randomNumber = randomNumber.toString(16); // convert back to hex format
    let randColor = randomNumber.padStart(6, 0); // Padding   
    return `#${randColor.toUpperCase()}` 
}