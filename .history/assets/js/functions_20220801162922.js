// // logo scroll animation

// $(document).ready(function () {



//     // $(".bsba-logo").spriteControl({
//     //     allsteps: 125,
//     //     step: 140,
//     //     horizontalImg: true
//     // });

//     // var soda = new SpriteScroll({
//     //     width: 140,
//     //     height: 140,
//     //     rowlength: 1,
//     //     frames: 125,
//     //     //sprite: "./typo3conf/ext/skeleton/Resources/Public/assets/img/logo-scale-scroll.png",
//     //     sprite: "./assets/img/logo-scale-scroll.png",

//     //     elementId: 'bsba-logo-scroll',
//     //     scrollBounds: 920,
//     //     scrollSpeed: 10,
//     //     debug: false
//     // });
//     // soda.init();


//     if (window.matchMedia("(max-device-width:756px)").matches) {

//         $(".bsba-logo").spriteControl({
//             allsteps: 125,
//             step: 85,
//             horizontalImg: true
//         });

//         var soda = new SpriteScroll({
//             width: 85,
//             height: 85,
//             rowlength: 1,
//             frames: 129,
//             sprite: "/typo3conf/ext/skeleton/Resources/Public/assets/img/logo-scale-scroll.png",
//             elementId: 'bsba-logo-scroll',
//             scrollBounds: 920,
//             scrollSpeed: 10,
//             debug: false
//         });
//         soda.init();



//     } else {
//         $(".bsba-logo").spriteControl({
//             allsteps: 125,
//             step: 140,
//             horizontalImg: true
//         });

//         var soda = new SpriteScroll({
//             width: 140,
//             height: 140,
//             rowlength: 1,
//             frames: 129,
//             sprite: "/typo3conf/ext/skeleton/Resources/Public/assets/img/logo-scale-scroll.png",
//             elementId: 'bsba-logo-scroll',
//             scrollBounds: 920,
//             scrollSpeed: 10,
//             debug: false
//         });
//         soda.init();
//     }
// });



// // mobile btn-menu



    $(".header-navigation nav ul li:first-child a").click(function () {
        if ($(this).hasClass('current')) {
            $('header').removeClass('menu-open');   
            $('main').removeClass('menu-open'); 
            $('.header-navigation-submenu').removeClass('menu-open');  
            $(".header-navigation nav ul li a").removeClass('current');  
            $(this).removeClass('current');
        } else {
            $('header').addClass('menu-open');
            $('main').addClass('menu-open');
            $('.header-navigation-submenu').removeClass('menu-open');  
            $('.header-navigation-lessons').addClass('menu-open');  
            $(".header-navigation nav ul li a").removeClass('current');  
            $(this).addClass('current');  
        }
    });


    $(".header-navigation nav ul li:nth-child(2) a").click(function () {
        if ($(this).hasClass('current')) {
            $('header').removeClass('menu-open');    
            $('main').removeClass('menu-open'); 
            $('.header-navigation-submenu').removeClass('menu-open');  
            $(".header-navigation nav ul li a").removeClass('current');  
            $(this).removeClass('current');
        } else {
            $('header').addClass('menu-open');
            $('main').addClass('menu-open');
            $('.header-navigation-submenu').removeClass('menu-open');  
            $('.header-navigation-tests').addClass('menu-open');  
            $(".header-navigation nav ul li a").removeClass('current');  
            $(this).addClass('current');  
        }
    });

    $(".header-navigation nav ul li:nth-child(3) a").click(function () {
        if ($(this).hasClass('current')) {
            $('header').removeClass('menu-open');  
            $('main').removeClass('menu-open');   
            $('.header-navigation-submenu').removeClass('menu-open');  
            $(".header-navigation nav ul li a").removeClass('current');  
            $(this).removeClass('current');
        } else {
            $('header').addClass('menu-open');
            $('main').addClass('menu-open');
            $('.header-navigation-submenu').removeClass('menu-open');  
            $('.header-navigation-qa').addClass('menu-open');  
            $(".header-navigation nav ul li a").removeClass('current');  
            $(this).addClass('current');  
        }
    });

    $(".header-navigation nav ul li:nth-child(4) a").click(function () {
        if ($(this).hasClass('current')) {
            $('header').removeClass('menu-open');  
            $('main').removeClass('menu-open'); 
            $('main').addClass('menu-open');  
            $('.header-navigation-submenu').removeClass('menu-open');  
            $(".header-navigation nav ul li a").removeClass('current');  
            $(this).removeClass('current');
        } else {
            $('header').addClass('menu-open');
            $('.header-navigation-submenu').removeClass('menu-open');  
            $('.header-navigation-online').addClass('menu-open');  
            $(".header-navigation nav ul li a").removeClass('current');  
            $(this).addClass('current');  
        }
    });




