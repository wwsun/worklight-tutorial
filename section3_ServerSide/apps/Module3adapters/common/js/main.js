var busyIndicator = null;

function wlCommonInit(){
	busyIndicator = new WL.BusyIndicator();
	loadFeeds();
}

function loadFeeds(){
	busyIndicator.show();
	var invocationData = {
			adapter : 'RSSReader',
			procedure : 'getFeedsFiltered',
			parameters : []
		};
	
	WL.Client.invokeProcedure(invocationData,{
		onSuccess : loadFeedsSuccess,
		onFailure : loadFeedsFailure
	});
}

function loadFeedsSuccess(result){
	WL.Logger.debug("Feed retrieve success");
	busyIndicator.hide();
	if (result.invocationResult.Items.length>0) 
		displayFeeds(result.invocationResult.Items);
	else 
		loadFeedsFailure();
}

function loadFeedsFailure(result){
	WL.Logger.error("Feed retrieve failure");
	busyIndicator.hide();
	WL.SimpleDialog.show("Engadget Reader", "Service not available. Try again later.", 
			[{
				text : 'Reload',
				handler : WL.Client.reloadApp 
			},
			{
				text: 'Close',
				handler : function() {}
			}]
		);
}

function displayFeeds(items){
	var ul = $('#itemsList');
	for (var i = 0; i < items.length; i++) {
		var li = $('<li/>').text(items[i].title);
		var pubDate = $('<div/>', {
			'class': 'pubDate'
		}).text(items[i].pubDate);

		li.append(pubDate);
		
		ul.append(li);
	}
}