function wlCommonInit(){
	
	
	//$(document).ready(initMap);
	
	//binding click event
	//$("#btnWhere").bind("click", getCurrentLocation2);
}

var map = null;

function initMap() {
	$("#myMap").height($(window).height());
	map = new BMap.Map("myMap");          // 创建地图实例  
	var point = new BMap.Point(116.404, 39.915);  // 创建点坐标  
	map.centerAndZoom(point, 4);                 // 初始化地图，设置中心点坐标和地图级别  
	//map.addControl(new BMap.ZoomControl());
}

function getCurrentLocation() {
	var invocationData = {
		adapter : "GeoAdapter",
		procedure : "getGeoLocation",
		parameters : []
	};
	
	WL.Client.invokeProcedure(invocationData, {
		onSuccess: function(result) {
			var geoX = result.invocationResult.content.point.x;
			var geoY = result.invocationResult.content.point.y;
			
			WL.Logger.debug("X="+geoX+";Y="+geoY);
			
			var point = new BMap.Point(geoX, geoY);
			map.centerAndZoom(point, 8);
		}
	});
}

function getCurrentLocation2() {
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(displayLocation);
	}
}

function displayLocation(position) {
	var la = position.coords.latitude;
	var lo = position.coords.longitude;
	
	var point = new BMap.Point(lo, la);
	var marker = new BMap.Marker(point);
	map.centerAndZoom(point, 15);
	map.addOverlay(marker);
}