$(
	var startfunction = function() {
		setInterval("checkLocate()", 1000);
	}

	var checkLocate = (function() {
		window.global.meter = getDistance(window.global.rat, window.global.lon);

		if (window.global.meter >= 10) {
			led = new VincleLed(100, 0.1);
		};
		else if (window.global.meter < 10) {
			led = new VincleLed(100, 0.5);
		};
		else if (window.global.meter < 9) {
			led = new VincleLed(100, 1);
		};
		else if (window.global.meter < 8) {
			led = new VincleLed(100, 2);
		};
		else if (window.global.meter < 7) {
			led = new VincleLed(100, 3);
		};
		else if (window.global.meter < 6) {
			led = new VincleLed(100, 4);
		};
		else if (window.global.meter < 5) {
			led = new VincleLed(100, 5);
		};
		else if (window.global.meter < 4) {
			led = new VincleLed(100, 6);
		};
		else if (window.global.meter < 3) {
			led = new VincleLed(100, 8);
		};
		else if (window.global.meter < 2) {
			led = new VincleLed(100, 10);
		};
		else {
			led = new VincleLed(100, 100);
		};

		led.on();
	});
)