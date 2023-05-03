window.addEventListener("scroll", function(){
    console.log("hello");
    var header = document.querySelector(".header");
    header.classList.toggle("sticky-top", window.scrollY > 0);
});

$('.testimonial-content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.slider-nav',
    vertical: true,
    autoplay: true,
    autoplaySpeed: 1000,
    verticalSwiping: true,
    centerMode: false
});
$('.slider-nav').slick({
    slidesToShow: 2,
    asNavFor: '.testimonial-content',
    vertical: true,
    focusOnSelect: true,
    autoplay: false,
    centerMode: true
});

