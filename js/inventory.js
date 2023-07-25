
//STAGE 01 - - - - - - - - - -

	var img

	var g_matches=false;
	var g_motherboard=false;
	var g_gum=false;

	var g_spring=false;
	var g_hose=false;
	var g_bag=false;

	var pickupobject = document.getElementById("pickupobject");
	var combinesound = document.getElementById("combine");

	function inv(){

		//GROUND FLOOR INVENTORY - - - - - 
		
		if (sc==5&&dc==1&&g_matches==false){
			$("#dwnftuinventory").css("z-index","50000");
			$("#dwnftuinventory").show();
			pickupobject.play();
			img=document.createElement('img'); 
				img.classList.add("geninv"),img.id="match",img.src='images/inv/matches.png'; 
	            document.getElementById('dwcinventory').appendChild(img);
	            g_matches=true;
			}
		if (sc==5&&dc==2&&g_motherboard==false){
			$("#dwnftuinventory").css("z-index","50000");
			$("#dwnftuinventory").show();
			pickupobject.play();
			img=document.createElement('img'); 
				img.classList.add("geninv"),img.id="motherboard",img.src='images/inv/motherboard.png'; 
	            document.getElementById('dwcinventory').appendChild(img);
	            g_motherboard=true;
			}
		if (sc==5&&dc==3&&g_gum==false){
			$("#dwnftuinventory").css("z-index","50000");
			$("#dwnftuinventory").show();
			pickupobject.play();
			img=document.createElement('img'); 
				img.classList.add("geninv"),img.id="gum",img.src='images/inv/gum.png'; 
	            document.getElementById('dwcinventory').appendChild(img);
	            g_gum=true;
			}

		console.log("have matches: "+g_matches);
		console.log("have motherboard: "+g_motherboard);
		console.log("have gum: "+g_gum);

		if (sc==14&&dc==1&&g_spring==false){
			$("#dwnftuinventory").css("z-index","50000");
			$("#dwnftuinventory").show();
			pickupobject.play();
			img=document.createElement('img'); 
				img.classList.add("geninv"),img.id="spring",img.src='images/inv/spring.png'; 
	            document.getElementById('dwcinventory').appendChild(img);
	            g_spring=true;dc=0;
			}
		if (sc==14&&dc==2&&g_hose==false){
			$("#dwnftuinventory").css("z-index","50000");
			$("#dwnftuinventory").show();
			img=document.createElement('img'); 
			pickupobject.play();
				img.classList.add("geninv"),img.id="hose",img.src='images/inv/hose.png'; 
	            document.getElementById('dwcinventory').appendChild(img);
	            g_hose=true;dc=0;
			}
		if (sc==14&&dc==3&&g_bag==false){
			$("#dwnftuinventory").css("z-index","50000");
			$("#dwnftuinventory").show();
			img=document.createElement('img');
			pickupobject.play();
				img.classList.add("geninv"),img.id="bag",img.src='images/inv/bag.png'; 
	            document.getElementById('dwcinventory').appendChild(img);
	            g_bag=true;dc=0;
			}

		console.log("have spring: "+g_spring);
		console.log("have hose: "+g_hose);
		console.log("have bag: "+g_bag);

		}

	function comb(){
		console.log("combining");
		if(g_motherboard==true&&g_gum==true&&sc==5) {
			combinesound.play();
			$("#motherboard").hide();
			$("#gum").hide();
			img=document.createElement('img'); 
					img.classList.add("geninv"),img.id="gummotherboard",img.src='images/inv/gummotherboard.png'; 
		            document.getElementById('dwcinventory').appendChild(img);
		            s_1_i_combined=true;
		            console.log("combines items 01");
	        }

	    if(g_spring==true&&g_hose==true&&g_bag==true&&sc==14) {
	    	combinesound.play();
			$("#spring").hide();
			$("#hose").hide();
			$("#bag").hide();
			img=document.createElement('img'); 
					img.classList.add("geninv"),img.id="filter",img.src='images/inv/filter.png'; 
		            document.getElementById('dwcinventory').appendChild(img);
		            s_2_i_combined=true;
		            console.log("combines items 02");
	        }
	}

