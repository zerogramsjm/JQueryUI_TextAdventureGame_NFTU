	var maintheme = document.getElementById("main");
	var started=0;
	var soundplaying=false;
	document.getElementById("main").loop=true;
	var bgmp;

	$("#NFTU_ICON").dblclick(function(){
        bgmp = document.createElement("audio");
            bgmp.src = "sound/main.mp3";
          var duration = 500;
          $({to:0}).animate({to:1}, duration, function() {
            // do stuff after `duration` elapsed
            bgmp.play();
			console.log("sound on")
			soundplaying=true;
			startsound();
			checkloop();
		})
	});

	  function checkloop(){
	      bgmp.addEventListener('ended', function() {
	        this.currentTime = 0;
	        this.play();
	    }, false);
	  }

	function startsound(){	
		$("#soundbtn").hide();
		$("#soundbtnoff").show();
	};

	function playmainaudio() {
		if (soundplaying==true) {
			$("#soundbtn").hide();
			$("#soundbtnoff").show();
			bgmp.play();
			checkloop();
		}
	}

	function pausemainaudio() {
		$("#soundbtn").show();
		$("#soundbtnoff").hide();
	bgmp.pause();
	}