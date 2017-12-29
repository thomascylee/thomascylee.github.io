$(document).ready(function(){
    // Navigation Bar collapse in mobile
    $('#navbarNav').click(function(){
        $('#navbarNav').collapse('hide')
    });


    // Smooth transition among sections
    $('.animation-box').click(function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $('#expertise').offset().top
        },'slow');
    })

    // Using arrow down button to transit to 'Expertise' section
    $("nav").find("a").click(function(e) {
        e.preventDefault();
        var section = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section).offset().top
        },'slow');
    });

    // Work experience animation with tracing function
    $(window).on('scroll', function(){
        $('.experience-item').each(function(){
            if( $(this).offset().top <= $(window).scrollTop()+$(window).height()* 0.65 && $(this).hasClass('is-hidden') ) {
                $(this).removeClass('is-hidden');
                $(this).find('.experience-content').addClass('transition-in');
                $(this).find('.circle-list').addClass('bounce-in');
                
            }

            if( $(this).offset().top <= $(window).scrollTop()+$(window).height()* 0.65){
                $('.experience-item').find('.circle-list').css('background','pink');
                $(this).find('.circle-list').css('background','#F23D90');
            }

            if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.4){
                $('.experience-content').removeClass('tracing');
                $(this).find('.experience-content').addClass('tracing');
            }
        });

        // Different tracing in mobile version
        if ($('.experience-item').offset().top > $(window).scrollTop()+$(window).height()){
            $('.experience-item').addClass('is-hidden');
            $('.experience-item').find('.experience-content').removeClass('transition-in');
            $('.experience-item').find('.circle-list').removeClass('bounce-in');
        }
    });

    // Fadein animation for section 'Expertise'
    $(window).on('scroll',function(){
        $('.icon-box').each(function(){
            if ($(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.9)
                $(this).removeClass('is-hidden').addClass('fadein');
        })
    })

    typingEffect();
})

// typing and deleting effect
const words = ["I love Innovation.", "I'm Web Developer.", "I do Business Development."];
let i = 0;
let timer;

function typingEffect() {
	let word = words[i].split("");
	function loopTyping() {
		if (word.length > 0) {
			document.getElementById('word').innerHTML += word.shift();
		} else {
			clearTimeout(timer);
			deletingEffect();
			return false;
		};
		timer = setTimeout(loopTyping, 300);
	};
	loopTyping();
};

function deletingEffect() {
	let word = words[i].split("");
	function loopDeleting() {
		if (word.length > 0) {
			word.pop();
			document.getElementById('word').innerHTML = word.join("");
		} else {
			if (words.length > (i + 1)) {
				i++;
			} else {
				i = 0;
			};
			clearTimeout(timer);
			typingEffect();
			return false;
		};
		timer = setTimeout(loopDeleting, 50);
	};
	loopDeleting();
};

