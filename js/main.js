 $(document).ready(function () {
	 
	$(window).scroll(function(){
        if(scrollY > 20){
           $('.navbar').addClass('sticky')}
       	else{
           $('.navbar').removeClass('sticky');
       }    
    });
 });