$('.header-navigation-submenu .btn-close').click(function () {
    $('main').removeClass('menu-open'); 

    $('header').removeClass('menu-open');    
    $('.header-navigation-submenu').removeClass('menu-open');  
    $(".header-navigation nav ul li a").removeClass('current');  

});




// test in view

var test_entry_count = $('.test-entry').length;

console.log(test_entry_count);

var cnt1 = 1;
$(".test-entry").each(function () {

    $(this).attr('id', function (index) {
        return cnt1 + "";
    });
    cnt1++;
});




function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}




$(window).scroll(function () {
    $('.test-entry').each(function () {
        if (isScrolledIntoView(this) === true) {
            $(this).addClass('visible');
        }
    });

});




// $('main').click(function () {
//     //$(this).find('#btn-menu').toggleClass('open');

//     if ($('header').hasClass('menu-open')) {
//         $('header').removeClass('menu-open');
//         $('.menu-icon').removeClass('open');
//     }
// });

// // teaser rollover img

// $(".teaser .button").each(function () {
//     $(this).hover(
//         function () {
//             $(this).parent().addClass('teaser-rollover-img');

//         },
//         function () {
//             $(this).parent().removeClass('teaser-rollover-img');

//         }
//     );
// });

// // check text modules

// $(".container-text").each(function () {
//     if ($(this).find('> .row .col-lg-6:first-of-type .frame-type-header').length) {
//         $(this).addClass('two-col-headline-text');
//     } else if ($(this).find('> .row .col-lg-6:first-of-type .frame-type-text p').length) {
//         $(this).addClass('two-col-text');
//     } else {
//         if ($(this).find('> .row .col-lg-6 > div').hasClass('frame-type-text')) {
//             $(this).addClass('one-col-text');
//         }
//         if ($(this).find('> .row .col-lg-12 > div').hasClass('frame-type-text')) {
//             $(this).addClass('one-col-text-full-width');
//         }
//     }
// });


// // team info


// // $(window).on('load', function() {

// //   //  $(".team-entry").each(function() {

// //         $(".team-entry").addClass('team-open');
// //         setTimeout(function () {
// //             $(".team-entry").removeClass('team-open');
// //         console.log('sdfsd')
// //         console.log($(this));
// //         }, 1200);

// //     //});

// // });


// $(".team-entry").each(function () {
//    // $(this).addClass('team-closed');


//     $(this).find('.button-extended').click(function (e) {

//         if ($(this).parent().hasClass('team-open')) {
//             $(this).parent().removeClass('team-open');
//         } else {
//             $(this).parent().addClass('team-open');

//         }


//     });

// });

// // $(".team-entry.team-closed .button-extended").each(function () {
// //     console.log($(this).length);
// //     var position_top = $(this).outerHeight();
// //     console.log(position_top);
// //     $(this).parent().find('.news-tags').css({
// //         bottom: position_top
// //     });

// //     $(this).click(function (e) {
// //         e.preventDefault();
// //         $(this).parent().removeClass('team-closed');
// //         $(this).parent().addClass('team-open');
// //         console.log('team-closed');
// //         var position_top = $(this).outerHeight();
// //         console.log(position_top);
// //         $(this).parent().find('.news-tags').css({
// //             bottom: position_top
// //         })
// //     });
// // });


// // $(".team-entry.team-open .button-extended").each(function () {

// //     var position_top = $(this).outerHeight();
// //     console.log(position_top);
// //     $(this).parent().find('.news-tags').css({
// //         bottom: position_top
// //     });

// //     $(this).click(function (e) {
// //         e.preventDefault();
// //         $(this).parent().removeClass('team-open');
// //         $(this).parent().addClass('team-closed');
// //         console.log('team-open');
// //         var position_top = $(this).outerHeight();
// //         console.log(position_top);
// //         $(this).parent().find('.news-tags').css({
// //             bottom: position_top
// //         })
// //     });
// // });





