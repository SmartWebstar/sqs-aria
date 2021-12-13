document.addEventListener('DOMContentLoaded', customCode);
window.addEventListener('mercury:load', customCode);

function customCode(){
	//For Firefox we have to handle it in JavaScript 
	var vids = $(".sqs-block-code video"); 
	$.each(vids, function(){
		this.controls = false; 
	}); 
//Loop though all Video tags and set Controls as false

$(".sqs-block-code video").click(function() {
  //console.log(this); 
  if (this.paused) {
  	this.play();
  } else {
  	this.pause();
  }
});
$(window).scroll(function() {
	var height = $(window).scrollTop();
	if(height  > 200) {
		$('.Header.Header--top').addClass('solid-header');
	}else{
		$('.Header.Header--top').removeClass('solid-header');
	}

});

$('.more').each(function() {
	if ($(this).html().indexOf(" ...") >= 0){
		$(this).addClass('show-more');
	}
})

function short(){
	var showChar = 100;
	var ellipsestext = "";
	var moretext = "Read More";
	var lesstext = "less";
	$('.more').each(function() {
		var content = $(this).html();

		if(content.length > showChar) {

			var c = content.substr(0, showChar);
			var h = content.substr(showChar-1, content.length - showChar);

			var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

			$(this).html(html);
		}
	});

}


$('.feedback-wrapper-inner').owlCarousel({
	loop:true,
	margin: 30,
	nav:true,
	autoHeight: true,
	autoplay: true,
	autoplayTimeout: 3000,
	autoplayHoverPause: true,
	smartSpeed: 1000,
	responsive:{
		0:{
			items:1
		},
		750:{
			items:2
		},
		1000:{
			items:3
		}
	}
});

function circleAnimation(itemCirc, containerCirc, radius){
		var radius = radius; // adjust to move out items in and out 
		var fields = $(itemCirc),
		container = $(containerCirc),
		width = container.width(),
		height = container.height();
		var angle = 0,
		step = (2 * Math.PI) / fields.length;
		fields.each(function() {
			var x = Math.round(width / 2 + radius * Math.cos(angle) - $(this).width() / 2);
			var y = Math.round(height / 2 + radius * Math.sin(angle) - $(this).height() / 2);
			if (window.console) {
				console.log($(this).text(), x, y);
			}
			$(this).css({
				left: x + 'px',
				top: y + 'px'
			});
			angle += step;
		});
	}
	function circleFunction(){
		if($(window).width() > 1300){
			circleAnimation('.logo-item-internal', '.parent-animation-internal', 225);
			circleAnimation('.logo-item-external', '.parent-animation-external', 350);
		}else if($(window).width() < 1300 && $(window).width() > 640){
		circleAnimation('.logo-item-internal', '.parent-animation-internal', 150); //300
		circleAnimation('.logo-item-external', '.parent-animation-external', 250); // 500
	}else if($(window).width() < 640){
		circleAnimation('.logo-item-internal', '.parent-animation-internal', 75); // 150
		circleAnimation('.logo-item-external', '.parent-animation-external', 150); // 300
	}
}

function isTouchDevice(){
	return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
}

if(isTouchDevice()===true) {
	$('body').addClass('touch-device');
	$('body').removeClass('not-touch-device');
}
else {
	$('body').removeClass('touch-device');
	$('body').addClass('not-touch-device');
}

$('.touch-device .object').click(function(){
	$(this).toggleClass('rotate-it');
});

$.fn.wrapMatch = function(count, className) {
	var length = this.length;
	for(var i = 0; i < length ; i+=count) {
		this.slice(i, i+count).wrapAll('<div '+((typeof className == 'string')?'class="'+className+'"':'')+'/>');
	}
	return this;
}; 


function setUpClients(){

	if($(window).width() > 800){
		if($('.slick-slide').length){
			$('.clients-wrapper-inner').slick('unslick');
		}
		if(!$('.clients-list').length > 0){
			$('.client-item').wrapMatch(4,'clients-list');
		}
		$('.clients-wrapper-inner').slick({
			infinite: true,
			speed: 300,
			slidesToShow: 3,
			adaptiveHeight: true,
			vertical: true,
			verticalSwiping: true,
			autoplay: true,
			autoplaySpeed: 3000
		});

		
	}else if($(window).width() > 640){
		if($('.slick-slide').length){
			$('.clients-wrapper-inner').slick('unslick');
		}
		if(!$('.clients-list').length > 0){
			$('.client-item').wrapMatch(3,'clients-list');
		}
		$('.clients-wrapper-inner').slick({
			infinite: true,
			speed: 300,
			slidesToShow: 3,
			adaptiveHeight: true,
			vertical: true,
			verticalSwiping: true,
			autoplay: true,
			autoplaySpeed: 3000
		});
		
	}else{
		if($('.slick-slide').length){

			$('.clients-wrapper-inner').slick('unslick');
		}

		$('.clients-list').each(function(){
			var cnt = $(this).contents();
			$(this).replaceWith(cnt);
		});



		$('.clients-wrapper-inner').slick({
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			adaptiveHeight: true,
			vertical: true,
			verticalSwiping: true,
			autoplay: true,
			autoplaySpeed: 3000
		});
	}
}
setUpClients();

circleFunction();

$(window).resize(function(){
	circleFunction();
	setUpClients();
	if(isTouchDevice()===true) {
		$('body').addClass('touch-device');
		$('body').removeClass('not-touch-device');
	}
	else {
		$('body').removeClass('touch-device');
		$('body').addClass('not-touch-device');
	}
});


$('.open-popup-link').magnificPopup({
	type:'inline',
	midClick: true,
	gallery: {
		enabled:true
	}
});



// $('.resource-item').click(function(){
// 	$(this).find('.resource-buttons').slideToggle();
// });


// $('.view-resource-button').magnificPopup({
// 	type:'inline',
// 	midClick: true
// });

$('#block-yui_3_17_2_1_1555614749240_15141 img').click(function(e){
	e.preventDefault();
	$('#block-yui_3_17_2_1_1555874950579_39529 img').trigger('click');
});

if($('.wrap-tabs').length > 0){
	$('.tab-image:first-child').addClass('active-image');
	$('.tabs-title:first-child').addClass('active-title');
	$('.tabs-body-item:first-child').addClass('active-body');

	$('.tabs-title').click(function(){
		var id = $(this).attr('id');

		$('.active-body').removeClass('active-body');
		$('[data-tab="'+id+'"]').addClass('active-body');

		$('.active-image').removeClass('active-image');
		$('[data-img-tab="'+id+'"]').addClass('active-image');

		$('.active-title').removeClass('active-title');
		$(this).addClass('active-title');

	});
}
if($('.accrords-list').length > 0){
	$('.accords-title').click(function(){
		if(!$(this).hasClass('open-title')){
			$('.accords-body').slideUp();
			$('.open-title').removeClass('open-title');
		}
		$(this).next().slideToggle();
		$(this).toggleClass('open-title');
		
		
	});
}
AOS.init();

// $(".clients-list").owlCarousel({
//   loop: true,
//   autoplay: true,
//   items: 1,
//   nav: true,
//   autoplayHoverPause: true,
//   animateOut: 'slideOutUp',
//   animateIn: 'slideInUp'
// });
var enlarge = '<p>Click image to enlarge</p>';

$('.image-block-wrapper.lightbox + .image-caption-wrapper .image-caption').each(function(){
	$(enlarge).insertAfter($(this));
});

$(enlarge).insertAfter($('#block-yui_3_17_2_1_1555614749240_15141 .image-caption'));



$(".word").fancybox({
  'width': 1200, // or whatever
  'height': 1000,
  'type': 'iframe'
});


}
