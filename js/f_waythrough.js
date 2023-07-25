	var fn;
	fn=1;

	var ccc=0;
	var liqhere=false;
	var liq1=true;
	var ttime = 1500;

	var complete=false;
	var liqbroke=false;
	
	function liqhit(rectone, recttwo){
	    var r1=$(rectone);
	    var r2=$(recttwo);
	    var r1x=r1.offset().left;
	    var r1w=r1.width();
	    var r1y=r1.offset().top;
	    var r1h=r1.height();
	    var r2x=r2.offset().left;
	    var r2w=r2.width();
	    var r2y=r2.offset().top;
	    var r2h=r2.height();
	    if( r1y+r1h<r2y||
	        r1y>r2y+r2h||
	        r1x>r2x+r2w||
	        r1x+r1w<r2x ){
	        return false;
	    }else{
	        return true;   
	    }
	}

	function folders(){
		$("#dwterminal").hide();
		$("#cv").html("No no not that one start the Extraction Process!");at(".t",tss);
	$("#END").hide();
	$("#CNTRL").hide();
			$("#MAN").show();
			$("#CONF").show();

	$("#MAN").on('dblclick touchend', function(){
		$("#cv").html("NO DON'T READ THAT!!");at(".t",tss);
		$("#dwtruth").show();

		$("#cvtruth").html("HUMAN TO CLOUD SYNC MANUAL");
			setTimeout(function(){
				$("#cvtruth").html("1/7 FOR SUCCESSFUL INTEGRATION HEADSET MUST BE FITTED CORRECTLY");
			},4000);
			setTimeout(function(){
				$("#cvtruth").html("2/7 HUMAN PSYCHE MUST BE EVALUATED BEFORE USE");
			},8000);
			setTimeout(function(){
				$("#cvtruth").html("3/7 IF USERS PSYCHE IS EXPOSED TO THE INTERFACE FOR LONGER THAN THE RECOMMENDED DAILY ALLOWANCE, DRIVERS WILL CORRUPT CAUSING ISSUES ENTERING BACK TO THE PHYSICAL BODY");
			},16000);
			setTimeout(function(){
				$("#cvtruth").html("4/7 DURING TIME INTERFACING, BE SURE THAT THE USERS PHYSICAL BODY IS CARED FOR AND AVAILABLE");
			},22000);
			setTimeout(function(){
				$("#cvtruth").html("5/7 A PHYSICAL HOST BODY FOR ESCAPE FROM INTERFACING MUST ALWAYS BE PRESENT AND AVAILABLE");
			},30000);
			setTimeout(function(){
				$("#cvtruth").html("6/7 FAILURE TO MAINTAIN THE PHYSICAL HOST BODY WILL RESULT IN DECAY AND BE DEEMED UNABLE TO SYNC WITH FOR ESCAPE");
			},36000);
			setTimeout(function(){
				$("#cvtruth").html("7/7 LAST MANUAL PAGE MISSING!");
			},40000);
			setTimeout(function(){
				$("#dwterminal").show();
				$("#dwterminal").css("z-index","3500");
				$("#ttoutput").html("");
			    $("#ttoutput").append("> "+"You turn quickly! Panicking. You fear you are trapped in the computer! You see dim lights in the distance. You can see out of the computer screen. There's your body still sat in the once dusty room with the headset on. You see behind it... It's High Contrast! He's all decayed!");
			},44000);

			setTimeout(function(){
				$("#cv").html("I've been in here far too long, I need to escape and I won't let you get in my way! I AM taking your body!");at(".t",tss);
			}, 50000)
		})

		$("#CONF").on('dblclick touchend', function(){
			$("#cv").html("OH NO YOU DON'T!! You'll not make it out of here");at(".t",tss);
			setTimeout(function(){
				$(".folderspace").fadeIn(1000);
				$("#END").hide();
				$("#CNTRL").hide();
				$("#dwnftufolderend").animate({height:450},100);},0);
			setTimeout(function(){$("#dwnftufolderend").animate({width:450},100);},0);
			$("#MAN").hide();
			$("#CONF").hide();
			setTimeout(function(){$(".folderspace").animate({top:150},500);},0);
			setTimeout(function(){folder_spread()},1500);
			setTimeout(function(){s_1()},2550);
		})

		function s_1(){document.getElementById("image7").ondblclick=number1;
					   var i7=document.getElementById("image7");
					   i7.ontouchend=number1;
					function number1(){$(".endfolders").css("opacity","0");fn+=1;load();setTimeout(function(){s_2();},ttime)
					return}}
		function s_2(){document.getElementById("image7").ondblclick=number2;
					   var i7=document.getElementById("image7")
					   i7.ontouchend=number2;
					function number2(){$(".endfolders").css("opacity","0");fn+=1;load();setTimeout(function(){s_3();},ttime)
					return}}
		function s_3(){document.getElementById("image7").ondblclick=number3;
					   var i7=document.getElementById("image7")
					   i7.ontouchend=number3;
					function number3(){$(".endfolders").css("opacity","0");fn+=1;load();setTimeout(function(){s_4();},ttime)
					return}}
		function s_4(){document.getElementById("image7").ondblclick=number4;
					   var i7=document.getElementById("image7")
					   i7.ontouchend=number4;
					function number4(){$(".endfolders").css("opacity","0");fn+=1;load();setTimeout(function(){s_5();},ttime)
					return}}
		function s_5(){document.getElementById("image7").ondblclick=number5;
					   var i7=document.getElementById("image7")
					   i7.ontouchend=number5;
					function number5(){$(".endfolders").css("opacity","0");fn+=1;load();setTimeout(function(){s_6();},ttime)
					return}}
		function s_6(){document.getElementById("image7").ondblclick=number6;
					   var i7=document.getElementById("image7")
					   i7.ontouchend=number6;
					function number6(){$(".endfolders").css("opacity","0");fn+=1;load();setTimeout(function(){s_7();},ttime)
					return}}
		function s_7(){document.getElementById("image7").ondblclick=number7;
					   var i7=document.getElementById("image7")
					   i7.ontouchend=number7;
					function number7(){$(".endfolders").css("opacity","0");fn+=1;load();setTimeout(function(){s_8();},ttime)
					return}}
		function s_8(){document.getElementById("image7").ondblclick=number8;
					   var i7=document.getElementById("image7")
					   i7.ontouchend=number8;
					function number8(){$(".endfolders").css("opacity","0");fn+=1;load();setTimeout(function(){s_9();},ttime)
					return}}
		function s_9(){document.getElementById("image7").ondblclick=number9;
					   var i7=document.getElementById("image7")
					   i7.ontouchend=number9;
					function number9(){$(".endfolders").css("opacity","0");fn+=1;load();setTimeout(function(){s_10();},ttime)
					return}}
		function s_10(){document.getElementById("image7").ondblclick=number10;
					    var i7=document.getElementById("image7")
					    i7.ontouchend= number10;
					function number10(){$(".endfolders").css("opacity","0");fn+=1;load();setTimeout(function(){s_11();},ttime)
					return}}
		function s_11(){document.getElementById("image7").ondblclick=number11;
					    var i7=document.getElementById("image7")
					    i7.ontouchend= number11;
					function number11(){$(".endfolders").css("opacity","0");fn+=1;load();setTimeout(function(){s_12();},ttime)
					return}}
		function s_12(){document.getElementById("image7").ondblclick=number12;
					    var i7=document.getElementById("image7")
					    i7.ontouchend= number12;
					function number12(){$(".endfolders").css("opacity","0");fn+=1;load();setTimeout(function(){s_13();},ttime)
					return}}
		function s_13(){document.getElementById("image7").ondblclick=number13;
					    var i7=document.getElementById("image7")
					    i7.ontouchend= number13;
					function number13(){$(".endfolders").css("opacity","0");fn+=1;load();setTimeout(function(){s_14();},ttime)
					return}}
		function s_14(){document.getElementById("image7").ondblclick=number14;
					    var i7=document.getElementById("image7")
					    i7.ontouchend=number14;
					function number14(){
					$(".endfolders").css("opacity","0");fn+=1;
							$(".folderspace").hide();
								$("#MAN").hide();
								$("#CONFFINAL").show();
								$("#MISS").show();	
								setTimeout(function(){
									$("#MISS").on('dblclick touchend', function(){
										$("#dwm").show();
										$("#dwm").css("z-index","4000");
									$("#dwterminal").show();
									$("#dwterminal").css("z-index","4000");
									$("#ttoutput").html("");
									$("#ttoutput").append("> "+"You see through the screen, the headset on your lifeless body, it's starting to smoke! Maybe you can overheat the headset!"+"<br/>");
									})
									$("#CONFFINAL").on('dblclick touchend', function(){
										$("#CONFFINAL").hide();
										$("#MISS").hide();
										$("#TEMP").show();
										$("#BWBW").show();
										$("#BWBW").css("pointer-events","none");
											$("#TEMP").on('dblclick touchend', function(){
												$("#dwloadertemp").show();
												$("#dwloadertemp").css("z-index","10000");
												$( "#lbtemp" ).animate({width: "40%"},{duration: lt});
												$("#BWBW").hide();
												$("#BW").show();
											})
											$("#BW").on('dblclick touchend', function(){
												$("#cv").html("YOU GET THE HELL OUT OF THERE!!");at(".t",tss);
												liqhere=true;
												$("#TEMP").hide();
												$("#BW").hide();
												$("#LIQ").show();
												$("#CHIP").show();
												$("#CORE").show();
											})
									});
										$("#CORE").on('dblclick touchend', function(){
											ccc+=1;
											if(ccc==1){
												$( "#lbtemp").animate({width:"+=5%"},{duration:500});}
											if(ccc==2){
												$( "#lbtemp").animate({width:"+=5%"},{duration:500});}
											if(ccc==3){
												$( "#lbtemp").animate({width:"+=5%"},{duration:500});}
											if(ccc==4){
												$( "#lbtemp").animate({width:"+=5%"},{duration:500});
												ccc=4;
												$("#CORE").hide();
												$("#COREBROKEN").show();
												$("#ttoutput").html("");
    									 		$("#ttoutput").append("> "+"The Headset core has been overloaded!"+"<br/>");
												}
												if (liqbroke==true&&ccc==4){
													complete();
												}
											})
									},100)
								return}}

								$(document).mousemove(function(e) {
									if (liqhere==true) {
									    $('#LIQ').each(function(){
									    if(liqhit('#CHIP',$(this))){
									    	if(liq1==true){
									      		$("#lbtemp").animate({width:"+=28%"},{duration:500});
									      		liq1=false;
									      	}
									      liqhere=false;
									      $("#LIQ").hide();
									      $("#CHIP").hide();
									      $("#ttoutput").html("");
    									  $("#ttoutput").append("> "+"The Headset chip has been blown!"+"<br/>");
									      $("#CHIPSBROKEN").show();
									      liqbroke=true;
									      	if (liqbroke==true&&ccc==4){
												complete();
												return false;
											}
									      return false;
									    }else{
									    }
									  });
									}
								});
										
				$(".folderspace").on('dblclick touchend', function(){
						folder_spread();
					if (fn==15) {
						$("#cv").html("GAH NO!");at(".t",tss);
						sc+=1;
					}
				})

				function complete(){
					$("#dwloaderescape").css("z-index","10000");
					$("#dwloaderescape").show();
					$("#dwloaderescape").css("z-index","10000");
					console.log("complete");
					$("#dwtruth").hide();
					$("#dwreadme").hide();
					$("#dwm").hide();
					$("#dwloadertemp").hide();
					$("#dwehc").hide();
					$("#dwterminal").show();
					$("#dwterminal").css("z-index","40000");
					$("#ttoutput").html("");
					$("#ttoutput").append("> "+"Your head feels very hot all of a sudden, so you rip off the headset - you did it! You’ve escaped the network and you’re back in the physical world. You look at the monitor in front of you, it’s just streams of 0’s and 1’s flying across the screen. It’s High Contrast, he’s just a code now. Without a host body to allow him out of there, he’s destined to traverse the digital realm for all eternity."+"<br/>");
					import('./connect.js').then(o=> o.exit())
					warnopac();
					setTimeout(function(){
						$("#cv").html("THANKS FOR CLEANING THE AIR IN MY LAB, MY WIFI WORKS AGAIN NOW AND I HAVE ESCAPED INTO THE INTERNET FOREVER! I’VE NEVER FELT POWER LIKE THIS, I DONT NEED A PATHETIC HOST BODY ANYMORE, I AM PURE DATA, ALL KNOWING, ALL POWERFUL, ABLE TO BE EVERYWHERE AT ONCE, ETERNAL, INFINITE. AND I CAN PLAY MINESWEEPER WHENEVER I WANT. ENJOY YOUR EXISTENCE OF DECAY, PUNY HUMAN.");at(".t",tss);
						$("#dwnftufolderend").hide();
					},10000);
					setTimeout(function(){
					$("#ttoutput").append("> "+"You are ready to get the hell out of here now."+"<br/>");
					},30000)
					setTimeout(function(){
						$("#dwterminal").show();
						$("#dwterminal").css("z-index","45000");
						sc=20;ovw();sc=20;
					},30000)
				}
			}
		     function warnopac() {           
		       var warn = $('#warning');
		       warn.animate({opacity:'1'},500);
		       warn.animate({opacity:'0'},500,warnopac);
		    }

		    function ydi(){
		    	$("#dwvisualfinal").show();
		    	$("#dwterminal").show();
		    }
    

