function wlCommonInit(){
	/*
	 * Use of WL.Client.connect() API before any connectivity to a Worklight Server is required. 
	 * This API should be called only once, before any other WL.Client methods that communicate with the Worklight Server.
	 * Don't forget to specify and implement onSuccess and onFailure callback functions for WL.Client.connect(), e.g:
	 *    
	 *    WL.Client.connect({
	 *    		onSuccess: onConnectSuccess,
	 *    		onFailure: onConnectFailure
	 *    });
	 *     
	 */
	
	// Common initialization code goes here
	WL.App.hideSplashScreen();
	
	busy = new WL.BusyIndicator();
	displayInfo();
}

var busy;

function displayInfo() {
	var selectedValue = $("#actions").val();
	var text="";
	
	switch (selectedValue) {
		case 'language':
			//If language option is selected, get client language using WL API
			text = WL.App.getDeviceLanguage();
			break;
		case 'appEnvironment':
			//If language option is selected, get client environment using WL API
			text = WL.Client.getEnvironment();
			break;
		default:
			break;
	}

	//Update the content of html element with id="info"
	$('#info').html(text);
}

function reload() {
	busy.show();
	setTimeout(WL.Client.reloadApp(), 5000);
}

function loadWebPage() {
	WL.App.openURL("http://m.ibm.com", '_blank');
}