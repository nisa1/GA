$(document).ready(readyFunction);

function readyFunction() {
	console.log("hello!");


	$("#submit").click(compare);

	function compare() {

		var a = Number($("#a").val());
		var b = Number($("#b").val());
console.log("a: " + a);
console.log($("#b").val());
        
		if (a < b) {
			$("#comparison").text("<");
			console.log('b is greater');
		}
		else if (a > b) {
			$("#comparison").text(">");
			console.log("a is greater");
		}
		else if ( a === b) {
			$("#comparison").text("===");
			console.log("they're equal!");
		}
		else {
			$("#comparison").text("can't compare");
		}

	}

}