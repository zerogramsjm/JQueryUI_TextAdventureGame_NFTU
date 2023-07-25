  $( function() {
    $(".dw").draggable({ handle: ".titlebar", containment: "window" });
    $(".dwterminal").draggable({ handle: ".titlebar"});
    $(".dwreadme").draggable({ handle: ".titlebar"});
    $(".dw").resizable();
    // $('#dwehc').dialog({resizable: false}); 
  });

  $(document).ready(function() {
    var a = 1;
    $(".dw").mousedown(function(){
      $(this).css("z-index", a++); 
    })
  });

  $('.dw').mousedown(function() {
      $(this).bringToTop();
  });