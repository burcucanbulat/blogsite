$(document).ready(function() {
    $(window).scroll(function(){
        if(this.scrollY > 20) 
        $(".header-navbar").addClass("sticky-nav");
        else
        $(".header-navbar").removeClass("sticky-nav");
    });

    $('.menu-toggler').click(function() {
        $(this).toggleClass("active");
        $(".navbar-menu").toggleClass("active");
    });
    $(".works").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery:{enabled:true}
    });
});