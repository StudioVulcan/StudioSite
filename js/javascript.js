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

function HandleFindTextbox(){
	$(".find-me-section .custom-radio").on("click",function(){
		// Get the radio buttons
		var radio = $(this).find('input');
		// Check to see if the radio button is right
		if(radio.val() === "Twitchtv" || radio.val() === "Other" ){
			$("#find-textbox").slideDown();
		} else{
			$("#find-textbox input").val("");
			$("#find-textbox").slideUp();
		}
	});
}

// Bind all events 
function BindAllEvents(){
	HandleTermsChange();
	HandleFindTextbox();
}

// Subscribe to when the page finishes loading
document.addEventListener('DOMContentLoaded', BindAllEvents , false);