$('.owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    nav:true,
    dots: false,
    center: true,
    navText : ["<img src='/images-landingpage/left_button.png' style='height: 32px; width: 32px;'>",
                "<img src='/images-landingpage/right_button.png' style='height: 32px; width: 32px;'>"],
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
});