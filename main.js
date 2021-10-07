var sidebarStatus = "-15%"

function onLoadHandler(){
	console.log("Loaded!")

	document.getElementById("fade").style.animation = "1s fadeIn forwards";
	document.getElementById("sidebar_toggle").addEventListener("click", toggle_sidebar);
	}

function toggle_sidebar() {
	if (sidebarStatus == "0%") {
		sidebarStatus = "-15%";
	}
	else {
		sidebarStatus = "0%";
	}
	
	document.getElementById("full_sidebar").style.left = sidebarStatus;
}
//git web vscode