// // teaser slider

// $('.teaser-slider').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: false,
//     dots: true,
//     arrows: false
// });

// // geschichtsmodul slider

// $('.geschichtsmodul-slider').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: false,
//     dots: true,
//     arrows: false,
//     fade: true
// });

// // accordion
// $(".accordion-trigger")
//     .not(".accordion-active")
//     .next(".accordion-container")
//     .hide();



// $(".content-accordion").each(function () {
//     var trig = $(this);
//     var label_more = $(this).find('.btn-accordion').attr('data-more');
//     var label_less = $(this).find('.btn-accordion').attr('data-less');

//     trig.find('.btn-accordion').html(label_more);


// });

// $(".accordion-trigger").click(function () {
//     var trig = $(this);
//     var label_more = $(this).find('.btn-accordion').attr('data-more');
//     var label_less = $(this).find('.btn-accordion').attr('data-less');
//     if (trig.hasClass("accordion-active")) {
//         trig.next(".accordion-container").slideToggle("slow");
//         trig.removeClass("accordion-active");
//         trig.parent().removeClass("accordion-active");
//         $('.btn-accordion').html(label_more);
//     } else {
//         $(".accordion-active").next(".accordion-container").slideToggle("slow");
//         $(".accordion-active").removeClass("accordion-active");
//         trig.next(".accordion-container").slideToggle("slow");
//         trig.addClass("accordion-active");
//         trig.parent().addClass("accordion-active");
//         $(".content-accordion .accordion-trigger")
//             .find(".icon")
//             .removeClass("open");
//         $('.btn-accordion').html(label_more);
//         trig.find('.btn-accordion').html(label_less);

//     }
//     return false;
// });


// // glossar masonry
// $(window).on('load', function () {

//     $('.glossar-grid').isotope({
//         itemSelector: '.glossar-entry',
//         percentPosition: true,
//         masonry: {
//             columnWidth: '.grid-spacer'
//         }
//     })

// });

// // glossar filter width
// // $(window).on('load', function() {

// //     var width = 0;
// //     $('.glossar-filter-container ul li').each(function() {
// //         width += $(this).outerWidth(true);
// //     });
// //     $('.glossar-filter-container ul').css('width', width);
// // });


// // check if sprungmarken width

// var sprungmarken_width = $('.glossar-filter-container ul').width();
// var sprungmarken_container = $('.glossar-filter-container').width();
// var sprungmarken_offset = sprungmarken_width;

// if (sprungmarken_width > sprungmarken_container) {
//     $('.glossar-filter-container').addClass('scroll');
// }

// if ($('.glossar-filter .glossar-filter-container ul li.active').length > 0) {
//     $('.glossar-filter').removeClass('unfiltered');
//     $('.glossar-filter').addClass('filtered');
//     //$('.glossar-filter .btn-filter').addClass('active');

// } else {
//     $('.glossar-filter').removeClass('filtered');
//     $('.glossar-filter').addClass('unfiltered');
// }

// $('.glossar-filter .btn-filter').click(function () {

//     if ($('.glossar-filter').hasClass('filtered-open')) {
//         if ($('.glossar-filter').hasClass('unfiltered')) {
//             $('.glossar-filter .btn-filter').addClass('active');
//         }
//         $('.glossar-filter').removeClass('filtered-open');
//         $('.glossar-filter').addClass('filtered-closed');
//         $('.glossar-filter .btn-open-filter').removeClass('active');
//         $('.glossar-filter .btn-filter').addClass('active');

//     } else {
//         $('.glossar-filter').removeClass('filtered-closed');
//         $('.glossar-filter').addClass('filtered-open');
//         $('.glossar-filter .btn-open-filter').addClass('active');
//         $('.glossar-filter .btn-filter').removeClass('active');
//     }


//     if ($('.glossar-filter .btn-filter').hasClass('active')) {
//         $('.glossar-filter .btn-filter').removeClass('active');

//     } else {
//         $('.glossar-filter .btn-filter').addClass('active');

//     }


//     // $('.glossar-filter-container').animate({
//     //     scrollLeft: "+=150px"
//     // }, "slow");
//     // console.log('click');
//     // if ($('.sprungmarken .scroller-container').scrollLeft() > 150) {
//     //     $('.sprungmarken .btn-scroll-prev').addClass('active');
//     // }
// });



