$('#toggle').click(function() {
	$('#toggle .bar').toggleClass('animate');
	$('#page').toggleClass('overlay');
});
baguetteBox.run('.compact-gallery', { animation: 'slideIn'});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});
$('.owl-carousel2').owlCarousel({
 	autoplay: true,
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.owl-carousel3').owlCarousel({
  autoplay: true,
  center: true,
  loop: true,
  nav: true,
  responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
});

$('.owl-carousel-4').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
$('.owl-carousel-5').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})
