Section 4: Invoke Baidu Map API
==================

###Overview

In this section, we try to integrate with Baidu Map API in our application. To begin with, you should apply a baidu map developer account in [developer.baidu.com ](http://developer.baidu.com/map/index.php). 

###Tips

1. Adding the baidu map script tag in your page: 


		<script src="http://api.map.baidu.com/api?v=2.0&ak=YOUR_API_KEY"></script>

2. Add a div with the id "map-container"

		<div id="map-container">

		</div>

3. Init in main.js

		wbMap = new BMap.Map("map-container");
		defaultPoint = new BMap.Point(118.825438, 31.889814);

		function initMap(initPoint) {
			$('#map-container').height($(window).height() - 60 );	
			wbMap.centerAndZoom(initPoint,16);
		}

		function wlCommonInit(){
			initMap(defaultPoint);
		}