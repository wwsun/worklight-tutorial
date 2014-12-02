/**
 * 
 */currentPage={};

currentPage.init = function() {
	WL.Logger.debug("Page2 :: init");
};

currentPage.buttonClick = function() {
	WL.Logger.debug("Page2 :: buttonClick");
	WL.SimpleDialog.show("Page2","Button on Page2 was clicked",[{text:'OK'}]);
};

currentPage.loadPage1 = function(){
	WL.Logger.debug("Page2 :: loadPage1");
	pagesHistory.push(path + "pages/Page2.html");
	$("#pagePort").load(path + "pages/Page1.html", function(){
		$.getScript(path + "js/Page1.js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
};

currentPage.back = function(){
	WL.Logger.debug("Page2 :: back");
	$("#pagePort").load(pagesHistory.pop());
};