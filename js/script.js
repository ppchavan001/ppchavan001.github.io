jQuery(function ($) { "use strict";
	
	/* ========================================================================= */
	/*	Page Preloader
	/* ========================================================================= */



	/* ========================================================================= */
	/*	Post image slider
	/* ========================================================================= */
	
	$("#post-thumb, #gallery-post").slick({
		infinite: true,
		arrows:false,
		autoplay: true,
  		autoplaySpeed: 4000
		
	});
	
	$("#features").slick({
		infinite: true,
		arrows:false,
		autoplay: true,
  		autoplaySpeed: 4000
	});


	/* ========================================================================= */
	/*	Menu item highlighting
	/* ========================================================================= */


	$("#navigation").sticky({
		topSpacing : 0
	});
	

	/* ========================================================================= */
	/*	Magnific popup
	/* =========================================================================  */
	$('.image-popup').magnificPopup({
    type: 'image',
    removalDelay: 160, //delay removal by X to allow out-animation
    callbacks: {
        beforeOpen: function () {
            // just a hack that adds mfp-anim class to markup
            this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
            this.st.mainClass = this.st.el.attr('data-effect');
        }
    },
    closeOnContentClick: true,
    midClick: true,
    fixedContentPos: false,
    fixedBgPos: true
});
	/* ========================================================================= */
	/*	Portfolio Filtering Hook
	/* =========================================================================  */

  	var mixer = mixitup('.portfolio-items-wrapper');
	
	/* ========================================================================= */
	/*	Testimonial Carousel
	/* =========================================================================  */
 
	//Init the carousel
	$("#testimonials").slick({
		infinite: true,
		arrows:false,
		autoplay: true,
  		autoplaySpeed: 4000
	});


/*************************  text ***********************/
var TxtRotate = function(el, toRotate, period) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 10) || 2000;
	this.txt = '';
	this.tick();
	this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
	var i = this.loopNum % this.toRotate.length;
	var fullTxt = this.toRotate[i];
  
	if (this.isDeleting) {
	  this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
	  this.txt = fullTxt.substring(0, this.txt.length + 1);
	}
  
	this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
	var that = this;
	var delta = 300 - Math.random() * 100;
  
	if (this.isDeleting) { delta /= 2; }
  
	if (!this.isDeleting && this.txt === fullTxt) {
	  delta = this.period;
	  this.isDeleting = true;
	} else if (this.isDeleting && this.txt === '') {
	  this.isDeleting = false;
	  this.loopNum++;
	  delta = 500;
	}
  
	setTimeout(function() {
	  that.tick();
	}, delta);
  };
  
  window.onload = function() {
	var elements = document.getElementsByClassName('txt-rotate');
	for (var i=0; i<elements.length; i++) {
	  var toRotate = elements[i].getAttribute('data-rotate');
	  var period = elements[i].getAttribute('data-period');
	  if (toRotate) {
		new TxtRotate(elements[i], JSON.parse(toRotate), period);
	  }
	}
	// INJECT CSS
	var css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
	document.body.appendChild(css);
	document.getElementById('preloader').style.display = 'none';
  };


