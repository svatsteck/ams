$( document ).ready(function() {
    $("#login-btn").click(function() {
    	var $username = $("#recipient-name").val();
    	if($username === 'recruiter') {
    		window.location = "recruiter.html";
    	} else if($username === "hr") {
    		window.location = "hr.html";
    	} else {
    		window.location = "sr-management.html";
    	}
    });
    
    $("#search-btn").click(function(event) {
      event.preventDefault();
      window.location = "search-results.html";
    });
});

