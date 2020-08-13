$( "#div-ad-form" ).hide();
$( "#div-teacher-form" ).hide();
$( "#div-student-form" ).hide();
$("#but-ad").click(function(){
    $( "#div-ad-form" ).slideToggle("fast");
        } );
        $("#but-ad").hover(function(){
    $(this).css("background-color", "black");
    $(this).css("border-radius", "20px");
  });
  $("#but-ad").mouseout(function(){
    $(this).css("background-color", "#4285F4");
    $(this).css("border-radius", "0px");
  });

  $("#but-teacher").hover(function(){
    $(this).css("background-color", "black");
    $(this).css("border-radius", "20px");
  });
  $("#but-teacher").mouseout(function(){
    $(this).css("background-color", "#4285F4");
    $(this).css("border-radius", "0px");
  });

  $("#but-student").hover(function(){
    $(this).css("background-color", "black");
    $(this).css("border-radius", "20px");
  });
  $("#but-student").mouseout(function(){
    $(this).css("background-color", "#4285F4");
    $(this).css("border-radius", "0px");
  });

        $("#but-teacher").click(function(){
       $( "#div-teacher-form" ).slideToggle("fast");
        } );
        $("#but-student").click(function(){
       $( "#div-student-form" ).slideToggle("fast");
        } );  