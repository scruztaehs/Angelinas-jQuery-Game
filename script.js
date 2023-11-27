$(".start").click(function() {
	$(".go").text("Double click what drink you want, lemonade or tea!");
    $(".lemon").show();
     $(".tea").show();
     $(".start").hide();
    $(".no").hide();
   

});
$(".lemon").dblclick(function() {
$("body").css("background","url(https://wallsneedlove.com/cdn/shop/products/w0206_1s_Lemon-Removable-Peel-and-Stick-Wallpaper_Repeating-Pattern-Sample-1.jpg?v=1604087500)");
	$(".cup").show();
    $(".lemon").hide();
     $(".tea").hide();
    $(".flav").show();
    $(".flav").text("Pick a lemonade flavor!");
    $(".rl").show();
        $(".sl").show();
     $(".go").hide();
    
});
$(".tea").dblclick(function(){ $("body").css("background","url(https://media.istockphoto.com/id/1289079721/vector/teabags-seamless-pattern.jpg?s=612x612&w=0&k=20&c=QiviXxDVItgOM1b4993jr-pa_j0UW91LBtI3-3Dbg2o=)");
    $(".go").hide();
    $(".cup").show();
    $(".lemon").hide();
     $(".tea").hide();
    $(".flav").show();
    $(".flav").text("Pick a tea flavor!");
    $(".gt").show();
        $(".pft").show();
});
$(".gt").click(function(){
    $(".gtp").show();
        $(".gtp").text("Good choice! Start with boiling water, double click the 'HEAT' button to put the water to boil");
         $(".gt").hide();
         $(".pft").hide();
         $(".tea").hide();
         $(".flav").hide();
   $(".heat").show();
     
});
$(".pft").click(function(){
    $(".pftp").show();
        $(".pftp").text("Passion fruit tea sounds awesome! Lets get started with a boiling kettle of water double click 'HEAT'");
         $(".gt").hide();
         $(".pft").hide();
         $(".tea").hide();
         $(".flav").hide();
   $(".heat2").show();
    
     
});
$(".heat2").dblclick(function(){
    $(".gtp").hide();
    $(".heat2").hide();
    $(".boiling").show();
    $(".good").show();
     $(".good").text("Great while thats boiling lets get our passionfruit! click the passion fruit to cut it in half and remove the seeds.");
    $(".wholep").show();
    $(".pftp").hide();
     $(".ren").hide();
    });
$(".wholep").click(function(){
 
    $(".wholep").hide();
    $(".cutp").show();
    $(".ren").show();
      $(".ren").text("Seems like our water is done now, Click the kettle to add the lemon tea in.");
    $(".gtp").hide();
    $(".heat2").hide();
    $(".boiling").show();
    $(".good").hide();
     
    $(".pftp").hide();
    });
$(".cup").dblclick(function(){
     $(".ren").hide();

     $(".ren2").hide();
    $(".cup").hide();
    $(".cutp").hide();
    $(".boiling").hide();
    $(".teakettle2").hide();
    $(".oneyear").show();
     $(".rna").hide();
   $(".woop2").show();
      $(".woop2").text("YUMMY all that work was worth it. Enjoy!! :)");
});
$(".heat").dblclick(function(){
    $(".gtp").hide();
    $(".heat").hide();
    $(".boil").show();
    $(".good").show();
     $(".good").text("Good job!! all you need is to add a green tea leaves in the kettle!  click the kettle to add the green tea and honey");
    $(".pftp").hide();
    });
$(".boiling").click(function(){
       $(".boiling").hide();
       $(".teakettle2").show(); 
    $(".rna").show();
    $(".rna").text("Nice all we need to do now is add everything together in the cup! double click the jar");
    $(".finishgreenteap").hide();
     $(".ren").hide();
    
     });
    $(".boil").click(function(){
    $(".boil").hide();
        $(".teakettle").show();
        $(".good").hide();
        $(".finishgreenteap").show();
        $(".finishgreenteap").text("YAY! all we need to do is pour the tea click the cup and enjoy!");
    });
$(".teakettle").click(function(){
       $(".teakettle").hide();
       $(".cup").hide();
       $(".finishprogt").show();
    $(".finishgreenteap").hide();
    $(".donegtp").show();
    $(".donegtp").text("ENJOY!");
     });
    $(".rl").click(function(){
        $(".reg").text("Great! Now that we got some freshly squeezed lemon juice click the the juice to add to the glass!");
        $(".lemjuice").show();
         $(".rl").hide();
         $(".sl").hide();
         $(".tea").hide();
         $(".flav").hide();
  
});
$(".sl").click(function(){
    $(".strawberrylemon").show();
        $(".strawberrylemon").text("Great! Tap the image to add the strawberry and lemon juice mix to the cup!");
        $(".strawlemjuice").show();
         $(".rl").hide();
         $(".sl").hide();
         $(".tea").hide();
         $(".flav").hide();
});
              
$(".strawlemjuice").click(function() {
	$(".strawlemjuice").hide();
    $(".finalproductofstrawlemon").show();
        $(".strawberrylemon").hide();
     $(".cup").hide();
     $(".reg").hide();
    $(".rl").hide();
    $(".sl").hide();
    $(".lemjuice").hide();
    $(".flav").hide();
    $(".go").hide();
    $(".lemjar").text("Looks like your finished!! I added a bit of water and sugar so you dont need to worry about that, enjoy! :).");
});




$(".lemjuice").click(function() {
	$(".cup").hide();
    $(".closedjar").show();
     $(".reg").hide();
    $(".rl").hide();
    $(".sl").hide();
    $(".lemjuice").hide();
    $(".flav").hide();
    $(".go").hide();
    $(".lemjar").text("Looks like we need to add some water, sugar and maybe some lemon slices! Dont worry I can help with that, double click the jar with lemon juice to see the final product.");
});

$(".closedjar").dblclick(function() {
   $(".finalpro").show();
    $(".closedjar").hide();
     $(".lemjar").hide();
    $(".finalproductofregularlemonade").text("Looks great! Enjoy!!:) ");
    
});



$(".no").click(function() {
	$(".no").text("WOMP WOMP WOMP :C");
    $(".sadrejection").show();
});