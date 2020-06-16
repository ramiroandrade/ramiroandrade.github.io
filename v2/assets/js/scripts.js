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

jQuery(document).ready(function($){
	var contentSections = $('.cd-section'),
		navigationItems = $('#cd-vertical-nav a');

	updateNavigation();
	$(window).on('scroll', function(){
		updateNavigation();
	});

	//smooth scroll to the section
	navigationItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });
    //smooth scroll to second section
    $('.cd-scroll-down').on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

	function updateNavigation() {
		contentSections.each(function(){
			$this = $(this);
			var activeSection = $('#cd-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
			if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
				navigationItems.eq(activeSection).addClass('is-selected');
			}else {
				navigationItems.eq(activeSection).removeClass('is-selected');
			}
		});
	}

	function smoothScroll(target) {
        $('body,html').animate(
        	{'scrollTop':target.offset().top},
        	600
        );
	}
});