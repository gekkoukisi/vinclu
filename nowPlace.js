$(
	if (navigator.geolocation) {
        // 現在の位置情報取得を実施
        navigator.geolocation.getCurrentPosition(
        // 位置情報取得成功時
        function (pos) { 
        	window.global.nowLocationLat = pos.coords.latitude;
        	window.global.nowLocationLon = pos.coords.longitude;
        },
        // 位置情報取得失敗時
        function (pos) {
        });
    } else {
        window.alert("本ブラウザではGeolocationが使えません");
    }
)