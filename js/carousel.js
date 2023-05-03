// Featured Carousel
$('.featured-carousel').owlCarousel({
    loop:true,
    margin:24,
    nav:true,
    dots: false,
    navText:["<i class='fa-solid fa-chevron-left'></i>","<i class='fa-solid fa-chevron-right'></i>"],
    autoplay:false,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:3,
            nav:false,
            dots: true
        },
        600:{
            items:4
        },
        1000:{
            items:8
        }
    }
});
// Celebrity Carousel
$('.celebrity-carousel').owlCarousel({
    loop:true,
    margin:24,
    nav:true,
    dots: false,
    navText:["<i class='fa-solid fa-chevron-left'></i>","<i class='fa-solid fa-chevron-right'></i>"],
    autoWidth:true,
    autoplay:false,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:2,
            nav:false,
            dots: true
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});