// // teaser slider dots height


// if (window.matchMedia("(max-device-width:1180px)").matches) {



//     $('.teaser-slider').on('beforeChange', function () {
//         $(this).find('.slick-dots').fadeOut(0);
//     });

//     $('.teaser-slider').on('afterChange', function () {
//         $(".col-lg-6 .teaser-slider").each(function () {
//             var headline_height = $(this).find('.slick-current .teaser-text .button').outerHeight() + 30;
//             $(this).find('.slick-dots').css({
//                 bottom: headline_height
//             });
//         });



//         if (window.matchMedia("(max-device-width:765px)").matches) {
//             $(".col-lg-12 .teaser-slider").each(function () {
//                 var headline_height = $(this).find('.slick-current .teaser-text .button').outerHeight() + 30;
//                 $(this).find('.slick-dots').css({
//                     bottom: headline_height
//                 });
//             });
//             $(".col-lg-12 .teaser-slider").each(function () {
//                 var headline_height = $(this).find('.slick-current .teaser-news .button').outerHeight() + 28;
//                 $(this).find('.slick-dots').css({
//                     bottom: headline_height
//                 });
//             });
//         };
//         // $(this).find('.container > .button').css({
//         //     bottom: 0
//         // })
//         // var headline_height = 0;
//         // var headline_height = $(this).find('.slick-current .teaser-text .button').outerHeight() + 30;
//         // $(this).find('.slick-dots').css({
//         //     bottom: headline_height
//         // });
//         $(this).find('.slick-dots').fadeIn(0);
//     });




//     $(window).on('load', function () {

//         $(".col-lg-6 .teaser-slider").each(function () {
//             var headline_height = $(this).find('.slick-current .teaser-text .button').outerHeight() + 30;
//             $(this).find('.slick-dots').css({
//                 bottom: headline_height
//             });
//         });

//         if (window.matchMedia("(max-device-width:765px)").matches) {
//             $(".col-lg-12 .teaser-slider").each(function () {
//                 var headline_height = $(this).find('.slick-current .teaser-text .button').outerHeight() + 30;
//                 $(this).find('.slick-dots').css({
//                     bottom: headline_height
//                 });
//             });
//             $(".col-lg-12 .teaser-slider").each(function () {
//                 var headline_height = $(this).find('.slick-current .teaser-news .button').outerHeight() + 28;
//                 $(this).find('.slick-dots').css({
//                     bottom: headline_height
//                 });
//             });
//         };
//     });





//     // $(".teaser-slider .slick-dots").each(function () {

//     //     var answer_height = $(this).parent().find('.teaser-slider').outerHeight() - 6;
//     //     $(this).css({
//     //         bottom: answer_height
//     //     });
//     // });

// }





// /* geschichtsmodul */




// $(".geschichtsmodul-entry .button").each(function () {
//     $(this).click(function () {
//         if ($(this).parent().parent().hasClass('answer-open')) {
//             $(this).parent().parent().removeClass('answer-open');
//             $(this).css({
//                 bottom: 0
//             });

//         } else {
//             $(this).parent().parent().addClass('answer-open');
//             var answer_height = $(this).parent().find('.geschichtsmodul-entry-answer').outerHeight() - 6;
//             $(this).css({
//                 bottom: answer_height
//             });
//         }
//     });
// });

// $(".geschichtsmodul-entry .button.next-slide").each(function () {
//     $(this).click(function () {
//         $('.geschichtsmodul-slider').slick('slickNext');
//     });
// });

// $(window).on('load', function () {

//     if ($('.geschichtsmodul-slider .slick-slide').length == 1) {
//         $('.geschichtsmodul-slider').addClass('single-slider');
//     }
//     if ($('.teaser-slider .slick-slide').length == 1) {
//         $('.teaser-slider').addClass('single-slider');
//     }

//     var headline_height = $('.slick-current .geschichtsmodul-entry .geschichtsmodul-entry-title h2').outerHeight();
//     // $('.geschichtsmodul-slider .slick-dots').css({
//     //     bottom: headline_height
//     // });

// });

// $('.geschichtsmodul-slider').on('beforeChange', function () {
//     //$(this).find('.slick-dots').fadeOut(0);
// });

