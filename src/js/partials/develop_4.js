try{

    function vacancyShowMore(){
        $(document).on('click','.mobile-show-more span',function(event){
            $('.mobile-show-more').remove();
            $.ajax({
                url : 'vacant-ajax.php',
                success : function(data){
                    $('.vacant .items').append(data);
                }
            });
        });
    }

    $(document).ready(function(){
        vacancyShowMore();
    });

    $(window).load(function(){

    });

    $(window).resize(function(){

    });

}
catch(e){

    console.log('develop_4.js \n Error! '+e.name+':'+e.message+'\n'+e.stack);

}