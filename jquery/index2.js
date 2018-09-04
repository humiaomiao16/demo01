









$(function(){
  $(".floor .ding").click(function() {
      $("html,body").animate({scrollTop:0}, 500);
  }); 
 })


$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>500){
			$('.floor').css({
				position:'fixed',
				top:'85px',
				right:'25px'
			})
		}else if($(window).scrollTop()<500){
			$('.floor').css({
				position:'absolute',
				top:'280px',
				right:'-56px'
			})
		}
	})

	$('.floor ul li').click(function(){
		var index=$(this).index();
		//console.log(index);
		var top=$('.floor_num').eq(index).offset().top;
		$('html').animate({scrollTop:top},500);
	})

	var heights = [];
	$('.floor_num').each(function(){
		heights.push($(this).offset().top);
	})
	console.log(heights);

	$(window).scroll(function(){
	//获取当前的滚动距离
		var top = $(window).scrollTop();
		//console.log(top);
		//声明变量
		var index;
		//遍历
		for(var i=0;i<heights.length;i++){
			//判断top
			if(top<=heights[0]){
				index=0;
				//console.log(heights[0]);
				$('.floor ul li').eq(index).css('background','#ff8815').css('color','#fff').siblings().css('background','#fff').css('color','');
				$('.floor .ding').css('display','none');
			}else if(top>=heights[i]&&top<heights[i+1]){
				index = i+1;
				//console.log(i)
				$('.floor ul li').eq(index).css('background','#ff8815').css('color','#fff').siblings().css('background','#fff').css('color','');
				$('.floor .ding').css('display','block');
			}else if(top>=heights[heights.length-1]){
				index = heights.length-1;
				$('.floor ul li').eq(index).css('background','#ff8815').css('color','#fff').siblings().css('background','').css('color','');
			}
		}

	})

})







