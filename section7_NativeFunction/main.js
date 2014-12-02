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
