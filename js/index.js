(function($) {

	"use strict";
	Parse.initialize("NdkeEQmUoHZuWb4RqeuoHCwlaF1J7roQqk8KyrfG", "bDugzgWXHSOOSum0KMWNgbtQIbG1aq65KQfUl3yp");
	
	$('.saveChoreBtn').on("click", function() {
		var ChoreObject = Parse.Object.extend("Chore");
		var choreObject = new ChoreObject();
		var currentdate = new Date(); 
		var datetime = currentdate.getDate() + "/"
		                + (currentdate.getMonth()+1)  + "/" 
		                + currentdate.getFullYear() + " @ "  
		                + currentdate.getHours() + ":"  
		                + currentdate.getMinutes() + ":" 
		                + currentdate.getSeconds();
		choreObject.save({dateTime: datetime}).then(function(object) {
		  alert("yay! it worked. Date and time: " + datetime);
		});
	});

}(jQuery));