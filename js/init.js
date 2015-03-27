$(document).ready(function(){
	for(var i = 0; i < 900; i++){
		if(i < 312){			//我们活过的月数（years * 12 == mouths）
			$("#container").append("<span class='past'></span>");
		}else{
			$("#container").append("<span class='fature'></span>");
		
		}

	}
});
