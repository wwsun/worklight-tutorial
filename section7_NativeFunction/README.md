Section 4: Invoking Native Function
==================

###Tips

1. Worklight integrate with Apache Cordova framework, which used to access native mobile device features, and even execute native code by using JavaScript.
2. This tutorial will show you how to invoke device camera in worklight hybrid applications.


###Steps
1. Adding the following html codes to your file:

		<button id="btnPhoto" data-corners="true" data-icon="video">Invoking Camera</button>
		<img id="myImage" src="" />

2. Adding a Android environment for your project
3. Adding the following codes in your main.js of Android folder, like `apps/MODULE_NAME/android/js/main.js`

		// This method is invoked after loading the main HTML and successful initialization of the Worklight runtime.
		function wlEnvInit(){
		    wlCommonInit();
		    // Environment initialization code goes here
		    $("#btnPhoto").bind("click", takePicture);
		}
		
		//take the picture
		function takePicture(){
			navigator.camera.getPicture(
			// Takes a photo using the camera or retrieves a photo from the device's album (image returned as the URI of an image file).
		
			// Success
			function onSuccess(imageURI) {
				// imageURI is the URI of an image file.
				// Typical usage:
				var image = document.getElementById("myImage");
				image.src = imageURI;
				
			},
			// Failure
			function onError(message) {
				// Put here error handling code
			},
			// Options (optional argument) 
			{
				quality : 75,
				destinationType : navigator.camera.DestinationType.FILE_URI,
				sourceType : navigator.camera.PictureSourceType.CAMERA,
				allowEdit : true,
				encodingType : Camera.EncodingType.JPEG,
				targetWidth : 400,
				targetHeight : 400,
				popoverOptions : CameraPopoverOptions,
				saveToPhotoAlbum : true,
				correctOrientation : true,
				cameraDirection : Camera.Direction.BACK
			});
		}
