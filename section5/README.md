Section 4: Invoke Sina Weibo API
==================

###Overview

In this section, we try to integrate with Sina Weibo API in our application. To begin with, you should apply a sina weio developer account in [open.weibo.com ](http://open.weibo.com). 

As we just use the API in our test environment, the REST API should be good enough for us. Before we use it, after we get the app_key, we should have the access token for the beginning of OAuth 2.0. OAuth 2.0 will be easy and helpful for us to invoke the Sina Weibo REST API.

The following tips should be referenced by invoking Sina Weibo REST API:

###Tips:

1. Create your `adapter` in IBM Worklight, named as `WeiboAdapter`
2. Modify the `WeiboAdapter.xml` file, especially the section of  `Connection Policy`
	
		Protocol: https
		Domain: api.weibo.com
		Port: 443

3. Add a procedure name `getWeibo`, and add the codes in `WeiboAdapter-impl.js`

		function getWeibo() {
			var input = {
					method: "get",
					path: "/2/statuses/public_timeline.json",
					parameters: {
						access_token : "YOUR ACCESS TOKEN"
					},
					returnedContentType : "json"
			};
			var response = WL.Server.invokeHttp(input);
			return response;
		}	

4. Test your codes using Worklight

###References

1. Sina Weibo OAuth 2.0 Introduction: http://open.weibo.com/wiki/%E6%8E%88%E6%9D%83%E6%9C%BA%E5%88%B6%E8%AF%B4%E6%98%8E
2. OAuth 2.0 Specification: http://tools.ietf.org/html/rfc6749