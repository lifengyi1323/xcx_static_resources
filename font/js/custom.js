// 1 revolutionSliderActiver
function revolutionSliderActiver () {
	if ($('.rev_slider_wrapper #slider1').length) {
		$("#slider1").revolution({
			sliderType:"standard",
			sliderLayout:"auto",
			delay:5000,
			navigation: {
				arrows:{enable:true} 
			}, 
			gridwidth:1170,
			gridheight:770 
		});
	};
}
// 2 galleryMasonaryLayout
function galleryMasonaryLayout () {
	if ($('.img-masonary').length) {
		$('.img-masonary').isotope({
			layoutMode:'masonry'
		});
	}
}
// 3 accrodion
function accrodion () {
	if ($('.accrodion-grp').length) {
		
		$('.accrodion-grp').each(function () {
			var accrodionName = $(this).data('grp-name');
			var Self = $(this);
			Self.addClass(accrodionName);
			Self.find('.accrodion .accrodion-content').hide();
			Self.find('.accrodion.active').find('.accrodion-content').show();
			Self.find('.accrodion').each(function() {
				$(this).find('.accrodion-title').on('click', function () {
					if ($(this).parent().hasClass('active') === false ) {					
						$('.accrodion-grp.'+accrodionName).find('.accrodion').removeClass('active');
						$('.accrodion-grp.'+accrodionName).find('.accrodion').find('.accrodion-content').slideUp();
						$(this).parent().addClass('active');					
						$(this).parent().find('.accrodion-content').slideDown();	
					};
				});
			});
		});
		
	};
}

// 4 teamCarosule
function teamCarosule () {
	if ($('.team-carousel').length) {
		$('.team-carousel').owlCarousel({
		    loop: true,
		    margin: 30,
		    nav: true,
		    dots: false,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
		    autoplay: true,
		    autoplayTimeout: 3000,
		    autoplayHoverPause: true,
		    responsive: {
		        0:{
		            items:1
		        },
		        480:{
		            items:1
		        },
		        600:{
		            items:2
		        },
		        1000:{
		            items:3
		        },
		        1200:{
		            items:4
		        }
		    }
		});
	}
}
// 5 testiCarosule
function testiCarosule () {
	if ($('.testimonaials-carousel').length) {
		$('.testimonaials-carousel').owlCarousel({
		    loop: true,
		    margin: 50,
		    nav: false,
		    dots: true,
		    autoplay: true,
		    autoplayTimeout: 3000,
		    autoplayHoverPause: true,
		    responsive: {
		        0:{
		            items:1
		        },
		        480:{
		            items:1
		        },
		        600:{
		            items:1
		        },
		        1000:{
		            items:2
		        },
		        1200:{
		            items:3
		        }
		    }
		});
	}
}
// 6 CounterNumberChanger
function CounterNumberChanger () {
	var timer = $('.timer');
	if(timer.length) {
		timer.appear(function () {
			timer.countTo();
		})
	}
}
// 7 stickyHeader
function stickyHeader () {
	if ($('.stricky').length) {
		var strickyScrollPos = 100;
		if($(window).scrollTop() > strickyScrollPos) {
			$('.stricky').removeClass('fadeIn animated');
	      	$('.stricky').addClass('stricky-fixed fadeInDown animated');
		}
		else if($(this).scrollTop() <= strickyScrollPos) {
			$('.stricky').removeClass('stricky-fixed fadeInDown animated');
	      	$('.stricky').addClass('slideIn animated');
		}
	};
}
// 8 contactFormValidation
function contactFormValidation () {

	if($('.contact-form').length){
		$('.contact-form').each(function () {
			
			var cfName = $(this).attr('id');

			$('#'+cfName).validate({ // initialize the plugin
				rules: {
					name: {
						required: true
					},
					email: {
						required: true,
						email: true
					},
					message: {
						required: true
					},
					date: {
						required: true
					},
					category: {
						required: true
					},
					phone: {
						required: true
					},
					gender: {
						required: true
					},
					dateOfBirth: {
						required: true
					},
					subject: {
						required: true
					}
				},
				submitHandler: function (form) { 
					// sending value with ajax request
					$.post($(form).attr('action'), $(form).serialize(), function (response) {
						$(form).parent('div').append(response);
						$(form).find('input[type="text"]').val('');
						$(form).find('input[type="email"]').val('');
						$(form).find('textarea').val('');
					});
					return false;
				}
			});
		});
	}
}

// 9 selectInput
function selectInput () {
	if ($('.select-input').length) {
		$('.select-input').selectmenu();
	};
}
// 10 datePicker
function datePicker () {
    if ($('.date-picker').length) {
        $('.date-picker').datepicker({dateFormat: "yy-mm-dd"});
    };
}
// 12 mobileMenu
function mobileMenu () {
	if ($('.navigation .nav-footer button').length) {
		$('.navigation .nav-footer button').on('click', function () {
			$('.navigation .nav-header').slideToggle();
			$('.navigation .nav-header').find('.dropdown').children('a').append(function () {
				return '<button><i class="fa fa-bars"></i></button>';
			});
			$('.navigation .nav-header .dropdown a button').on('click', function () {
				$(this).parent().parent().children('ul.submenu').slideToggle();
				return false;
			});
		});
	};
}

// Dom Ready Function
jQuery(document).on('ready', function () {
	(function ($) {
		// add your functions
		revolutionSliderActiver();
		accrodion();
		galleryMasonaryLayout();
		teamCarosule();
		CounterNumberChanger();
		testiCarosule();
		contactFormValidation();
		selectInput();
        datePicker();
		mobileMenu();
	})(jQuery);
});
// window on scroll functino
jQuery(window).on('scroll', function () {
	(function ($) {
		// add your functions
		stickyHeader();
	})(jQuery);
});