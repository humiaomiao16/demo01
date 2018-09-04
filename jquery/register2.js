


	$(function(){
		
		//a标签的点击事件
		$('button').eq(4).click(function(){
			$('.zhe').css({width:$(document).width(),height:$(document).height()});
			$('.zhe').show();
			$('#zc').show();
		})
	
		//小叉叉的点击隐藏
		$('button').eq(1).click(function(){
			$('.zhe').fadeOut();
			$('#zc').fadeOut();
		})
		
		//show的拖拽
		$('#zc').mousedown(function(e){
			//添加鼠标箭头
			$(this).css('cursor','move');
			//获取鼠标与show不变的距离
			var x=e.pageX-$(this).offset().left;
			var y=e.pageY-$(this).offset().top;
			console.log(x,y);
			
			//文档的移动事件
			$(document).mousemove(function(ev){
				//获取移动的距离=当前鼠标坐标-与show不变的距离
				var ll=ev.pageX-x;
				var tt=ev.pageY-y;
				console.log(ll,tt);
				
				//判断边界
				if(ll<=0){
					ll=0
				}else if(ll>=$(document).width()-$('#zc').width()){
					ll=$(document).width()-$('#zc').width()
				}
				
				if(tt<=0){
					tt=0
				}else if(tt>=$(document).height()-$('#zc').height()){
					tt=$(document).height()-$('#zc').height()
				}	
				
				//show left top 赋值
				$('#zc').css({left:ll,top:tt});
			
			})
	
		
		})
		
		//取消拖拽
		$(document).mouseup(function(){
			//取消鼠标箭头
			$('#zc').css('cursor','');
			$(this).off('mousemove');
		})
	
	})

