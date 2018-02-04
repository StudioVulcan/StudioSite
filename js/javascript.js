function ActivateSubmit(){
	// Remove disabled from submit
	document.getElementById("submit-request").disabled = false;
}

function HandleTermsChange(){
	// Go get Radio button
	var termsAndCond = document.getElementById("termsCheck1");
	
	// Subscribe to change event
	termsAndCond.addEventListener('change', ActivateSubmit);
}

// Subscribe to when the page finishes loading
document.addEventListener('DOMContentLoaded', HandleTermsChange , false);