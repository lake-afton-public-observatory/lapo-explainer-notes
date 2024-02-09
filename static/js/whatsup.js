
	var bodyID = document.getElementsByTagName("body")[0];
	bodyID.setAttribute("onload", "showWhatsUp();");

	function showWhatsUp() {
        // if ( window.location.hostname != "lake-afton-explainer-notes.readthedocs.io")
		// { 
			document.getElementById("whatsup").innerHTML = 
			"<span style='float:right;'>-- <a href='' onclick='goWhatsUp()'>what's up?</a> --</span>"; 
		// }
	}

	function goWhatsUp() {
        window.open('/images/whats-up.html?name=' + objectName + 
        '&desc=' + objectDesc + '&image=' + objectImage, 
        'Whats-Up', 
        'fullscreen=1,toolbar=0,location=0,menubar=0,scrollbars=0,status=0,titlebar=0'); 
        return false;
	}
