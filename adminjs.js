$("#div-one-sub-one").hide();    
$("#div-one-sub-two").hide();    
$("#div-one-sub-three").hide();    
$("#div-one-sub-four").hide();    
$("#div-one-sub-five").hide();    

$("#div-two-sub-one").hide();    
$("#div-two-sub-two").hide();    
$("#div-two-sub-three").hide();    
$("#div-two-sub-four").hide();    
$("#div-two-sub-five").hide();       
$("#div-upload").hide();       

$("#div-one").hover(function(){
  $("#div-one-sub-one").slideToggle("slow");
  $("#div-one-sub-two").slideToggle("fast");
  $("#div-one-sub-three").slideToggle("slow");
  $("#div-one-sub-four").slideToggle("fast");
  $("#div-one-sub-five").slideToggle("slow");

});
$("#div-two").hover(function(){
  $("#div-two-sub-one").slideToggle("slow");
  $("#div-two-sub-two").slideToggle("fast");
  $("#div-two-sub-three").slideToggle("slow");
  $("#div-two-sub-four").slideToggle("fast");
  $("#div-two-sub-five").slideToggle("slow");
});
$("#div-two-sub-one").click(function(){
  $("#div-upload").show();
});