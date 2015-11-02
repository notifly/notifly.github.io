var POLL_PERIOD = 1000; // in milliseconds

$( document ).ready(function() {
	var data = 6;
	setInterval(function () {cuteEffect();}, POLL_PERIOD);

	function cuteEffect() {
		if(data % 10 > 5) {
			$("#drawing").css("background-color", "red");
		} else {
			$("#drawing").css("background-color", "limegreen");
		}
		data++;
	}
});
