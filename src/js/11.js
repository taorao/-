document.documentElement.style.fontSize = document.documentElement.clientWidth / 10 + 'px';
			
			if (localStorage.getItem('url1')) {
			var ccc = localStorage.getItem('url1').split(":");
			console.log((ccc))
			var oppo = '<p><i class="icon iconfont icon-fujin"></i>地点:' + (ccc[0]) + '&nbsp;&nbsp;&nbsp;&nbsp;' + (ccc[1]) + '&nbsp;&nbsp;&nbsp;&nbsp;' + (ccc[2])+'&nbsp;&nbsp;&nbsp;&nbsp;' +(ccc[3])+'&nbsp;&nbsp;&nbsp;&nbsp;'+(ccc[4]) + '</p>';
			$(".adress-content-1").append(oppo);
}   
$(".address .xz").click(function(){
	$(".address").css("display","none")
	$(".address-2").css("display","block")
	
})
$(".qd").click(function(e){
			var selet1=$("#selet1").val();
			var selet2=$("#selet2").val();
			var selet3=$("#selet3").val();
			var selet4=$("#selet4").val();
			var selet5=$("#selet5").val();
			var selet6=$("#selet6").val();
			var selet7=$("#selet7").val();
				e=e||window.event;
				e.preventDefault();
//				收货1.html
				console.log(selet1)
				var str=selet6+":"+selet1+":"+selet2+":"+selet3+":"+selet4+":"+selet5+":"+selet7;
				localStorage.setItem("url1",str);
				console.log(str)
				var arr = '<p><i class="icon iconfont icon-fujin"></i>地点:' + selet6 +  selet1 + selet2 +  selet3 + selet4 + +selet5+selet7+'</p>';
				$(".adress-content-1").append(arr);
				$(".address").css("display","block")
				$(".address-2").css("display","none")
			})