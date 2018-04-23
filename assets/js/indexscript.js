$(document).ready(function() {
	$("#bubble1").hide(); //jQuery function 1
	$("#bubble2").hide();
	$("#bubble3").hide();
	$("#bubble4").hide();
	$("#bubble5").hide();
	$("#toby").hover(function() {  //jQuery function 2
		$("#bubble1").fadeIn();  //jQuery function 3
		$("#bubble2").fadeIn();
		$("#bubble3").fadeIn();
		$("#bubble4").fadeIn();
		$("#bubble5").fadeIn();
	});
	$("#toby").mouseleave(function() {  //jQuery function 4
		$("#bubble1").fadeOut();  //jQuery function 5
		$("#bubble2").fadeOut();
		$("#bubble3").fadeOut();
		$("#bubble4").fadeOut();
		$("#bubble5").fadeOut();
	})
});
