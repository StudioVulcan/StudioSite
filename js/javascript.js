document.addEventListener('DOMContentLoaded', function(){ 
	var termsAndCond = document.getElementById("termsCheck1");
	
	termsAndCond.addEventListener('change', function(){
		document.getElementById("submit-request").disabled = false;
	});
}, false);