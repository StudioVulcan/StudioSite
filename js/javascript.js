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

function HandleFileListInput(){
	$('#chooseFileLine').on("change", function(){
		$('.file-list').empty();
		for (const iterator of this.files) {
			let listItem = $("<li class='list-group-item'><span>" + iterator.name + "</span></li>");
			listItem.prepend("<img class='file-thumbnail' src=''/>");
			$('.file-list').append(listItem);
			var reader = new FileReader();
			reader.onload = function(e) {
				listItem.find('img').attr('src', e.target.result);
			};
			reader.readAsDataURL(iterator);
		}
	});
}

// Bind all events 
function BindAllEvents(){
	HandleTermsChange();
	HandleFindTextbox();
	HandleFileListInput();
}

// Subscribe to when the page finishes loading
document.addEventListener('DOMContentLoaded', BindAllEvents , false);