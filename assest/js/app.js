$(document).ready(function () {
 
        //Calculate the height of <nav>
        //Use outerHeight() instead of height() if have padding
	var navHeight = $('nav').outerHeight();
  
 
	//when scroll
	$(window).scroll(function () {
 
	        //if scrolled down more than the header’s height
		if ($(window).scrollTop() > navHeight) {
 
	        // if yes, add “fixed” class to the <nav>
	        // add padding top to the #content 
               // (value is same as the height of the nav)
			$('nav').addClass('fixed');
			$('#nToggle').removeClass('active');
      
 
		} else {
 
	        // when scroll up or less than aboveHeight,
               // remove the “fixed” class, and the padding-top
			$('nav').removeClass('fixed');
			
		}
	});
    //when nav icon is clicked if the menu is active remove class active otherwise add class active to nToggle.
    $('#mobileNavIcon').click(function () {
        
		$('#nToggle').toggleClass('active');
	});
    $('.fa-caret-down').click(function () {
		
		$('#dropdown').toggleClass('active');
                    
	});
	
});