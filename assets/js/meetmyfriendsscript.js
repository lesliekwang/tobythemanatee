$(document).ready(function() {
	$(".polaroid-text").hide();
	$(".polaroid#sausage").click(function() {  //jQuery function 7
		$(".polaroid-text#saus").fadeIn();
	});
	$(".polaroid#snowy").click(function() {
		$(".polaroid-text#snow").fadeIn();
	});
	$(".polaroid#captain").click(function() {
		$(".polaroid-text#cap").fadeIn();
	});
	$(".polaroid#truffles").click(function() {
		$(".polaroid-text#truff").fadeIn();
	});
	$(".polaroid").mouseleave(function() {
		$(".polaroid-text").fadeOut();
	});

});