// $('.geschichtsmodul-slider').on('afterChange', function () {
//     $('.geschichtsmodul-entry').removeClass('answer-open');
//     $(this).find('.container > .button').css({
//         bottom: 0
//     })
//     var headline_height = 0;
//     var headline_height = $(this).find('.slick-current .geschichtsmodul-entry .geschichtsmodul-entry-title h2').outerHeight();
//     // $(this).find('.slick-dots').css({
//     //     bottom: headline_height
//     // });
//     // $(this).find('.slick-dots').fadeIn(0);
// });



// // $('.sprungmarken .scroller-container').scroll(function() {
// //     var $elem = $('.sprungmarken .scroller-container');
// //     var newScrollLeft = $elem.scrollLeft(),
// //         width = $elem.width(),
// //         scrollWidth = $elem.get(0).scrollWidth;
// //     var offset = 1;
// //     if (scrollWidth - newScrollLeft - width < offset) {
// //         $('.sprungmarken .btn-scroll-next').addClass('hide');
// //         $('.sprungmarken .btn-scroll-prev').addClass('active');

// //     } else {
// //         $('.sprungmarken .btn-scroll-next').removeClass('hide');

// //     }
// //     if (newScrollLeft === 0) {
// //         $('.sprungmarken .btn-scroll-prev').removeClass('active');
// //         $('.sprungmarken .btn-scroll-next').removeClass('hide');
// //     }
// //     if ($('.sprungmarken .scroller-container').scrollLeft() > 10) {
// //         $('.sprungmarken .btn-scroll-prev').addClass('active');
// //     }
// //     if (newScrollLeft - width == scrollWidth) {
// //         $('.sprungmarken .btn-scroll-next').addClass('hide');
// //         //$('.sprungmarken .btn-scroll-next').removeClass('hide');

// //     }
// // });







