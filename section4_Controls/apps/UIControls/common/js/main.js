/*
*
    COPYRIGHT LICENSE: This information contains sample code provided in source code form. You may copy, modify, and distribute
    these sample programs in any form without payment to IBM® for the purposes of developing, using, marketing or distributing
    application programs conforming to the application programming interface for the operating platform for which the sample code is written.
    Notwithstanding anything to the contrary, IBM PROVIDES THE SAMPLE SOURCE CODE ON AN "AS IS" BASIS AND IBM DISCLAIMS ALL WARRANTIES,
    EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, ANY IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, SATISFACTORY QUALITY,
    FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND ANY WARRANTY OR CONDITION OF NON-INFRINGEMENT. IBM SHALL NOT BE LIABLE FOR ANY DIRECT,
    INDIRECT, INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR OPERATION OF THE SAMPLE SOURCE CODE.
    IBM HAS NO OBLIGATION TO PROVIDE MAINTENANCE, SUPPORT, UPDATES, ENHANCEMENTS OR MODIFICATIONS TO THE SAMPLE SOURCE CODE.

*/

var busyIndicator = null;

function wlCommonInit(){
	
	busyIndicator = new WL.BusyIndicator(null, {text : 'Loading...'});
	$('#BusyIndicatorStartButton').click(busyIndicatorDemo);
	$('#SimpleDialogStartButton').click(simpleDialogDemo);	
}

function busyIndicatorDemo() {
	busyIndicator.show();
	setTimeout(function() {
		busyIndicator.hide();
	}, 5000);
}

function simpleDialogDemo() {
	var dialogTitle = "CommonControls";
	var dialogText = "This is simple dialog text; take a look at the console";

	WL.SimpleDialog.show(dialogTitle, dialogText, [ {
		text : 'I am button 1',
		handler : simpleDialogButton1Click
	}, {
		text : 'I am button 2',
		handler : simpleDialogButton2Click
	}

	]);
}

function simpleDialogButton1Click() {
	WL.Logger.debug("simpleDialogButton1 Clicked");

}

function simpleDialogButton2Click() {
	WL.Logger.debug("simpleDialogButton2 Clicked");
}

