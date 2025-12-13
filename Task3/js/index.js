$(document).ready(function(){
    const options = {
        items:1,
        margin:30,
        stagePadding:30,
        smartSpeed:450,
        autoHeight:true,
        autoWidth:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        nav: true
    }
    $(".owl-carousel").owlCarousel(options);
});