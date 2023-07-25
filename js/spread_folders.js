		var dir,fnc,fnccut,imgs,filename,fileextension;
			dir="images/folders/"+fn;
			fileextension = ".png";

			$.ajax({url:dir,success:function (data) {
			        $(data).find("a:contains("+fileextension+")").each(function(){
			            // filename=this.href.replace(window.location.host,"").replace("http://", "").replace("lincoln/NFTU", "");
			            filename=this.href.replace(window.location.host,"").replace("https://", "").replace("", "");
							$(".folderspace").append("<img id='theImg' src='"+dir+filename + "'>");
			           		imgs=document.getElementById("theImg");
			           		imgs.classList+="endfolders";
			           	fnc=filename.replace(".png","").replace("/lincoln/NFTU/","").replace("/","");
			           	$("#theImg").attr('id', fnc);
			           		var i = 0;
							$('.endfolders').each(function () {
							    var img = new Image();
							    img.onload = function () {
							        i++;
							        console.log($(this).attr('src') + ' - done!');
							        if(i==$('.endfolders').length){
							            console.log("all folders loaded")
							        }
							        else{
							        	console.log("failed folders loaded")
							        }
							    }
							    img.src = $(this).attr('src');
							});
			        });
			    }
			});

		function load(){
			$(".folderspace").html("");
			dir="images/folders/"+fn;
			$.ajax({url:dir,success:function (data) {
			        $(data).find("a:contains("+fileextension+")").each(function(){
			            // filename=this.href.replace(window.location.host,"").replace("http://", "").replace("lincoln/NFTU", "");
			            filename=this.href.replace(window.location.host,"").replace("https://", "").replace("", "");
							$(".folderspace").append("<img id='theImg' src='"+dir+filename + "'>");
			           		imgs=document.getElementById("theImg");
			           		imgs.classList+="endfolders";
			           	fnc=filename.replace(".png","").replace("/lincoln/NFTU/","").replace("/","");
			           	$("#theImg").attr('id', fnc);
			           		var i = 0;
							$('.endfolders').each(function () {
							    var img = new Image();
							    img.onload = function () {
							        i++;
							        console.log($(this).attr('src') + ' - done!');
							        if(i==$('.endfolders').length){
							        	console.log("all folders loaded")
							        	$('.endfolders').animate({opacity:'1'}, 1000);
							            folder_spread();
							        }
							        else{
							        	$(".endfolders").css("opacity","0");
							        	console.log("failed folders loaded")
							        }
							    }
							    img.src = $(this).attr('src');
							});
			        });
			    }
			});
		}

		var tweentime=500;
		var tweendroptime=1000;
		var rrmax=400;
		var rrmin=rrmax/2;
		var rrmaxy=350;
		var rrminy=rrmaxy/2;

		function folder_spread(){

		var elements = document.getElementsByClassName("endfolders");

		function animate(time) {
			requestAnimationFrame(animate);
			TWEEN.update(time);
		}
		requestAnimationFrame(animate);
			var c1={x:0,y:0};var tween=new TWEEN.Tween(c1).
			to({x:(Math.random()*rrmax)-rrmin,y:(Math.random()*rrmaxy)-rrminy},tweentime,createjs.Ease.InOutQuint)
			.onUpdate(function(){$("#image1").css('transform','translate('+c1.x+'px,'+c1.y+'px)');}).start();
			var c2={x:0,y:0};var tween=new TWEEN.Tween(c2).
			to({x:(Math.random()*rrmax)-rrmin,y:(Math.random()*rrmaxy)-rrminy},tweentime,createjs.Ease.InOutQuint)
			.onUpdate(function(){$("#image2").css('transform','translate('+c2.x+'px,'+c2.y+'px)');}).start();
			var c3={x:0,y:0};var tween=new TWEEN.Tween(c3).
			to({x:(Math.random()*rrmax)-rrmin,y:(Math.random()*rrmaxy)-rrminy},tweentime,createjs.Ease.InOutQuint)
			.onUpdate(function(){$("#image3").css('transform','translate('+c3.x+'px,'+c3.y+'px)');}).start();
			var c4={x:0,y:0};var tween=new TWEEN.Tween(c4).
			to({x:(Math.random()*rrmax)-rrmin,y:(Math.random()*rrmaxy)-rrminy},tweentime,createjs.Ease.InOutQuint)
			.onUpdate(function(){$("#image4").css('transform','translate('+c4.x+'px,'+c4.y+'px)');}).start();
			var c5={x:0,y:0};var tween=new TWEEN.Tween(c5).
			to({x:(Math.random()*rrmax)-rrmin,y:(Math.random()*rrmaxy)-rrminy},tweentime,createjs.Ease.InOutQuint)
			.onUpdate(function(){$("#image5").css('transform','translate('+c5.x+'px,'+c5.y+'px)');}).start();
			var c6={x:0,y:0};var tween=new TWEEN.Tween(c6).
			to({x:(Math.random()*rrmax)-rrmin,y:(Math.random()*rrmaxy)-rrminy},tweentime,createjs.Ease.InOutQuint)
			.onUpdate(function(){$("#image6").css('transform','translate('+c6.x+'px,'+c6.y+'px)');}).start();
			var c7={x:0,y:0};var tween=new TWEEN.Tween(c7).
			to({x:(Math.random()*rrmax)-rrmin,y:(Math.random()*rrmaxy)-rrminy},tweentime,createjs.Ease.InOutQuint)
			.onUpdate(function(){$("#image7").css('transform','translate('+c7.x+'px,'+c7.y+'px)');}).start();
		}

	