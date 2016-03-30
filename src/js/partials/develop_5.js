try{
    var bLazy = new Blazy({
            success: function(element){
          setTimeout(function(){
        var parent = element.parentNode;
        parent.className = parent.className.replace(/\bloading\b/,'');
          }, 200);
            }
   });
    function butter(){
        $('.butter').click(function() {
            $(this).toggleClass('active');
            if($(this).hasClass('active')){
                $('.top-menu ul').addClass('slideThis');
            }else{
                $('.top-menu ul').removeClass('slideThis');
            }
        });
    }
    function search(){
        $('.search-show').click(function() {
            $(this).toggleClass('active');
            if($(this).hasClass('active')){
                $('.search form').addClass('slideThis');
            }else{
                $('.search form').removeClass('slideThis');
            }
        });
    }
    var canIUse = false;
    function prod01(){
        if(canIUse == true){
            $('.prod01-wrap .item .txt').click(function() {
                $(this).toggleClass('active');
             });
        }
    }

    function butterB(){
        $(document).on('click touchstart',function (event){
          if($(window).width()<992){
              var div = $('.top-menu ul');
              var menuMobile = $('.butter');
              var div2 = $('.search form');
              var div3 = $('.prod01-wrap .item .txt');
              var menuMobile2 = $('.search-show');
              if (!div.is(event.target) && div.has(event.target).length === 0 && !menuMobile.is(event.target) && menuMobile.has(event.target).length === 0){
                      menuMobile.removeClass('active');
                      div.removeClass('slideThis');
              }
              if (!div2.is(event.target) && div2.has(event.target).length === 0 && !menuMobile2.is(event.target) && menuMobile2.has(event.target).length === 0){
                      menuMobile2.removeClass('active');
                      div2.removeClass('slideThis');
              }
              if (!div3.is(event.target) && div3.has(event.target).length === 0){
                      div3.removeClass('active');
              }
          }
        });
    }

    function resizerForSlider(){
      var sliderHtml = $('.coin-slider');
      sliderHtml.removeClass('coin-slider');
      sliderHtml.attr('id','coin-slider');
      $('.topest-element').append(sliderHtml);
      $('#coin-slider').coinslider({ width: 912, navigation: false, delay: 3000 });
    }



    function callSliderInit(){

      var sliderMarkup = $('#coin-slider')[0];

      function initSlider(widthSome){
        $('#coin-slider').remove();
        $('.topest-element').append(sliderMarkup);
        $('#coin-slider').coinslider({ width: widthSome, navigation: false, delay: 3000, effect: 'random', sDelay: 90,spw: 7,sph: 2 });
      }

      var widthSome = $('.topest-element').width();

      initSlider(widthSome);

      var timer = null;

      $(window).resize(function(){
         clearTimeout(timer);
         timer = setTimeout(function(){
            widthSome = $('.topest-element').width();
            initSlider(widthSome);
         },500);
      });

    }

    $(document).ready(function(){
      //resizerForSlider();

      callSliderInit();

      butterB();
        if($(window).width()<992){ canIUse = true;}else{ canIUse = false;};
         butter();
         search();
         prod01();
         $('.slider').slick({
            dots: false,
              infinite: true,
              speed: 300,
              arrows:true,
              slidesToShow: 4,
              slidesToScroll: 1,
              responsive: [
                {
                  breakpoint: 930,
                  settings: {
                    slidesToShow: 3,
                  }
                },
                {
                  breakpoint: 720,
                  settings: {
                    slidesToShow: 2,
                  }
                },
                {
                  breakpoint: 530,
                  settings: {
                    slidesToShow: 1,
                  }
                }

              ]
         });
    });

    $(window).load(function(){

    });

    $(window).resize(function(){
        if($(window).width()<992){ canIUse = true;}else{ canIUse = false;};
    });






}
catch(e){

    console.log('develop_5.js \n Error! '+e.name+':'+e.message+'\n'+e.stack);

}