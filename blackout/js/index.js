$(document).ready(readyFunction);

function readyFunction() {

	var lightStatus = "off"
	$("#light-switch").click(toggleLights);

	function toggleLights() {

		if (lightStatus === "off") {

			lightStatus = "on";
			
			$("body").addClass("light-on");
			$("body").removeClass("light-off");

			$("#switch-label").text("off");
		}
		else {
			lightStatus = "off";

			$("body").addClass("light-off");
			$("body").removeClass("light-on");

			$("#switch-label").text("on");
		}

	}


}