// // $(window).on('load', function () {
// //     /* mobile menu accordion */
// //     if (window.matchMedia("(max-device-width:1200px)").matches) {
// //         /* intern link ani mobile */
// //         $('#tx_cookies').addClass('ani-in');
// //         $('.fade-right').addClass('ani-in');
// //         $('#slideshow').addClass('ani-in');
// //         $('.slider-title').addClass('ani-in');
// //         $('main#content').addClass('ani-in');
// //         $('.scroll-top').addClass('ani-in');
// //         $('.content-fade.fade-start').addClass('ani-in');
// //         $('nav li ul li a, .to-home, .content-submenu ul li a').click(function (e) {
// //             e.preventDefault();
// //             var goTo = this.getAttribute("href");
// //             $('#slideshow').removeClass('ani-in');
// //             $('.slider-title').removeClass('ani-in');
// //             $('main#content').removeClass('ani-in');
// //             $('.content-fade.fade-start').removeClass('ani-in');
// //             $('nav').removeClass('menu-open');
// //             $('.hamburger').removeClass('is-active');
// //             $('nav > ul > li > .mobile-dropdown').removeClass('show');
// //             $('nav > ul > li > .mobile-dropdown').slideUp(800);
// //             $('nav > ul > li > a').removeClass('active');
// //             setTimeout(function () {
// //                 $('nav').getNiceScroll(0).doScrollTop(0, 800);
// //             }, 500);
// //             setTimeout(function () {
// //                 window.location = goTo;
// //             }, 1000);
// //         });
// //         $('nav > ul > li > a').addClass('toggle2');
// //         $('nav > ul > li > a').attr("href", "javascript:void(0);");
// //         $('nav > ul > li > a').click(function () {
// //             $('nav > ul > li > a').removeClass('active');
// //             $(this).addClass('active');
// //         });
// //         /* anchor scroll */
// //         $(".scroll-down").on('click', function (event) {
// //             if (this.hash !== "") {
// //                 event.preventDefault();
// //                 var hash = this.hash;
// //                 $('html, body').animate({
// //                     scrollTop: $(hash).offset().top - 70
// //                 }, 800, function () {
// //                     //  window.location.hash = hash;
// //                 });
// //             }
// //         });
// //     }
// //     else {
// //         /* intern link ani */
// //         $('#tx_cookies').addClass('ani-in');
// //         $('.slider-title').addClass('ani-in');
// //         $('#slideshow').addClass('ani-in');
// //         $('.fade-right').addClass('ani-in');
// //         $('.content-submenu').addClass('ani-in');
// //         $('main#content').addClass('ani-in');
// //         $('.scroll-top').addClass('ani-in');
// //         $('.content-fade.fade-start').addClass('ani-in');
// //         $('nav li a, .to-home:not(.mobile), .content-submenu ul li a').click(function (e) {
// //             e.preventDefault();
// //             var goTo = this.getAttribute("href");
// //             $('#slideshow').removeClass('ani-in');
// //             $('.slider-title').removeClass('ani-in');
// //             $('.fade-right').removeClass('ani-in');
// //             $('.content-submenu').removeClass('ani-in');
// //             $('main#content').removeClass('ani-in');
// //             $('.scroll-top').removeClass('ani-in');
// //             $('.content-fade.fade-start').removeClass('ani-in');
// //             setTimeout(function () {
// //                 window.location = goTo;
// //             }, 1200);
// //         });
// //         /* anchor scroll */
// //         $(".scroll-down").on('click', function (event) {
// //             if (this.hash !== "") {
// //                 event.preventDefault();
// //                 var hash = this.hash;
// //                 $('html, body').animate({
// //                     scrollTop: $(hash).offset().top + 2
// //                 }, 800, function () {});
// //             }
// //         });
// //     }
// //     /* mobile menu */
// //     $('#mobile-btn-menu').click(function () {
// //         if ($('nav').hasClass('menu-open')) {
// //             $('nav').removeClass('menu-open');
// //             $('.hamburger').removeClass('is-active');
// //             $('nav > ul > li > .mobile-dropdown').removeClass('show');
// //             $('nav > ul > li > .mobile-dropdown').slideUp(800);
// //             $('nav > ul > li > a').removeClass('active');
// //             setTimeout(function () {
// //                 $('nav').getNiceScroll(0).doScrollTop(0, 800);
// //             }, 500);
// //         }
// //         else {
// //             $('nav').addClass('menu-open');
// //             $('.hamburger').addClass('is-active');
// //         }
// //     });
// //     $('#mobile-btn-search').click(function () {
// //         if ($('#search').hasClass('search-open')) {
// //             $('#search').removeClass('search-open');
// //             $('#mobile-btn-search').removeClass('btn-search-open');
// //         }
// //         else {
// //             $('#search').addClass('search-open');
// //             $('#mobile-btn-search').addClass('btn-search-open');
// //         }
// //     });
// //     $('.toggle2').click(function (e) {
// //         e.preventDefault();
// //         var $this = $(this);
// //         if ($this.next().hasClass('show')) {
// //             $this.next().removeClass('show');
// //             $this.parent().find('a').removeClass('active');
// //             $this.next().slideUp(800);
// //         }
// //         else {
// //             $('.accordion .toggle2').removeClass('active');
// //             $this.parent().parent().find('li > ul').removeClass('show');
// //             $this.parent().parent().find('li > ul').slideUp(800);
// //             // $this.parent().find('a').toggleClass('active');
// //             $this.next().toggleClass('show');
// //             $this.next().slideToggle(800);
// //         }
// //     });
// //     /* mobile menu scrollbar */
// //     $("header nav").niceScroll("ul:first-child", {
// //         cursorwidth: 6
// //         , cursoropacitymin: 0.8
// //         , cursorcolor: '#ffc20e'
// //         , cursorborder: 'none'
// //         , cursorborderradius: 0
// //         , autohidemode: 'leave'
// //     });
// //     /* content fade */
// //     if (window.matchMedia("(max-device-width:1024px)").matches) {
// //         $(window).scroll(function () {
// //             var tablet_height = $(window).scrollTop() + $(window).height()
// //             if (tablet_height == ($(document).height() - 360)) {
// //                 $('.content-fade:not(.fade-start)').fadeOut(300);
// //             }
// //             else {
// //                 //   $('.content-fade:not(.fade-start)').fadeIn(600);
// //             }
// //         });
// //     }
// //     else {
// //         $(window).scroll(function () {
// //             if ($(window).scrollTop() + $(window).height() == $(document).height()) {
// //                 $('.content-fade:not(.fade-start)').fadeOut(300);
// //             }
// //             else {
// //                 $('.content-fade:not(.fade-start)').fadeIn(600);
// //             }
// //         });
// //     };
// //     /* check content fade height */
// //     if ($('main#content').height() < ($(window).height() - 136)) {
// //         $('.content-fade').addClass('content-small');
// //     };
// //     /* check if intro img empty */
// //     if (!$(".intro-img")[0]) {
// //         $('.content-intro-img').addClass('intro-img-empty');
// //         $('.content-intro-title').addClass('intro-img-empty');
// //     }

