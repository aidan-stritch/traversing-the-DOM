$(document).ready(function() {
 

 	$("#stream1_btn").on("click", function() {
 		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});


	/*example of traversing up/down the DOM*/
	$("p").click(function(){
		$(this).children("a").css("background-color", "yellow"); 
		/* returns all the <a> child elements that are within this paragraph*/
	});
	
	/*example of traversing sideways in the DOM*/
	$(".bottom_button").click(function(){
		$(this).prev().slideToggle('slow');
		/*Toggle the visibility of the paragraph when a button is clicked*/
	});
	
	/*example of traversing sideways in the DOM (uses sidewaysExample.html)*/
	$("img").click(function() {
		$(this).next().children("p").slideDown();
		/*Open the paragraph once the image is clicked*/
	});
	
}); 
