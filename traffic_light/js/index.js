//Implement the red light using jQuery. Don't forget to add the script tags.\\

console.log('hello');
$("#stop-button").click(illuminateRed);
$("#slow-button").click(illuminateYellow);
$("#go-button").click(illuminateGreen);

function illuminateRed() {
    console.log('red');
    clearLights();
    $("#stop-light").css("background-color", "red"); 
}

function illuminateYellow() {
    clearLights();
    $("#slow-light").css("background-color", "yellow");
}

function illuminateGreen() {
	clearLights();
	$("#go-light").css("background-color", "green");
}

function clearLights() {
    $(".bulb").css("background-color", "black");
}