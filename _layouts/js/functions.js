
//LOADER
$(window).on("load", function() {
    "use strict";
    $(".loader").fadeOut(800);

});



// JavaScript Document
jQuery(function($) {
  "use strict";
  // +++++ open for Search section
  $(".toggler").on("click", function() {
    $(".property-query-area").slideToggle(300);
  });
  
  
  // +++++ Toggle for Form
  $(".advanced").on("click", function() {
    $(".opened").slideToggle();
    return false;
  });
  
  
  // +++++ open the testimonials modal
  var testimonial = $(".cd-testimonials-all");
  $('.cd-see-all').on("click", function() {
    testimonial.addClass('is-visible');
  });
  $('.cd-testimonials-all .close-btn').on("click", function() {
    testimonial.removeClass('is-visible');
  });
  $(document).keyup(function(event) {
    if (event.which == '27') {
      testimonial.removeClass('is-visible');
    }
  });
  $('.cd-testimonials-all-wrapper').children('ul').masonry({
    itemSelector: '.cd-testimonials-item'
  });
  
  
  // +++++Back to Top
  $("body").append('<a href="#" class="back-to"><i class="icon-arrow-up2"></i></a>');
  var amountScrolled = 700;
  var backBtn = $("a.back-to");
  $(window).on("scroll", function() {
    if ($(window).scrollTop() > amountScrolled) {
      backBtn.fadeIn("slow");
    } else {
      backBtn.fadeOut("slow");
    }
  });
  backBtn.on("click", function() {
    $("html, body").animate({
      scrollTop: 0
    }, 700);
    return false;
  });
  
  
  // +++++ Advance Search
  $(window).on("scroll", function() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop >= 50) {
      $(".blue_navi").addClass("static");
    } else {
      $(".blue_navi").removeClass("static");
    }
    return false;
  });
  


    // bottom header custom fixed
    var $window = $(window);
    var  $mainMenuBar = $('.white_header');
    var  $mainMenuBarAnchor = $('#mainMenuBarAnchor');

    // Run this on scroll events.
    $window.scroll(function() {
        var window_top = $window.scrollTop();
        var div_top = $mainMenuBarAnchor.offset().top;
        if (window_top > div_top) {
            // Make the div sticky.
            $mainMenuBar.addClass('static');
            $mainMenuBarAnchor.height($mainMenuBar.height());
        }
        else {
            // Unstick the div.
            $mainMenuBar.removeClass('static');
            $mainMenuBarAnchor.height(0);
        }
    });



   //Form Container Full height
  getWidthAndHeight();
	$(window).on("resize",function() {
	getWidthAndHeight();
  });
  function getWidthAndHeight (){
	var formoffset = $(".white_header").height();
	var winHeight = $(window).height()-formoffset;
	$(".tp_overlay").css({"height": winHeight,});
  }
 
 
 $(".form_opener").on("click", function(){
   $(".tp_overlay").fadeToggle();
 });  

  
  // ********* OWL Carousel *********
  //For Single Slide
  $("#full-slider, #agent-slider, #agent-2-slider").owlCarousel({
    autoPlay: false,
    stopOnHover: true,
    navigation: true,
    navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    slideSpeed: 300,
    pagination: false,
    singleItem: true
  });
  
  //For Three Slide
  $(".three-item, #nav_slider").owlCarousel({
    autoPlay: true,
    navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    stopOnHover: true,
    pagination: false,
    navigation: true,
    items: 3,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 2]
  });
  
  // Partners(logos)
  $("#partner-slider").owlCarousel({
    autoPlay: true,
    stopOnHover: true,
    navigation: true,
    navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    items: 5,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3]
  });
  
  // Partners(logos)
  $("#partners").owlCarousel({
    autoPlay: true,
    pagination: true,
    stopOnHover: true,
    navigation: false,
    navigationText: false,
    items: 5,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3]
  });
  
  //Testinomial (Home2)
  $("#testinomial-slider").owlCarousel({
    autoPlay: false,
    stopOnHover: true,
    navigation: true,
    navigationText: ["<i class='icon-arrow-left2'></i>", "<i class='icon-arrow-right2'></i>"],
    slideSpeed: 300,
    pagination: true,
    transitionStyle: "fade",
    singleItem: true
  });
  
  //For Three Slide
  $("#two-col-slider").owlCarousel({
    autoPlay: true,
    navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    stopOnHover: true,
    navigation: true,
    items: 2,
    itemsDesktop: [1199, 2],
    itemsDesktopSmall: [979, 2],
    itemsMobile: [480, 1],
  });
  
  //For Four Slide
  $("#news_slider").owlCarousel({
    autoPlay: true,
    stopOnHover: true,
    pagination: true,
    navigation: false,
    items: 4,
    itemsDesktop: [1199, 2],
    itemsDesktopSmall: [979, 2]
  });
  
  //Property Details
  var sync1 = $("#property-d-1");
  var sync2 = $("#property-d-1-2");
  sync1.owlCarousel({
    autoPlay: 3000,
    singleItem: true,
    slideSpeed: 1000,
    transitionStyle: "fade",
    navigation: true,
    navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    pagination: false,
    afterAction: syncPosition,
    responsiveRefreshRate: 200,
  });
  sync2.owlCarousel({
    items: 5,
    itemsDesktop: [1199, 10],
    itemsDesktopSmall: [979, 10],
    itemsTablet: [768, 8],
    itemsMobile: [479, 4],
    pagination: false,
    responsiveRefreshRate: 100,
    afterInit: function(el) {
      el.find(".owl-item").eq(0).addClass("synced");
    }
  });

  function syncPosition(el) {
    var current = this.currentItem;
    $("#property-d-1-2").find(".owl-item").removeClass("synced").eq(current).addClass("synced")
    if ($("#property-d-1-2").data("owlCarousel") !== undefined) {
      center(current)
    }
  }
  $("#property-d-1-2").on("click", ".owl-item", function(e) {
    e.preventDefault();
    var number = $(this).data("owlItem");
    sync1.trigger("owl.goTo", number);
  });

  function center(number) {
    var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
    var num = number;
    var found = false;
    for (var i in sync2visible) {
      if (num === sync2visible[i]) {
        var found = true;
      }
    }
    if (found === false) {
      if (num > sync2visible[sync2visible.length - 1]) {
        sync2.trigger("owl.goTo", num - sync2visible.length + 2)
      } else {
        if (num - 1 === -1) {
          num = 0;
        }
        sync2.trigger("owl.goTo", num);
      }
    } else if (num === sync2visible[sync2visible.length - 1]) {
      sync2.trigger("owl.goTo", sync2visible[1])
    } else if (num === sync2visible[0]) {
      sync2.trigger("owl.goTo", num - 1)
    }
  }
  
  
  // ********* for select box
  $(".selectbox").selectbox();
  
  //********* Range Slider
  $('.nstSlider').nstSlider({
    "left_grip_selector": ".leftGrip",
    "right_grip_selector": ".rightGrip",
    "value_bar_selector": ".bar",
    "value_changed_callback": function(cause, leftValue, rightValue) {
      $(this).parent().find('.leftLabel').text(leftValue);
      $(this).parent().find('.rightLabel').text(rightValue);
    }
  });
  
  
  // *********SHOW FILTER 
  $('.more-filter').on("click", function() {
    $('.more-filter').toggleClass('show-more');
    $('.more-filter .text-1').toggleClass('hide');
    $('.more-filter .text-2').toggleClass('hide');
  });
  
  
  // ********* Check Box 
  $('input[name="radio-btn"]').wrap('<div class="radio-btn"><i></i></div>');
  $(".radio-btn").on("click", function() {
    var _this = $(this),
      block = _this.parent().parent();
    block.find('input:radio').attr('checked', false);
    block.find(".radio-btn").removeClass('checkedRadio');
    _this.addClass('checkedRadio');
    _this.find('input:radio').attr('checked', true);
  });
  $('input[name="check-box"]').wrap('<div class="check-box"><i></i></div>');
  $.fn.toggleCheckbox = function() {
    this.attr('checked', !this.attr('checked'));
  }
  $('.check-box').on("click", function() {
    $(this).find(':checkbox').toggleCheckbox();
    $(this).toggleClass('checkedBox');
  });
  
  
  // ********* Revolution Slider *********
  //Main Slider Home 
  var revapi;
  revapi = jQuery("#rev_slider").revolution({
    sliderType: "standard",
    sliderLayout: "fullwidth",
    scrollbarDrag: "true",
    navigation: {
      arrows: {
        enable: true
      },
      touch: {
        touchenabled: "on",
        swipe_threshold: 75,
        swipe_min_touches: 1,
        swipe_direction: "horizontal",
        drag_block_vertical: false
      }
    },
    gridwidth: 1170,
    gridheight: 770
  });
  
  //Main Slider Home Four
  var revapi;
  revapi = jQuery("#rev_slider_full").revolution({
    sliderType: "standard",
    sliderLayout: "fullwidth",
    scrollbarDrag: "true",
    navigation: {
      arrows: {
        enable: true
      },
      touch: {
        touchenabled: "on",
        swipe_threshold: 75,
        swipe_min_touches: 1,
        swipe_direction: "horizontal",
        drag_block_vertical: false
      }
    },
    gridwidth: 1200,
    gridheight: 730,
	disableProgressBar: "on",
	spinner: "off",
  });
  
  //Home Three
  var revapi;
  revapi = jQuery("#rev_slider_third").revolution({
    sliderType: "standard",
    sliderLayout: "fullwidth",
    scrollbarDrag: "true",
    navigation: {
      arrows: {
        enable: true
      },
      touch: {
        touchenabled: "on",
        swipe_threshold: 75,
        swipe_min_touches: 1,
        swipe_direction: "horizontal",
        drag_block_vertical: false
      }
    },
    responsiveLevels: [1240, 1024, 778, 480],
    gridwidth: [1170, 992, 767, 480],
    gridheight: [560, 500, 450, 450],
	disableProgressBar: "on",
	spinner: "off",
  });
  
  
  var revapi = $("#rev_overlaped").show().revolution({
	sliderType: "standard",
    sliderLayout: "fullscreen",
	fullScreenOffsetContainer:"header",
    scrollbarDrag: "true",
    navigation: {
      arrows: {
        enable: false
      },
      touch: {
        touchenabled: "on",
        swipe_threshold: 75,
        swipe_min_touches: 1,
        swipe_direction: "horizontal",
        drag_block_vertical: false
      }
    },
	disableProgressBar: "on",
	spinner: "off",
  });
  
  //Home Three
  var revapi;
  revapi = jQuery("#rev_eight").revolution({
    sliderType: "standard",
    sliderLayout: "fullwidth",
    scrollbarDrag: "true",
    navigation: {
      arrows: {
        enable: true
      },
      touch: {
        touchenabled: "on",
        swipe_threshold: 75,
        swipe_min_touches: 1,
        swipe_direction: "horizontal",
        drag_block_vertical: false
      },
      bullets: {
        enable: true,
        hide_onmobile: false,
        style: "",
        hide_onleave: false,
        direction: "horizontal",
        h_align: "center",
        v_align: "bottom",
        h_offset: 20,
        v_offset: 20,
        space: 5,
        tmp: ''
      }
    },
    responsiveLevels: [1240, 1024, 778, 480],
    gridwidth: [1170, 992, 767, 480],
    gridheight: [630, 530, 470, 470],
	disableProgressBar: "on",
	spinner: "off",
  });
  
  

  // +++++ Cubeportfolio
  // Types Grid
  $('#type-grid').cubeportfolio({
    layoutMode: 'mosaic',
    gapHorizontal: 30,
    gapVertical: 30,
  });
  
  //home Gallery
  $('#photo-gallery').cubeportfolio({
    filters: '#filters-gallery',
    loadMore: '#loadMore-gallery',
    loadMoreAction: "click",
    layoutMode: 'grid',
    mediaQueries: [{
      width: 1500,
      cols: 4
    }, {
      width: 1100,
      cols: 3
    }, {
      width: 800,
      cols: 3
    }, {
      width: 480,
      cols: 2
    }, {
      width: 320,
      cols: 1
    }],
    defaultFilter: '*',
    animationType: 'rotateSides',
    gapHorizontal: 30,
    gapVertical: 30,
    gridAdjustment: 'responsive',
    caption: 'zoom',
    displayType: 'sequentially',
    displayTypeSpeed: 100,
    lightboxDelegate: '.cbp-lightbox',
    lightboxGallery: true,
  });
  
  //Filter Property
  $('#property-gallery').cubeportfolio({
    filters: '#filters-property',
    layoutMode: 'grid',
    mediaQueries: [{
      width: 1500,
      cols: 4
    }, {
      width: 1100,
      cols: 3
    }, {
      width: 800,
      cols: 3
    }, {
      width: 480,
      cols: 2
    }, {
      width: 320,
      cols: 1
    }],
    defaultFilter: '*',
    animationType: 'fadeOut',
    gapHorizontal: 30,
    gapVertical: 30,
    gridAdjustment: 'responsive',
    caption: 'zoom',
    displayType: 'sequentially',
    displayTypeSpeed: 100,
  });
  
  //Testinomial Page
  $('#testinomial-masonry').cubeportfolio({
    layoutMode: 'grid',
    gapHorizontal: 50,
    gapVertical: 20,
    gridAdjustment: 'responsive',
    mediaQueries: [{
      width: 1500,
      cols: 3
    }, {
      width: 1100,
      cols: 3
    }, {
      width: 800,
      cols: 3
    }, {
      width: 480,
      cols: 2
    }, {
      width: 320,
      cols: 1
    }],
  });
  
  
 
  // +++++ Fact Counters
  $(".number-counters").appear(function() {
    $(".number-counters [data-to]").each(function() {
      var e = $(this).attr("data-to");
      $(this).delay(6e3).countTo({
        from: 1,
        to: e,
        speed: 3000,
        refreshInterval: 50
      })
    })
  });
  
  
  // +++++ Parallax Backgrounds
  $('#parallax').parallax('50%', 0.3);
  $('#parallax_two').parallax('50%', 0.3);
  $('#parallax_three').parallax('50%', 0.3);
  $('#testinomial').parallax('50%', -0.3);
  $('#parallax_four').parallax('50%', 0.1);
  
  $('.fancybox').fancybox();
});