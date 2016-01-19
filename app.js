$(document).ready(function() {
	$("list").on("click", "button", function (event) { 

	

		for ( var i=1; i<=100; i++) {

		if ( i % 3 === 0 && i % 5 === 0) {
			$(".list").append("<p>FizzBuzz</p>");
		}

		else if (i % 3 === 0) {
			$(".list").append("<p>Fizz</p>");
		}

		else if (i % 5 === 0) {
			$(".list").append("<p>Buzz</p>")
		}

		else {
			$(".list").append("<p>i</p>")
		}



		});

	};

};