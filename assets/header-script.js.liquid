(function($) {
	$(document).ready(function(){
	 
	 
		// MEGAMENU =================================================================================================
		var mobFlag = 0;

		megamenuToggle = function() {
			if ( $(window).width() > 1199 ) {
				$('#megamenu, .menu-user').removeClass('megamenu_mobile').addClass('megamenu_desktop');

				$('#megamenu_level__1, #megamenu-links').superfish();

				$('#megamenu_mobile_toggle, .megamenu_trigger').off('.mobileMenu').removeClass('off active');

				$('.menu-content, .megamenu_mobile_close,#megamenu_mobile_toggle, #megamenu-links').removeClass('on');
				
                mobFlag = 0;
				
				turnMenuDropdownSide();
			}
			else {
				// $('.menu-content, .megamenu_mobile_close').hide();
				$('#megamenu, .menu-user').removeClass('megamenu_desktop').addClass('megamenu_mobile');
				$('#megamenu_level__1, #megamenu-links').superfish('destroy');

				if ( mobFlag == 0 ) {
					menuMobile();
					mobFlag = 1;
				}
			}
		};

		menuMobile = function() {
   
			$('.megamenu_mobile .megamenu_trigger').each(function(){
				$(this).parent('a.level_1__link').replaceWith(function() {
					return '<span class="level_1__link link-trigger">' + $(this).html() + '</span>';
				});
			});
			
			$('#megamenu_mobile_toggle').on('click.mobileMenu', function(){
				$(this).toggleClass('on');
				$('.menu-content, .megamenu_mobile_close').show().toggleClass('on');
				if ($(this).hasClass('on')){
					$('html, body').css({'overflow': 'hidden', 'position':'fixed', 'top': '0', 'left': '0', 'right': '0'});
				} else {
					$('html, body').removeAttr('style');
				}
			});
			
		
			$('.megamenu_mobile .megamenu_trigger').on('click.mobileMenu', function() {
                $('.megamenu_mobile .droped_linklist').superfish();
                $(this).toggleClass('active');
                var targetMenu = '#' + $(this).data('submenu');
				$(targetMenu).toggle().toggleClass('open-menu');
				
				var back_link = $(targetMenu).find('li.js-back_link');
				$(back_link).on('click', function() {
					$(targetMenu).hide().removeClass('open-menu');
					$('.megamenu_mobile .megamenu_trigger').removeClass('active');
                    $('.megamenu_mobile .droped_linklist').superfish('destroy');
				});
				
				return false;
			});
			
			
			
			$('.megamenu_mobile_close').on('click', function() {
				$('.menu-content, .megamenu_mobile_close, #megamenu_mobile_toggle').removeClass('on');
				$('html, body').css({'overflow': 'auto', 'position':'static'});
				
				$('.megamenu_mobile .is-megamenu, .megamenu_mobile .is-simplemenu').each(function(){
					$(this).hide().removeClass('open-menu');
				});
				
                $('.megamenu_mobile .droped_linklist').superfish('destroy');
				
				$('.megamenu_mobile .megamenu_trigger').each(function(){
					$(this).removeClass('active');
				});
			});
			
		};
		
		

		// WATCH MENU DROP SIDE   ====================================================================================
		turnMenuDropdownSide = function() {
			$('#megamenu .is-simplemenu').each(function(i){
				if ( ($(this).offset().left + 470) > $(window).width() ){
					$(this).find('.droped_linklist').addClass('left_side');
				}
			});
		};

		// STICKY MENU  ==============================================================================================
		stickyHeader = function() {

			var target = $('.stickUpHeader');
			var pseudo = $('#pseudo_sticky_block');
			var stick_class = 'megamenu_stuck';
			$('body .megamenu_stuck').siblings().wrap('<div class="container">');
            $('#megamenu_level__1, #megamenu-links').superfish('destroy');
            $('#megamenu_level__1, #megamenu-links').superfish();
            
			$(window).on('load scroll resize', function() {
				
				if ( $(window).width() > 1199 ) {
					var scrolledValue = parseInt( $(window).scrollTop() );
					var offsetValue = parseInt( pseudo.offset().top );
						
					if ( scrolledValue > offsetValue ) {
						target.addClass( stick_class );
					}
					else {
						target.removeClass( stick_class );
					}
				}
				else {
					target.remove();
				}
			});
			
			
			$(window).on('load', function() {
				setTimeout(function(){
					$(window).trigger('scroll')
				}, 180 );
			});
		};

		stickyHeader();
		megamenuToggle();
		
		// CART TOGGLE  ===========================================================================================
		var headerCartWrapper = $('header .cart_content_wrap');
		
		$('.js_cart_link_toggle').on('click', function(e){
			if ( headerCartWrapper.hasClass('open') ){
				headerCartWrapper.removeClass('open');
				$(this).removeClass('open');
				$('html, body').removeAttr('style');
			} else {
				headerCartWrapper.addClass('open');
				$(this).addClass('open');
				$('html, body').css({'overflow': 'hidden', 'position':'fixed', 'top': '0', 'left': '0', 'right': '0'});
			}
		});
		
		$('.js_cart_close').on('click', function(e){
			headerCartWrapper.removeClass('open');
			$('.js_cart_link_toggle').removeClass('open');
			$('html, body').removeAttr('style');
		});
		


		// SEARCH TOGGLE  ===========================================================================================
		var headerSearchForm = $('header .search_form_wrap');
		
		(function($) {
			$.fn.clickSearchToggle = function(func1, func2) {
				var funcs = [func1, func2];
				this.data('toggleclicked', 0);
				this.click(function() {
					var data = $(this).data();
					var tc = data.toggleclicked;
					$.proxy(funcs[tc], this)();
					data.toggleclicked = (tc + 1) % 2;
				});
				return this;
			};
		}(jQuery));
		
		function searchPopup() {
			if ( headerSearchForm.hasClass('open') ){
				headerSearchForm.removeClass('open');
				$(this).removeClass('open');
			} else {
				headerSearchForm.addClass('open');
				$(this).addClass('open');
			}
		}
		
		function cleanSearchPopup() {
			headerSearchForm.removeClass('open');
			$('.search_toggle').removeClass('open');
			$('.icon-search-reset').trigger('click');
			$('.icon-search-reset').removeClass('active');
			$('[data-search]').removeClass('active').html('');
		}
		
		$('.search_toggle').clickSearchToggle(function() {
				searchPopup();
			},
			function() {
				searchPopup();
		});
		
		$('.search_form_overlay, .search_form_close').on('click',function () {
			cleanSearchPopup();
		});
		
		// DATA TARGET ATTRIBUTE
		$('[data-target]').on('click', function(){
			const targetSelector = this.getAttribute('data-target');
			$(this).toggleClass('active');
			$(targetSelector).toggleClass('active');
		});

		// FOOTER NEWSLETTER FORM
		$('.footer_newsletter_form').each(function (){   
			$(this).on('submit', function(e){
				var formCookie = $(this).attr('class');
				$.cookie('footerformSended', formCookie);
			});
		});
		
		if( document.location.href.indexOf('?customer_posted=true') > 0 && $.cookie('footerformSended') == 'footer_newsletter_form') {
			$('.footer_newsletter_form .form_wrapper').hide();
			$('.footer_newsletter_form .alert-success').show();
		}
		
	
		
	});
})(jQuery);

function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1);
		if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
	}
	return "";
}


