function getFeeds() {
	var input = {
	    method : 'get',
	    returnedContentType : 'xml',
	    path : "rss.xml"
	};
	
	
	return WL.Server.invokeHttp(input);
}

function getFeedsFiltered() {
	
	var input = {
	    method : 'get',
	    returnedContentType : 'xml',
	    path : "rss.xml",
	    transformation : {
		    type : 'xslFile',
		    xslFile : 'filtered.xsl'
	    }
	};
	
	return WL.Server.invokeHttp(input);
}