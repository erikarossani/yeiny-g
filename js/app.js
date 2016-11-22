$(function() {

	//ScrollMagic
	var controller = new ScrollMagic.Controller();
	var tweenMax = new TweenMax.to("#blurb .item", 0.5, {
		y: -60,
		x: 60,
		opacity: 1
	},
	{
		y: 0,
		x: 0,
		opacity: 1
	},
		0.2
	);

	var scene = new ScrollMagic.Scene({
		triggerElement: "#blurb .item",
		duration: 500,
		offset: -200
	})
	.setTween(tweenMax)
	.addTo(controller);

	//Hover
	var like = function() {
		$("#tech").hide();
		$("#animals").show();
	};

	var likeTech = function() {
		$("#animals").hide();
		$("#tech").show();
	};

	$("#heart").hover(like);
	$("#laptop").hover(likeTech);

	$(window).scroll(function() {
		$(".pines").each(function(){

			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 600) {
				$(this).show();
				$(this).addClass("fadeIn");
			}
		});

		$(".porcentaje").each(function(){

			var pos = $(this).offset().top;
			var topWindow = $(window).scrollTop();
			if (pos < topWindow + 600) {
				$(this).show("slow");
				$(this).addClass("slideRight");
			}
		});

		$(".image").each(function(){

			var pos = $(this).offset().top;
			var topWindow = $(window).scrollTop();
			if (pos < topWindow + 600) {
				$(this).show("slow");
				$(this).addClass("fadeIn");
			}
		});
	});

	var javascript = function() {
		$("#htmlCss").hide("slow");
		$("#app").hide("slow");
		$("#javascript").show("slow");
	};

	var html = function() {
		$("#javascript").hide("slow");
		$("#app").hide("slow");
		$("#htmlCss").show("slow");
	};

	var mobile = function() {
		$("#javascript").hide("slow");
		$("#htmlCss").hide("slow");
		$("#app").show("slow");
	};

	$("#js").click(javascript);
	$("#html").click(html);
	$("#mobile").click(mobile);

});