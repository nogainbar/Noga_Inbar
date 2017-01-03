
$(document).ready(function() {

  console.log("hire me! im fun to work with and I love beautiful things! :)");

  // $(".fade").hide(0).delay(500).fadeIn(3000);
  $('.fadeOnLoad').fadeIn('slow');

    AOS.init({
          offset: 400,
          duration: 500,
          easing: 'ease-in-sine',
          delay: 100,
        });
});
