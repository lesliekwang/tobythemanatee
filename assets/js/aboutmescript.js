$(document).ready(function() {
	$("#nani").hide();
	$("#happytoby").hover(function(){
		$("#nani").show();  //jQuery function 6
	});
	$("#happytoby").mouseleave(function() {
		$("#nani").fadeOut();
	});
});