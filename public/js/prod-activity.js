'use strict';
// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	$('#datepicker').each(function(){
		$(this).datepicker();
	})
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {	
	$('.assignment a').click(moreInfo);
	$('.hideInfo #complete').click(removeAssignment);
	$('.hideInfo #remove').click(removeAssignment);

}



function moreInfo(e){
	e.preventDefault();
	var assignmentID = $(this).closest('.assignment').attr('id');
	$('#' + assignmentID + ' .hideInfo').fadeToggle();

}



function removeAssignment(){

	var completeOrRemove = $(this).attr('id');
	var numPoints = parseInt($(this).attr('title'));
	var assignmentID = $(this).closest('.assignment').attr('id');
	var target = $('#' + assignmentID);

	$('#' + assignmentID + ' .removeAssignment').hide();
	target.animate({
    	opacity: "-=1"
  	}, 300, function() {
    target.remove();
  	});

	if(completeOrRemove == "complete"){
		$.post("/removed/" + assignmentID + "/complete");
		$.post("/addPoints/" + numPoints);
		location.reload();
	}
	else{
		$.post("/removed/" + assignmentID + "/remove");
	}
}

/*
function completeAssignment(pts){
	
	console.log("clicked");
	var buttonClick = $('.hideInfo #complete');
	var assignmentID = buttonClick.closest('.assignment').attr('id');
	var target = $('#' + assignmentID);

	$('#' + assignmentID + ' .removeAssignment').hide();
	target.animate({
    	opacity: "-=1"
  	}, 300, function() {
    target.remove();
  	});
	$.post("/removed/" + assignmentID + "/complete");
	$.post("/addPoints/" + pts);
	location.reload();

}
*/