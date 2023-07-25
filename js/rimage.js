$(document).ready(function() {
  var bodyWidth = window.innerWidth;
  var bodyHeight = window.innerHeight;
  $('.di').each(function(idx, img) {
    var randPosX = Math.floor((Math.random() * bodyWidth)-50);
    var randPosY = Math.floor((Math.random() * bodyHeight)-50);
    $(img).css('left', randPosX);
    $(img).css('top', randPosY);
  });
});

  var im=false;

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
   im=true;
  }

  $(document).ready(function() {
    var a = 1;
    if (im==false) {

    $( function() {
      $(".di").draggable({containment: "window"});
    });

    $(".di").mousedown(function(){
      $(this).css("z-index", a++);
      $(this).css("background-color", "#fff");
      $(this).css("border", "10px solid #bbb");
      $(this).css("opacity", "0.4");
    })

    $(".di").mouseup(function(){
      $(this).css("z-index", a++);
      $(this).css("background-color", "transparent");
      $(this).css("border", "10px solid transparent");
      $(this).css("opacity", "1");
    })
  }

  });