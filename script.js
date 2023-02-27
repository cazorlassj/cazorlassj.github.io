$(document).ready(function(){
  var aboveHeight = $('nav').outerHeight();
  
  $(window).scroll(function(){
       if ($(window).scrollTop() > aboveHeight){

            $('nav').addClass('fixed').css('top','0').next().css('padding-top','20px');

       } else {
           $('nav').removeClass('fixed').next().css('padding-top','0');
      }
  });
  
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
        window.location.hash = hash;
      });
    }
  });
});
