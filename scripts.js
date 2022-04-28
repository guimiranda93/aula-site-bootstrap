$(document).scroll(function () {
	if ($(document).scrollTop() > 10) {
		$("#navbar").css("background-color", "white");
	} else {
		$("#navbar").css("background-color", "transparent");
	}
});
