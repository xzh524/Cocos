(function(){
	//导航栏吸顶效果
	var nav = document.getElementsByClassName("fix-top")[0];
		window.onscroll = function(){
			var bd = document.documentElement || document.body;
			nav.style.top = 30-bd.scrollTop + "px";
			if (bd.scrollTop>=30) {
				nav.style.top = "0px";
			}else if(bd.scrollTop==0){
				nav.style.top = "30px";
			}
			
		}
}())
