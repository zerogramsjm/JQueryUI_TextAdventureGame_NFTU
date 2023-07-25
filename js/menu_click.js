  var sp=1;
  var np=1;
  var rt=1;
  var nt=1;
  var lt=5000;
  var loadedup=false;

  var ap=1;
  var obj;
  
  $(".startbar").show();

window.onload = function() {
  loadedup=true;

  if (loadedup==true) {
    // $(".startbar").show();
  }

  $('#startsb').on('click', function () {
    if (ap==1) {
        obj = document.createElement("audio");
            obj.src = "sound/desktopstart.mp3";
            obj.id="obj";
          var duration = 5000;
          $({to:0}).animate({to:1}, duration, function() {
            obj.play();
            ap=0;
        })
      }
  });

  console.log("loaded");

  $("#startsb").mousedown(function() {
    $(this).css( "background-color", "#450199" );
    $(this).css( "color", "white" );
    console.log("menu click");
  });

  $("#startsb").mouseup(function() {
    $(this).css( "background-color", "#0BF907" );
    $(this).css( "color", "black" );
  });

  $("#startsb").click(function(){
    if (sp == 1) {
      $( "#dwloader" ).show();
      loader();
      setTimeout(function(){
        sp = 0;
      }, rt);
    }
  })

  function loader(){
    $( "#lb" ).animate({width: "88%"},{duration: lt});
    setTimeout(function(){
      $( "#dwloader" ).hide();
      setTimeout(function(){
        $(".di").show();
        nba();
        $('#notessb').css( "background-color", "#0BF907")
      }, 0)
    }, lt);
  }

    function nba(){
      $("#notessb").click(function(){
        $( "#dwnftufolder" ).show();
        if (np == 1) {
          var width = $("#dwcfolder").width()-200;
          var height = $("#dwcfolder").height()-200;
          $('.fi').each(function(idx, img) {
            var randPosX = Math.floor((Math.random() * width));
            var randPosY = Math.floor((Math.random() * height));
            $(img).css('left', randPosX);
            $(img).css('top', randPosY);
          });
          np = 0;
        }
          console.log("opening folder");
      })

      $("#notessb").mousedown(function() {
        $( this ).css( "background-color", "#450199" );
        $( this ).css( "color", "white" );
      });

      $("#notessb").mouseup(function() {
        $( this ).css( "background-color", "#0BF907" );
        $( this ).css( "color", "black" );
      });
    }

}
