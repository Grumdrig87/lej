jQuery(document).ready(function($){    
    if ($(window).width() > 993) {
        $('[data-nav] > ul >li').hover(function() {
            $(this).each(function() {
                $('[data-nav] li').toggleClass('transp');
            });
            $(this).removeClass('transp');
        });
        $('[data-soc]').hover(function() {
          $(this).each(function() {
              $('[data-soc]').toggleClass('transp');
          });
          $(this).removeClass('transp');
      });
    }

    //slider
    
    $('.rev__upr-arr').hover( function(){
        $(this).each(function() {
            $('.rev__upr-arr').toggleClass('transp');
        });
        $(this).removeClass('transp')
    })



    // 

    var helpers = {
        addZeros: function (n) {
            return (n < 10) ? n : '' + n;
        }
    };
    
    function sliderInit() {
      var $slider = $('[data-rev]');
      $slider.each(function() {
        var $sliderParent = $(this).parent();
        if ($($slider).length > 0) {
            $($slider).slick({
                dots: false,
                speed: 300,
                infinite: false,
                slidesToShow: 1,
                prevArrow: '[data-prev]',
                nextArrow: '[data-next]'
            });
        }
    
        if ($(this).find('.rev__card').length > 1) {
          $(this).siblings('.rev__upr').show();
        }
    
        $(this).on('afterChange', function(event, slick, currentSlide){
          $sliderParent.find('.rev__upr [data-curr]').html('0' + helpers.addZeros(currentSlide + 1));
        });
    
        var sliderItemsNum = $(this).find('.slick-slide').not('.slick-cloned').length;
        $sliderParent.find('.rev__upr [data-all]').html('0' + helpers.addZeros(sliderItemsNum));
    
      });
    };
    
    sliderInit();

    // // faq
    $('[data-faq]').click(function(){
      $(this).find('.faq__title').toggleClass('open');
      $(this).find('p').slideToggle(300);
    })
    // slide to id
    if($('[data-scroll]').length > 0) {
      $('[data-scroll]').on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    }

    // burger

    $('[data-burger]').click(function(){
      $('html').toggleClass("open");
      $(this).toggleClass("open");
      $('[data-nav]').toggleClass("open");
      $('body').toggleClass('open');
    });
})