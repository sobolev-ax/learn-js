window.onload = function() {
	function hide(boolean) {
		if (!boolean) {
			console.log("hide false")
		} else {
			console.log("hide true")
		}
	}
	var images = document.getElementsByTagName('img');
	for (var i = 0; i < images.length; i++ ){
		var image = images[i];
		if (image.addEventListener) {
			image.addEventListener("click", hide, false);
		} else {
			image.attachEvent("onclick", hide);
		}
	}

}