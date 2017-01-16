
$(document).ready(function() {

  console.log("hire me! im fun to work with and I love beautiful things! :)");

  // $(".fade").hide(0).delay(500).fadeIn(3000);
  $('.fadeOnLoad').fadeIn('slow');

    AOS.init({
          offset: 50,
          duration: 400,
          easing: 'ease-in-sine',
          delay: 100,
        });
});
