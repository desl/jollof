$(document).ready(function(){


	$('div.buttons').on('click','.btn',function(e){

		if ($(e.target).hasClass('btn-danger')){
			alert('Correct!\nThat\'s Not Jollof!');

			let $score = $('.correct-answer');
			$score.text(parseInt($score.text())+1);

		}

		if ($(e.target).hasClass('btn-success')){
			alert('Incorrect!\nThat\'s Not Jollof');

			let $score = $('.incorrect-answer');
			$score.text(parseInt($score.text())+1);
		}

		//reload the image!
		$("img").attr("src", "https://loremflickr.com/400/240/food")
	});

});
