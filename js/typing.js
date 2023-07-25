function at(elementClass, typingSpeed){
    var thhis = $(elementClass);
    thhis.css({
      "position": "relative",
      "display": "inline-block"
    });
    thhis.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
    thhis = thhis.find("#cv");
    var text = thhis.text().trim().split('');
    var amntOfChars = text.length;
    var newString = "";
    thhis.text("|");
    setTimeout(function(){
      thhis.css("opacity",1);
      thhis.prev().removeAttr("style");
      thhis.text("");
      for(var i = 0; i < amntOfChars; i++){
        (function(i,char){
          setTimeout(function() {        
            newString += char;
            thhis.text(newString);
          },i*typingSpeed);
        })(i+1,text[i]);
      }
    },100);
  }

  var cs=50;
  var ics=3000;
  var ehccs=17000;
  var ehhccs=19000;
  var ts=10;
  var tss=30;

  var a=1;
  var b=1;
  var c=1;
  var d=1;
  var enter=0;

  window.onload = (event) => {
    var ehcv=document.getElementById("ehcv");
    ehcv.muted=true;
    ehcv.controls = false; 
    ehcv.setAttribute('webkit-playsinline', 'webkit-playsinline');
  }

function cb(){

    if (sc==5&&a==1) {
      $( "#dwchat" ).show();
      $( "#dwchat" ).css("z-index", "1000");
      setTimeout(function(){$("#cv").html("You need to restore the power to the elevator. - HC");at(".t",ts);},cs);
      a=0;
    }

    if (sc==11&&b==1) {
      $( "#dwchat" ).show();
      $( "#dwchat" ).css("z-index", "1000");
      setTimeout(function(){$("#cv").html("You've made it! Follow the light! - HC");at(".t",ts);},cs);
      b=0;
    }

    if (sc==12&&c==1) {
      $( "#dwchat" ).show();
      $( "#dwchat" ).css("z-index", "1000");
      setTimeout(function(){$("#cv").html("Please take a seat and put on the headset - HC");at(".t",ts);},cs);
      c=0;
    }

    if (sc==18&&d==1) {
      $( "#dwchat" ).show();
      $( "#dwchat" ).css("z-index", "1000");
      $( "#dwwm" ).css("z-index", "1001");
      setTimeout(function(){$("#dwvisual").fadeOut(1);},cs);
      setTimeout(function(){$("#dwnftuinventory").hide();},cs);
      setTimeout(function(){$("#cv").html("Join me - HC");at(".t",ts);},cs);
      setTimeout(function(){
        import('./connect.js').then(o=> o.enter())
      },3000)
      setTimeout(function(){$("#cv").html("BEGINNING UPLOAD SEQUENCE 01111001 01101111 01110101 00100000 01100001 01110010 01100101 00100000 01101110 01101111 01110111 00100000 01100101 01101110 01110100 01100101 01110010 01101001 01101110 01100111 00100000 00100010 01001110 01101111 01110100 01100101 01110011 00100000 01100110 01110010 01101111 01101101 00100000 01110100 01101000 01100101 00100000 01010101 01101110 01100100 01100101 01110010 01100111 01110010 01101111 01110101 01101110 01100100 00100010 00100000 01010111 01100101 01101100 01100011 01101111 01101101 01100101");at(".t",25);},ics);
      setTimeout(function(){$("#dwchat").animate({top:0},2000);},cs);
      setTimeout(function(){$("#dwchat").animate({height:650},5000);},ics);
      setTimeout(function(){$("#dwterminal").fadeOut(0);},ehccs);
      setTimeout(function(){
              $("#dwwm").fadeOut(1);
              $("#dwchat").fadeOut(1);
              $("#dwehc").show();
              ehcv.play();
            },ehccs);

      setTimeout(function(){
        // $("#cv").html("-");at(".t",tss);
        $("#cv").html("Amazing! You made it! I’ve lost track of time since getting trapped in here. I’ve been working on a ground-breaking way of making music by sending my thoughts straight into digital instruments, bypassing the physical world and by accident I found a way of uploading human consciousness into the computer realm. I’ve been intrigued by transhumanism for a number of years and it really is amazing in this virtual world however the wifi router overheated and I’ve been stuck in this limbo for God knows how long now. I’d also like to get back into the physical realm now, for a bit anyway - however I needed someone to manually reset the cooling fans so everything is functioning properly again. You can begin the extraction sequence now so I can escape!");at(".t",tss);
        $("#dwchat").fadeIn(1);
        $("#dwchat").css("z-index", "1004");
      },ehhccs);

      setTimeout(function(){$("#dwnftufolderend").show();$("#dwnftufolderend").css("z-index", "1005"); },ehhccs+20000);

      d=0;
    }

};
