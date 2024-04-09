$(".addToggler").click(() => {
    $(".MobileNewMenuList").addClass("show");

});
$(".removeToggler").click(() => {
    $(".MobileNewMenuList").removeClass("show");
});

//############## Banner-Section ###############//
$('#banner-carasoul').owlCarousel({
    loop: true,
    autoplay: true,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})
//############## Featured Properties ###############//
$('#properties-sec').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    speed: 1500,
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 1,
        },

        768: {
            items: 2,
        },
        998: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})

//############## About-Us ###############//
$('#about-carasoul').owlCarousel({
    loop: true,
    margin: 10,
    // nav:true,
    autoplay: true,
    speed:2500,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

//############## PropertiesDetails ###############//
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
        "<i class='fa-solid fa-angle-left'></i>",
        "<i class='fa-solid fa-angle-right'></i>",
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})
function moveCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const next = direction * carousel.offsetWidth;
    carousel.scrollBy({
      left: 100,
      behavior: 'smooth'
    });
  }


  