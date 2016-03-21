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


    $(document).ready(function(){
         butter();
    });

    $(window).load(function(){

    });

    $(window).resize(function(){

    });






}
catch(e){

    console.log('develop_5.js \n Error! '+e.name+':'+e.message+'\n'+e.stack);

}