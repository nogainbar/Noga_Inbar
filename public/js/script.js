
$(document).ready(function() {

  console.log("Contact me if you want to chat! im fun to work with, I love beautiful things and I am always up for an interesting collaboration! :)");
  console.log("noga.inbar@gmail.com");

  // nav colour change
  $(window).scroll(function() {

         var height = $('.wrapperNav').height();
         var scrollTop = $(window).scrollTop();

         if (scrollTop >= height - 100) {
             $('.landingNav').addClass('solid-nav');
             console.log('yo!');
             $('.landing_nav_items').addClass('items_colour_change');
         } else {
             $('.landingNav').removeClass('solid-nav');
             $('.landing_nav_items').removeClass('items_colour_change');
         }

     });

    //  fade effect of projects

  // $(".fade").hide(0).delay(500).fadeIn(3000);
  $('.fadeOnLoad').fadeIn('slow');

    AOS.init({
          offset: 50,
          duration: 400,
          easing: 'ease-in-sine',
          delay: 100,
        });

    // scroll to top button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

});
