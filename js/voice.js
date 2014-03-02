$(function(){	
	window.onload = function(){
		try{
			window.global = new Object;
			window.global.led = new LED(100, 0.1);
			window.global.led.on();
		}catch(e){
			alert(e);
		}
	}
});
