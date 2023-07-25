    var sc;
    var dc;

	function ovw(){
		if (sc<=17) {
		cb();
			$("#dwvisual").css("z-index","50000");
			$("#dwvisual").show();
			$("#dwvisual").css("z-index","50000");
			document.getElementById("visualcue").src="images/vc/stage_"+sc+"/door_"+dc+"/1.png";

			$('#visualcue').error(function() {
			    $(this).attr('src', 'images/vc/stage_'+sc+'/door_'+dc+'/1.gif').addClass('no-img');
			});
		}
		if (sc==18) {
			return;
		}
	}