// //     /* load end */
// // });
// // /* scroll to top */
// // $(window).scroll(function () {
// //     if ($(this).scrollTop() > 200) {
// //         $('.scroll-top').css({
// //             bottom: '45px'
// //         });
// //         $('.content-fade.fade-start').fadeOut(800);
// //     }
// //     else {
// //         $('.scroll-top').css({
// //             bottom: '-65px'
// //         });
// //         $('.content-fade.fade-start').fadeIn(800);
// //     };
// //     if ($(this).scrollTop() > 600) {
// //         $('.scroll-top').addClass('active');
// //     }
// //     else {
// //         $('.scroll-top').removeClass('active');
// //     }
// //     if ($(window).scrollTop() + $(window).height() == $(document).height()) {}
// // });
// // $('.scroll-top').bind('click', function (event) {
// //     var $anchor = $(this);
// //     $('html, body').stop().animate({
// //         scrollTop: 0
// //     }, 1250, 'easeInOutCubic');
// //     event.preventDefault();
// // });

// // $(document).ready(function () {


// // });
// // /* accordion */
// // $('.toggle').click(function (e) {
// //     e.preventDefault();
// //     var $this = $(this);
// //     if ($this.next().hasClass('show')) {
// //         $this.next().removeClass('show');
// //         $this.parent().find('a').removeClass('active');
// //         $this.next().slideUp(800);
// //     }
// //     else {
// //         $('.accordion .toggle').removeClass('active');
// //         $this.parent().parent().find('li > ul').removeClass('show');
// //         $this.parent().parent().find('li > ul').slideUp(800);
// //         $this.parent().find('a').toggleClass('active');
// //         $this.next().toggleClass('show');
// //         $this.next().slideToggle(800);
// //     }
// // });

// // /* content box eq height */
// // $('.entry-box-txt').height($('.entry-box').height());
// // $('.entry-box-title').height($('.entry-box').height());
// // /* lightbox */
// // $('.fancybox').fancybox({
// //     infobar: false
// //     , smallBtn: true
// //     , toolbar: false
// //     , modal: false
// //     , hideScrollbar: false
// //     , animationEffect: "fade"
// //     , transitionDuration: 800
// //     , idleTime: 80
// //     , infobar: true
// //     , thumbs: {
// //         autoStart: true
// //         , hideOnClose: true
// //         , parentEl: '.fancybox-container'
// //         , axis: 'x'
// //     }
// //     , iframe: {
// //         preload: false
// //     }
// //     , lang: "de"
// //     , i18n: {
// //         en: {
// //             CLOSE: "Close"
// //             , NEXT: "Next"
// //             , PREV: "Previous"
// //             , ERROR: "The requested content cannot be loaded. <br/> Please try again later."
// //             , PLAY_START: "Start slideshow"
// //             , PLAY_STOP: "Pause slideshow"
// //             , FULL_SCREEN: "Full screen"
// //             , THUMBS: "Thumbnails"
// //             , DOWNLOAD: "Download"
// //             , SHARE: "Share"
// //             , ZOOM: "Zoom"
// //         }
// //         , de: {
// //             CLOSE: "Schliessen"
// //             , NEXT: "Weiter"
// //             , PREV: "Zurück"
// //             , ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal."
// //             , PLAY_START: "Diaschau starten"
// //             , PLAY_STOP: "Diaschau beenden"
// //             , FULL_SCREEN: "Vollbild"
// //             , THUMBS: "Vorschaubilder"
// //             , DOWNLOAD: "Herunterladen"
// //             , SHARE: "Teilen"
// //             , ZOOM: "Maßstab"
// //         }
// //     }
// // });

// function play_vid(uid) {
//     document.getElementById('play_button_' + uid).style.display = "none";
//     document.getElementById('pause_button_' + uid).style.display = "block";
//     player = document.getElementById('video_player_' + uid);
//     player.play();
// }

// function pause_vid(uid) {
//     document.getElementById('pause_button_' + uid).style.display = "none";
//     document.getElementById('play_button_' + uid).style.display = "block";
//     player = document.getElementById('video_player_' + uid);
//     player.pause();
// }
