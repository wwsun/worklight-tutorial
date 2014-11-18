/**
 * 
 */

currentPage = {};

currentPage.init = function() {
	WL.Logger.debug("Page1 :: init");
};

currentPage.buttonClick = function() {
	WL.Logger.debug("Page1 :: buttonClick");
	WL.SimpleDialog.show("Page1","Button on Page1 was clicked",[{text:'OK'}]);
};

currentPage.insertFragment = function() {
	WL.Logger.debug("Page1 :: insertFragment");
	$("#FragmentsDiv").load(path + "pages/fragment.html");
};

currentPage.back = function(){
	WL.Logger.debug("Page1 :: back");
	$("#pagePort").load(pagesHistory.pop());
};