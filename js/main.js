$(function(){	

	window.onload = function(){
		window.global = new Object;
		window.global.nowSetFlag = false;
		window.global.distance = 0;
		window.global.led = new LED(100, 0.1);
		getNowLocation();
		console.log("wwwwwww");
	}

	$("#button").on("mousedown",function(){
		alert("ttt");
		getLocation($("#text").val());
	});

  getLocation = function(place){
		var url = "http://maps.googleapis.com/maps/api/geocode/json?address="+place+"&sensor=true";
		$.ajax({
			url: url
		}).done(function(data){
			if(data.status == "ZERO_RESULTS"){
				 return;
			}
			console.log(data);
			window.global.destLocationLat = data.results[0].geometry.location.lat;	
			window.global.destLocationLon = data.results[0].geometry.location.lng;	
		setInterval("getDistance()", 1000);

		}).fail(function(){
			console.log("error");
		});
	}
  getDistance = function(){
	  var now_lat = window.global.nowLocationLat;
	  var now_lon = window.global.nowLocationLon;
	  var dest_lat = window.global.destLocationLat;
	  var dest_lon = window.global.destLocationLon;

	  if(!(now_lat && now_lon && dest_lat && dest_lon)){
		  console.log(now_lat+"    "+now_lon+"    "+dest_lat+"    "+dest_lon);
		  return "non";
	  }
	  var now_location = new google.maps.LatLng(now_lat, now_lon);
	  var dest_location = new google.maps.LatLng(dest_lat, dest_lon);
	  var req = { origins: [now_location],destinations:[dest_location],travelMode: google.maps.TravelMode.DRIVING}; 
	  var disservice = new google.maps.DistanceMatrixService();
	  disservice.getDistanceMatrix(req,function(res,status){
		window.global.distance = res.rows[0].elements[0].distance.value;	
		checkLocate();
		console.log("light!!");
		
	  });
	}
});
