function getWeibo() {
	var input = {
			method: "get",
			path: "/2/statuses/public_timeline.json",
			parameters: {
				access_token : "2.00AoNk3BbLIh6D81fe963ef20fYtOp"
			},
			returnedContentType : "json"
	};
	var response = WL.Server.invokeHttp(input);
	return response;
}