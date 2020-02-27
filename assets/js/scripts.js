$(function() {
  AOS.init();
  
  $(".menu").click(function(e) {
    // $(".menu__content").toggleClass("hide");
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
	
});