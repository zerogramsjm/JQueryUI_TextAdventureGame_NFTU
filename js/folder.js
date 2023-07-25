  var fic=1;

  $( function() {
    $(".fi, .endfi").draggable({containment: "parent"});
  });

  $(document).ready(function() {
    var a=1;
    $(".fi, .endfi").mousedown(function(){
      $(this).css("z-index", a++);
      $(this).css("background-color", "#fff");
      $(this).css("border", "10px solid #bbb");
      $(this).css("opacity", "0.4");
    })

    $(".fi, .endfi").mouseup(function(){
      $(this).css("z-index", a++);
      $(this).css("background-color", "transparent");
      $(this).css("border", "10px solid transparent");
      $(this).css("opacity", "1");
    })

    $("#NFTU_ICON").on('dblclick touchend', function(){
      firstmessage();
    });

    $("#di43").on('dblclick', function(){
      firstmessage();
    });

    $("#read_me").on('dblclick touchend', function(){
      read_me();
    });

    function firstmessage(){
      $("#dwterminal").show();
      $("#dwterminal").css("z-index", "100");
        if (fic==1) {
        $("#dwvisual").show();
        document.getElementById("visualcue").src="images/vc/stage_0/door_0/1.png";
        $("#ttoutput").append("> "+"You are outside a warehouse on a desolate industrial estate. You received a text message from an unknown number about there being a rave here but you can not hear any music. Come to think of it, there are not any vehicles parked outside either. Feeling a chill in the air, you look over the bleak building in front of you. All the windows are sealed up with metal covers. The only way into this warehouse is a large metal door that seems to be controlled by a small electronic panel next to it."+"<br/>");
        fic=0;
      }
    }

    $('.close').on('click touchend', function(){
        $(this).parent().parent().hide();
    });

    function read_me(){
      $("#dwreadme").show();
    }

});