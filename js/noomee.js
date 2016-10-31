$(document).ready(function() {
	var result = {
			ampm: "",
			hour: 0,
			minute: 0
	}
	
	
	$(".form-inline").change( function() {
		selectedAmpm = $("#selectampm").find(":selected").data();
		selectedHour = $("#selectminute").find(":selected").data();
		selectedMinute = $("#selecthour").find(":selected").data();
	});
	
	

});
