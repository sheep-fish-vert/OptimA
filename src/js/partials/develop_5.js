try{

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



    $(document).ready(function(){
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