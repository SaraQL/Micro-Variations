var positionY;
var scrollTop;
var lastPositionX =0;

$( document ).ready(function() {
    //récupérer les dimension de la fenêtre :
    var hauteurFenetre = $(window).width();
    var largeurFenetre = $(window).height();
    scrollTop = $(window).scrollTop(); //récupérer la "quantité" de scroll
});   
////vous pouvez rédiger vos modification ici !



/////Ci-dessous la fonction permettant de déclancher des modifications en fonction du scroll
$(window).on('scroll', function(){
  scrollTop = $(window).scrollTop(); //création d'une variable contenant la "quantitée de scroll"
    
    $("#chemin").css({
      "top" : scrollTop/6,
    });

    $("#gauche").css({
      "scale" : (scrollTop*0.001)
    });

    $("#droite").css({
      "scale" : (scrollTop*0.001)
    });

});


$(window).on('mousemove', function(){
  positionY = event.pageY - scrollTop; // corection de la valeur de event.pageY pour qu'elle ne soit pas affectée par le scroll
    
  $("#gauche").css({
      "transform" : "rotate(" + positionY*0.2 + "deg)",
    });
  
    $("#droite").css({
      "transform" : "rotate(" + positionY*0.2 + "deg)",
    });

}); 


$(window).on( "mousemove", function(){
  
  $("#chemin").css({
    "filter" : "hue-rotate("+ event.pageX*0.15 +"deg)",
      
  });
}); 


$(window).on( "click", function(){
  
  $("#chemin").css({
    "filter" : "hue-rotate(0deg)",
    });

}); 



