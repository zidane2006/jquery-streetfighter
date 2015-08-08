$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-hide').hide();
		$('.ryu-ready').show();
	})
	$('.ryu').mouseleave(function () {
		$('.ryu-hide').hide();
		$('.ryu-still').show();
	})
	$('.ryu').mousedown(function() {
		playhadouken();
		$('.ryu-hide').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left': '1020px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '520px');
			});
		
	})
	$('.ryu').mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});
});

/*added this code from a codepen*/
$(document).on('keydown', function(event) {
        if (event.which == 88) {
            $('.ryu-hide').hide();
            $('.ryu-cool').show();
        }
    })
       .on('keyup', function(event) {
        if (event.which == 88) {
            $('.ryu-hide').hide();
            $('.ryu-still').show();
        }
    });
/*code above from codepen */

function playhadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}