$(function() {
  //AOS.init();
  
  $(".menu").click(function(e) {
    $("body").toggleClass("menu-open");
    
    if ($("body").hasClass("no-scroll")) {
      $("body").removeClass("no-scroll");
    }

    setTimeout(function() {
      if ($("body").hasClass("menu-open")) {
        $("body").addClass("no-scroll");
      }
    }, 400);
  });

  $('.scroll-down').click (function() {
    $('html, body').animate({scrollTop: $('.scroll-point').offset().top }, 'slow');
    return false;
  });
	
});

function myFunction() {
  var element = document.body;
  element.classList.toggle("light-mode");
}