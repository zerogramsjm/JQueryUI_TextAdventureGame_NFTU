	function game_over(){
      $("#dwterminal").show(); 
      $("#dwterminal").css("z-index", "1005"); 
      $("#ttoutput").html("");
      $("#ttinput").css("padding-bottom","0");

      $("#ttoutput").append("> "+"High Contrast takes control of your headset. Everything turns black. You hear a loud zapping noise followed by what could be a dial tone. Slowly you begin to see again and realise you are now looking out of the camera on the computer you were using moments ago. Your body is still there, sitting in front of you with the headset on. It’s very strange to see yourself like this from outside. Suddenly, your body starts to move. It takes off the headset and runs from the room. High Contrast must have uploaded his mind back into your body and left you trapped here in the computer! You start to wonder whether this whole thing was a scheme of his to use you to free himself. You notice in the inky dark of the room what looks like a body lying on the floor, that must be his old one. But it’s too far away for you to connect with. Perhaps you too could trick someone into coming to this warehouse and use their body to escape. You try to access the internet to send a message out but don’t know the WIFI password. Well, you’ve got all the time in the world now to try and guess it.");
      setTimeout(function(){
      	$("#cv").html("Muhahahah I am free!! Very sorry friend! I had spent so much time in the system, my body decayed and I needed a new host body. Much obliged! - HC");at(".t",tss);
      	$(".di").hide();
      	$("*").css("pointer-events", "none");
      	$("#dwehc").hide();
      	$("#dwnftufolderend").hide();
		lookOp();
      },7500);
	}

	function lookOp(){   
	    var title = $('#go_title');
	    title.css({display:'none'});
	    title.animate({opacity:'1'}, 1000);
	    title.animate({opacity:'0'}, 1000, lookOp);
	    $("#dwehc").css("z-index", "0");
	    $("#dwchat").css("z-index", "0");
	}
