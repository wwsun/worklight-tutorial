var pagesHistory = [];
var currentPage = {};
var path = "";


function wlCommonInit(){
	
	if(WL.Client.getEnvironment() == WL.Environment.WINDOWS_PHONE_8) {
		path = "/www/default/";
	}
	
	$("#pagePort").load(path + "pages/MainPage.html", function () {
		$.getScript(path + "js/MainPage.js", function() {
			if(currentPage.init) {
				currentPage.init();
			}
		});
	});
}



