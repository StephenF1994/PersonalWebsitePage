
$(document).ready(function(){





$('.Drop-Down-Button').on('click	', function(e){							//When a module title button is clicked
	e.preventDefault();														//Prevent the default button purpose


	if($(this).next('.Drop-Down-Content').is(':visible')){					//If the content div of that button is visible
			$(this).next('.Drop-Down-Content').slideUp(300);				//Slide that div up
		}
		else{
			$(this).next('.Drop-Down-Content').slideDown(300);				//otherwise slide that content div down
		}
	

	//$(this).next('.Drop-Down-Content').slideDown(300);
	//$('.Drop-Down-Content').load('modules.html ' + '#' + event.target.id);	//Code for loading them with ajax, delay was too long


			
	$('.Drop-Down-Button').each( function() {
		$('.Drop-Down-Button').css('backgroundColor', '#e1e8f0');			//Each button colour value gets reset to the starting colour when any button is clicked

	})
	$(this).css('backgroundColor', '#c6e1ec');								//Then get the button which was clicked and change it to light blue


})


$("li").on('click', function(e) {											//When a list item is clicked
	var linkdestination = e.target.id;										//Get its id and store it in linkdestination var
	
	switch(linkdestination){												//Compare the value of the var in a switch statement
		case 'About':  														//If it is 'About'
		$('html,body').animate({											//Scroll to the top of the nav div slowly
        scrollTop: $("nav").offset().top},
        'slow');
        break;

        case 'Education': 													//If 'Education' is the value
        $('html,body').animate({											//Scroll to the top of EducationSection div
        scrollTop: $(".EducationSection").offset().top},
        'slow');
        break;

        case 'contact': 													//If value is contact or contactTwo(linkedin and github link go to same place)
        case 'contactTwo':
        $('html,body').animate({											//Scroll to the top of the contactSection div
        scrollTop: $("#ContactSection").offset().top},
        'slow');
        break;
		}


    });
})

			


