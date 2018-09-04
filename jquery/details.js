













$(function(){
		//samll的move事件
		$('#small').mousemove(function(e){
			//move big显示
			$('#move,#big').show();
			//move的坐标=鼠标位置-small的偏移值-move的宽高一半
			var x=e.pageX-$(this).offset().left-($('#move').width()/2);
			var y=e.pageY-$(this).offset().top-($('#move').height()/2);
			//console.log(x,y);
			
			//判断边界
			if(x<=0){
				x=0
			}else if(x>=$('#small').width()-$('#move').width()){
				x=$('#small').width()-$('#move').width();
			}
			
			if(y<=0){
				y=0;
			}else if(y>=$('#small').height()-$('#move').height()){
				y=$('#small').height()-$('#move').height();
			}
			//move绑定坐标
			$('#move').css({left:x,top:y});
			//大图显示移动距离
			//大小图片比例
			var scale=$('#big>img').width()/$('#small>img').width();
			//console.log(scale);
			
			//设置big的移动距离
			$('#big').scrollLeft(x*scale);
			$('#big').scrollTop(y*scale);
			//big大图=samll图 src
			$('#big>img').attr('src',$('#small>img').attr('src'));
		}).mouseout(function(){
			//隐藏
			$('#move,#big').hide();
		})
		//点击toggle li 更换图片
		$('#click>li>img').mouseenter(function(){
			$('#small>img').attr('src',$(this).attr('src'));
		})
	})
