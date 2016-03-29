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

    function googleMap(mapWrap){
        function initialize() {
            var myLatlng = new google.maps.LatLng(cordX,cordY);
            var myOptions = {
                zoom: 16,
                center: myLatlng,
                disableDefaultUI: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                zoomControlOptions: {
                   position: google.maps.ControlPosition.LEFT_BOTTOM
                }
            };
            var map = new google.maps.Map(document.getElementById(mapWrap), myOptions);

            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                animation: google.maps.Animation.DROP,
            });
        }
        initialize();
    }


    $(document).ready(function(){
        vacancyShowMore();
        googleMap('map'); //id
    });

    $(window).load(function(){

    });

    $(window).resize(function(){

    });

}
catch(e){

    console.log('develop_4.js \n Error! '+e.name+':'+e.message+'\n'+e.stack);

}