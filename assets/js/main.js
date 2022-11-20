(function ($) {
    "use strict";

    $(document).ready(function($){
        
        // testimonial sliders
        $(".testimonial-sliders").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            responsive:{
                0:{
                    items:1,
                    nav:false
                },
                600:{
                    items:1,
                    nav:false
                },
                1000:{
                    items:1,
                    nav:false,
                    loop:true
                }
            }
        });

        // homepage slider
        $(".homepage-slider").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            nav: true,
            autoplayTimeout:50000,
            dots: true,
            navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
            responsive:{
                0:{
                    items:1,
                    nav:false,
                    loop:true
                },
                600:{
                    items:1,
                    nav:true,
                    loop:true
                },
                1000:{
                    items:1,
                    nav:true,
                    loop:true
                }
            }
        });

        // logo carousel
        $(".logo-carousel-inner").owlCarousel({
            items: 4,
            loop: true,
            autoplay: true,
            margin: 30,
            responsive:{
                0:{
                    items:1,
                    nav:false
                },
                600:{
                    items:3,
                    nav:false
                },
                1000:{
                    items:4,
                    nav:false,
                    loop:true
                }
            }
        });

        // count down
        if($('.time-countdown').length){  
            $('.time-countdown').each(function() {
            var $this = $(this), finalDate = $(this).data('countdown');
            $this.countdown(finalDate, function(event) {
                var $this = $(this).html(event.strftime('' + '<div class="counter-column"><div class="inner"><span class="count">%D</span><span class="timer-label">Dana</span></div></div> ' + '<div class="counter-column"><div class="inner"><span class="count">%H</span><span class="timer-label">Sati</span></div></div>  ' + '<div class="counter-column"><div class="inner"><span class="count">%M</span><span class="timer-label">Minuta</span></div></div>  ' + '<div class="counter-column"><div class="inner"><span class="count">%S</span><span class="timer-label">Sekundi</span></div></div>'));
            });
         });
        }

        // projects filters isotop
        $(".product-filters li").on('click', function () {
            
            $(".product-filters li").removeClass("active");
            $(this).addClass("active");

            var selector = $(this).attr('data-filter');

            $(".product-lists").isotope({
                filter: selector,
            });
            
        });
        
        // isotop inner
        $(".product-lists").isotope();

        // magnific popup
        $('.popup-youtube').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

        // light box
        $('.image-popup-vertical-fit').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            mainClass: 'mfp-img-mobile',
            image: {
                verticalFit: true
            }
        });

        // homepage slides animations
        $(".homepage-slider").on("translate.owl.carousel", function(){
            $(".hero-text-tablecell .subtitle").removeClass("animated fadeInUp").css({'opacity': '0'});
            $(".hero-text-tablecell h1").removeClass("animated fadeInUp").css({'opacity': '0', 'animation-delay' : '0.3s'});
            $(".hero-btns").removeClass("animated fadeInUp").css({'opacity': '0', 'animation-delay' : '0.5s'});
        });

        $(".homepage-slider").on("translated.owl.carousel", function(){
            $(".hero-text-tablecell .subtitle").addClass("animated fadeInUp").css({'opacity': '0'});
            $(".hero-text-tablecell h1").addClass("animated fadeInUp").css({'opacity': '0', 'animation-delay' : '0.3s'});
            $(".hero-btns").addClass("animated fadeInUp").css({'opacity': '0', 'animation-delay' : '0.5s'});
        });

       

        // stikcy js
        $("#sticker").sticky({
            topSpacing: 0
        });

        //mean menu
        $('.main-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "992"
        });
        
         // search form
        $(".search-bar-icon").on("click", function(){
            $(".search-area").addClass("search-active");
        });

        $(".close-btn").on("click", function() {
            $(".search-area").removeClass("search-active");
        });

        // jQuery("#nanogallery3").nanogallery2({
        
        //     // CONTENT SOURCE
        //     // The optional add-on nanoPhotosProvider is used for this example - this is not mandatory and can easily be replaced by a list of medias
        //     items: [
        //         { src: '../assets/img/test2.jpg', srct: '../assets/img/test2.jpg', title: 'Berlin 1' },
        //         { src: '../assets/img/test2.jpg', srct: '../assets/img/test2.jpg', title: 'Berlin 2' },
        //         { src: '../assets/img/test2.jpg', srct: '../assets/img/test2.jpg', title: 'Berlin 3' }
        //       ],
        //     album: 'people',
           
        //     // GALLERY AND THUMBNAIL LAYOUT
        //     galleryMosaic : [                       // default layout
        //       { w: 2, h: 2, c: 1, r: 1 },
        //       { w: 1, h: 1, c: 3, r: 1 },
        //       { w: 1, h: 1, c: 3, r: 2 },
        //       { w: 1, h: 2, c: 4, r: 1 },
        //       { w: 2, h: 1, c: 5, r: 1 },
        //       { w: 2, h: 2, c: 5, r: 2 },
        //       { w: 1, h: 1, c: 4, r: 3 },
        //       { w: 2, h: 1, c: 2, r: 3 },
        //       { w: 1, h: 2, c: 1, r: 3 },
        //       { w: 1, h: 1, c: 2, r: 4 },
        //       { w: 2, h: 1, c: 3, r: 4 },
        //       { w: 1, h: 1, c: 5, r: 4 },
        //       { w: 1, h: 1, c: 6, r: 4 }
        //     ],
        //     galleryMosaicXS : [                     // layout for XS width
        //       { w: 2, h: 2, c: 1, r: 1 },
        //       { w: 1, h: 1, c: 3, r: 1 },
        //       { w: 1, h: 1, c: 3, r: 2 },
        //       { w: 1, h: 2, c: 1, r: 3 },
        //       { w: 2, h: 1, c: 2, r: 3 },
        //       { w: 1, h: 1, c: 2, r: 4 },
        //       { w: 1, h: 1, c: 3, r: 4 }
        //     ],
        //     galleryMosaicSM : [                     // layout for SM width
        //       { w: 2, h: 2, c: 1, r: 1 },
        //       { w: 1, h: 1, c: 3, r: 1 },
        //       { w: 1, h: 1, c: 3, r: 2 },
        //       { w: 1, h: 2, c: 1, r: 3 },
        //       { w: 2, h: 1, c: 2, r: 3 },
        //       { w: 1, h: 1, c: 2, r: 4 },
        //       { w: 1, h: 1, c: 3, r: 4 }
        //     ],
        //     galleryMaxRows: 1,
        //     galleryDisplayMode: 'rows',
        //     gallerySorting: 'random',
        //     thumbnailDisplayOrder: 'random',
        //     thumbnailHeight: '180', thumbnailWidth: '220',
        //     thumbnailAlignment: 'scaled',
        //     thumbnailGutterWidth: 0, thumbnailGutterHeight: 0,
        //     thumbnailBorderHorizontal: 0, thumbnailBorderVertical: 0,
        //     thumbnailToolbarImage: null,
        //     thumbnailToolbarAlbum: null,
        //     thumbnailLabel: { display: false },
        //     galleryDisplayTransitionDuration: 1500,
        //     thumbnailDisplayTransition: 'imageSlideUp',
        //     thumbnailDisplayTransitionDuration: 1200,
        //     thumbnailDisplayTransitionEasing: 'easeInOutQuint',
        //     thumbnailDisplayInterval: 60,
        //     thumbnailBuildInit2: 'image_scale_1.15',
        //     thumbnailHoverEffect2: 'thumbnail_scale_1.00_1.05_300|image_scale_1.15_1.00',
        //     touchAnimation: true,
        //     touchAutoOpenDelay: 500,
        //     viewerToolbar: { display: false },
        //     viewerTools:    {
        //       topLeft:   'label',
        //       topRight:  'shareButton, rotateLeft, rotateRight, fullscreenButton, closeButton'
        //     },
        //     galleryTheme : { 
        //       thumbnail: { background: '#111' },
        //     },
        //     locationHash: true
        //   });
    
    });


    jQuery(window).on("load",function(){
        jQuery(".loader").fadeOut(1000);
    });


}(jQuery));