/*=================================================================
  Header Setup
==================================================================*/

	anime.timeline({loop: true})
	.add({
	  targets: '.ml8 .circle-white',
	  scale: [0, 3],
	  opacity: [1, 0],
	  easing: "easeInOutExpo",
	  rotateZ: 360,
	  duration: 1100
	}).add({
	  targets: '.ml8 .circle-container',
	  scale: [0, 1],
	  duration: 1100,
	  easing: "easeInOutExpo",
	  offset: '-=1000'
	}).add({
	  targets: '.ml8 .circle-dark',
	  scale: [0, 1],
	  duration: 1100,
	  easing: "easeOutExpo",
	  offset: '-=600'
	}).add({
	  targets: '.ml8 .letters-left',
	  scale: [0, 1],
	  duration: 1200,
	  offset: '-=550'
	}).add({
	  targets: '.ml8 .bang',
	  scale: [0, 1],
	  rotateZ: [45, 15],
	  duration: 1200,
	  offset: '-=1000'
	}).add({
	  targets: '.ml8',
	  opacity: 0,
	  duration: 1000,
	  easing: "easeOutExpo",
	  delay: 1400
	});
  
  anime({
	targets: '.ml8 .circle-dark-dashed',
	rotateZ: 360,
	duration: 8000,
	easing: "linear",
	loop: true
  });

	/* ========================================================================= */
	/*   Contact Form Validating
	/* ========================================================================= */


	$('#contact-submit').click(function (e) {

		//stop the form from being submitted
		e.preventDefault();

		/* declare the variables, var error is the variable that we use on the end
		to determine if there was an error or not */
		var error = false;
		var name = $('#name').val();
		var email = $('#email').val();
		var subject = $('#subject').val();
		var message = $('#message').val();

		/* in the next section we do the checking by using VARIABLE.length
		where VARIABLE is the variable we are checking (like name, email),
		length is a JavaScript function to get the number of characters.
		And as you can see if the num of characters is 0 we set the error
		variable to true and show the name_error div with the fadeIn effect. 
		if it's not 0 then we fadeOut the div( that's if the div is shown and
		the error is fixed it fadesOut. 
		
		The only difference from these checks is the email checking, we have
		email.indexOf('@') which checks if there is @ in the email input field.
		This JavaScript function will return -1 if no occurrence have been found.*/
		if (name.length == 0) {
			var error = true;
			$('#name').css("border-color", "#D8000C");
		} else {
			$('#name').css("border-color", "#666");
		}
		if (email.length == 0 || email.indexOf('@') == '-1') {
			var error = true;
			$('#email').css("border-color", "#D8000C");
		} else {
			$('#email').css("border-color", "#666");
		}
		if (subject.length == 0) {
			var error = true;
			$('#subject').css("border-color", "#D8000C");
		} else {
			$('#subject').css("border-color", "#666");
		}
		if (message.length == 0) {
			var error = true;
			$('#message').css("border-color", "#D8000C");
		} else {
			$('#message').css("border-color", "#666");
		}

		//now when the validation is done we check if the error variable is false (no errors)
		if (error == false) {
			//disable the submit button to avoid spamming
			//and change the button text to Sending...
			$('#contact-submit').attr({
				'disabled': 'false',
				'value': 'Sending...'
			});

			/* using the jquery's post(ajax) function and a lifesaver
			function serialize() which gets all the data from the form
			we submit it to send_email.php */
			$.post("sendmail.php", $("#contact-form").serialize(), function (result) {
				//and after the ajax request ends we check the text returned
				if (result == 'sent') {
					//if the mail is sent remove the submit paragraph
					$('#cf-submit').remove();
					//and show the mail success div with fadeIn
					$('#mail-success').fadeIn(500);
				} else {
					//show the mail failed div
					$('#mail-fail').fadeIn(500);
					//re enable the submit button by removing attribute disabled and change the text back to Send The Message
					$('#contact-submit').removeAttr('disabled').attr('value', 'Send The Message');
				}
			});
		}
	});

});
// End Jquery Function


	/* ========================================================================= */
	/*	Animated section
	/* ========================================================================= */

	var wow = new WOW(
		{
		  offset:       100,          // distance to the element when triggering the animation (default is 0)
		  mobile:       false      // trigger animations on mobile devices (default is true)
		}
	 );
	 wow.init();


	/* ========================================================================= */
	/*	Smooth Scroll
	/* ========================================================================= */
	var scroll = new SmoothScroll('a[href*="#"]');



	/* ========================================================================= */
	/*	Google Map Customization
	/* =========================================================================  */

	function initialize() {

		var myLatLng = new google.maps.LatLng(22.333851, 91.812256);

		var roadAtlasStyles = [{
			"featureType": "landscape",
			"elementType": "geometry.fill",
			"stylers": [{
				"color": "#2F3238"
			}]
		}, {
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#FFFFFF"
			}]
		}, {
			"elementType": "labels.text.stroke",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "road",
			"elementType": "geometry.fill",
			"stylers": [{
				"color": "#50525f"
			}]
		}, {
			"featureType": "road",
			"elementType": "geometry.stroke",
			"stylers": [{
				"visibility": "on"
			}, {
				"color": "#808080"
			}]
		}, {
			"featureType": "poi",
			"elementType": "labels",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "transit",
			"elementType": "labels.icon",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [{
				"color": "#808080"
			}]
		}, {
			"featureType": "water",
			"elementType": "geometry.fill",
			"stylers": [{
				"color": "#3071a7"
			}, {
				"saturation": -65
			}]
		}, {
			"featureType": "road",
			"elementType": "labels.icon",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "landscape",
			"elementType": "geometry.stroke",
			"stylers": [{
				"color": "#bbbbbb"
			}]
		}];

		var mapOptions = {
			zoom: 14,
			center: myLatLng,
			disableDefaultUI: true,
			scrollwheel: false,
			navigationControl: false,
			mapTypeControl: false,
			scaleControl: false,
			draggable: false,
			mapTypeControlOptions: {
				mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'roadatlas']
			}
		};

		var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);


		var marker = new google.maps.Marker({
			position: myLatLng,
			map: map,
			title: '',
		});


		google.maps.event.addListener(marker, 'click', function () {
			infowindow.open(map, marker);
		});

		var styledMapOptions = {
			name: 'US Road Atlas'
		};

		var usRoadMapType = new google.maps.StyledMapType(
			roadAtlasStyles, styledMapOptions);

		map.mapTypes.set('roadatlas', usRoadMapType);
		map.setMapTypeId('roadatlas');
	}

	google.maps.event.addDomListener(window, "load", initialize);

