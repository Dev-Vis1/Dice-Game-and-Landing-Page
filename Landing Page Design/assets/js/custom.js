// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}


/* bottom to top icon*/
// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {   
        $('#return-to-top').fadeIn(2000);
        $('#return-to-top').fadeOut(2000); 
    }
});
$('#return-to-top').click(function() {
    $('body,html').animate({
        scrollTop : 0     
    }, 500);
});

/* anchor click smooth scroll jquery */
$( 'a' ).on( 'click', function(e){
    var href = $(this).attr( 'href' );
    $( 'html, body' ).animate({
          scrollTop: $( href ).offset().top
    }, '3300' );
    e.preventDefault();
  });












