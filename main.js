// Navbar Icon 

$(document).ready(function(){
    $('#menu').click(function(){
        $('.navbar-menu').toggleClass('active');
    })
})

$(document).ready(function(){
    $('.navbar-menu li').click(function(){
        $('.navbar-menu').toggleClass('active');
    })
})


// Photo Album with Pagination 
var slideIndex = 1;

$(document).ready(function() {
    $('.album .next-arrow').click(function() {
        if (slideIndex < $('.album img').length){
            slideIndex++;
            $('.album img').hide();
            $('.album img').eq(slideIndex-1).show();
            $('.pagination li').removeClass('active');
            $('.pagination li').eq(slideIndex-1).addClass('active');
            $('.album .previous-arrow').show();
        }

        if (slideIndex == $('.album img').length) {$('.album .previous-arrow').show() && $('.album .next-arrow').hide()}
        else {$('.album .previous-arrow').show() && $('.album .next-arrow').show()}
    });
});

$(document).ready(function() {
    $('.album .previous-arrow').click(function() {
        if (slideIndex > 1){
            slideIndex--;
            $('.album img').hide();
            $('.album img').eq(slideIndex-1).show();
            $('.pagination li').removeClass('active');
            $('.pagination li').eq(slideIndex-1).addClass('active');
        }

        if (slideIndex == 1) {$('.album .previous-arrow').hide() && $('.album .next-arrow').show()}
        else {$('.album .previous-arrow').show() && $('.album .next-arrow').show()}
    });
});

$(document).ready(function() {
    $('.pagination li').click(function() {
        slideIndex = $(this).index() + 1;

        $('.album img').hide();
        $('.album img').eq(slideIndex-1).show();

        $('.pagination li').removeClass('active');
        $('.pagination li').eq(slideIndex-1).addClass('active');

        if (slideIndex == 1) {$('.album .previous-arrow').hide() && $('.album .next-arrow').show()}
        else if (slideIndex == $('.album img').length) {$('.album .previous-arrow').show() && $('.album .next-arrow').hide()}
        else {$('.album .previous-arrow').show() && $('.album .next-arrow').show()}
    });
});

