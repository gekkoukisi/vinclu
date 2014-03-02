$(function(){
	startfunction = function() {
		setInterval("getDistance()", 1000);
	}
	checkLocate = (function() {
		window.global.led.frequencyL = 100;

		if (window.global.meter <= 1) {
			window.global.led.frequencyR = 100;
		}

		else if (window.global.meter < 2) {
			window.global.led.frequencyR = 10
		}

		else if (window.global.meter < 3) {
			window.global.led.frequencyR =8;
		}

		else if (window.global.meter < 4) {
			window.global.led.frequencyR =6;
		}

		else if (window.global.meter < 5) {
			window.global.led.frequencyR =5;
		}

		else if (window.global.meter < 6) {
			window.global.led.frequencyR =4;
		}

		else if (window.global.meter < 7) {
			window.global.led.frequencyR =3;
		}

		else if (window.global.meter < 8) {
			window.global.led.frequencyR =1;
		}

		else if (window.global.meter < 9) {
			window.global.led.frequencyR =0.5;
		}

		else {
			window.global.led.frequencyR = 0.1;
		};

		window.global.led.off();
		window.global.led.on();
	});
});
