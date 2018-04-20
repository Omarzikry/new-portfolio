$(document).ready(function () {
    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors: ['section1', 'section2', 'section3', 'section4'],
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide'],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        sectionsColor: ['#061E3B'],
        paddingTop: '3em',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: false,
        parallax: false,
        parallaxOptions: { type: 'reveal', percentage: 62, property: 'translate' },

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        lazyLoading: true,

        //events
        onLeave: function (index, nextIndex, direction) { },
        afterLoad: function (section1, index) { 
          $('.text h1').animate({right:'0'},1000)
         },
        afterRender: function () { },
        afterResize: function () { },
        afterResponsive: function (isResponsive) { },
        afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) { },
        onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) { }
    });
    Barba.Pjax.start();
    Barba.Prefetch.init();
    $('.menu').click(function () {
        $('.menu').toggleClass('open-button');
        $('.fullnav').toggleClass('open-nav');
        $('.fullnav a').toggleClass('nav-link-transition')
    })
    $('.nav1').addClass('dash-active')
    var url1 = "file:///C:/Users/OMAR%20Fucking/Documents/GitHub/new-portfolio/index.html#section1";
    var url2 = "file:///C:/Users/OMAR%20Fucking/Documents/GitHub/new-portfolio/index.html#section2";
    var url3 = "file:///C:/Users/OMAR%20Fucking/Documents/GitHub/new-portfolio/index.html#section3";
    var url4 = "file:///C:/Users/OMAR%20Fucking/Documents/GitHub/new-portfolio/index.html#section4";
      $(window).on('hashchange', function(e){
        if (location.href==url1){
            $('.nav2').removeClass('dash-active')
            $('.nav1').addClass('dash-active')
            $('.nav3').removeClass('dash-active')
            $('.nav4').removeClass('dash-active')
          }
        else if (location.href==url2){
            $('.nav1').removeClass('dash-active')
            $('.nav2').addClass('dash-active')
            $('.nav3').removeClass('dash-active')
            $('.nav4').removeClass('dash-active')
          }
          else if (location.href==url3){
            $('.nav2').removeClass('dash-active')
            $('.nav3').addClass('dash-active')
            $('.nav4').removeClass('dash-active')
            $('.nav1').removeClass('dash-active')
          }
          else if(location.href==url4){
            $('.nav3').removeClass('dash-active')
            $('.nav4').addClass('dash-active')
            $('.nav1').removeClass('dash-active')
            $('.nav2').removeClass('dash-active')
          }
        }
    
    
    
    );
    if (location.href==url1){
        $('.nav2').removeClass('dash-active')
        $('.nav1').addClass('dash-active')
      }
    else if (location.href==url2){
        $('.nav1').removeClass('dash-active')
        $('.nav2').addClass('dash-active')
        $('.nav3').removeClass('dash-active')
      }
      else if (location.href==url3){
        $('.nav2').removeClass('dash-active')
        $('.nav3').addClass('dash-active')
        $('.nav4').removeClass('dash-active')
      }
      else if(location.href==url4){
        $('.nav3').removeClass('dash-active')
        $('.nav4').addClass('dash-active')
      }

})


// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});

