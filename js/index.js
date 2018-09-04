

/*中国大陆特效*/
ch=(function(){
	var ch=document.getElementsByClassName('ch')[0];
	var ch1=document.getElementsByClassName('ch1')[0];
	var ch1_lis=ch1.getElementsByTagName('li');
	
		ch.onmouseover=function(){
			ch1.style.display='block';
			ch.style.background='#fff';
		}
		ch.onmouseout=function(){
			ch1.style.display='none';
			ch.style.background='';
		}

		ch1.onmouseover=function(){
			ch1.style.display='block';
			ch.style.background='#fff';
		}
		ch1.onmouseout=function(){
			ch1.style.display='none';
			ch.style.background='';
		}
		for(var i=0;i<ch1_lis.length;i++){
			ch1_lis[i].index=i;
			//console.log(i);
			ch1_lis[i].onmouseover=function(){
			this.style.background='#f0f0f0';
		}
		ch1_lis[i].onmouseout=function(){
			this.style.background='';
		}
		ch1_lis[i].onclick=function(){
			ch.innerHTML=this.innerHTML+"∨";
			ch1.style.display='none';
		}

		}
})
ch();

//我的淘宝
mayTao=(function(){
	var my=document.getElementsByClassName('maytao')[0];
	var nav2=document.getElementsByClassName('nav2_may')[0];
	var nav2_p=nav2.getElementsByTagName('p');
	//console.log(nav2_p);
	for(var i=0;i<nav2_p.length;i++){
		nav2_p[i].index=i;
		my.onmouseover=function(){
			nav2.style.display='block';
			my.style.background='#fff';
			my.style.color='red';
		}
		my.onmouseout=function(){
			nav2.style.display='none';
			my.style.background='';
			my.style.color='';
			
		}
		nav2.onmouseover=function(){
			nav2.style.display='block';
		}
		nav2.onmouseout=function(){
			nav2.style.display='none';

		}
		nav2_p[i].onmouseover=function(){
			this.style.background='#f4f4f4';
			my.style.background='#fff';
		}
		nav2_p[i].onmouseout=function(){
			this.style.background='';
			my.style.background='';
		}
	}
})
mayTao();

//收藏夹
shouCang=(function(){
	var shou=document.getElementsByClassName('shou')[0];
	var sh_may=document.getElementsByClassName('shou_may')[0];
	var sh_p=sh_may.getElementsByTagName('p');
	var xing=document.getElementsByClassName('xing')[0];
	for(var i=0;i<sh_p.length;i++){
		sh_p[i].index=i;
		shou.onmouseover=function(){
			sh_may.style.display='block';
			shou.style.background='#fff';
			shou.style.color='red';
			xing.style.color='red';
		}
		shou.onmouseout=function(){
			shou.style.background='';
			sh_may.style.display='none';
			shou.style.color='';
			xing.style.color='';
		}
		sh_may.onmouseover=function(){
			sh_may.style.display='block';
			shou.style.background='#fff';
		}
		sh_may.onmouseout=function(){
			sh_may.style.display='none';
			shou.style.background='';
		}
		sh_p[i].onmouseover=function(){
			this.style.background='#f4f4f4';
		}
		sh_p[i].onmouseout=function(){
			this.style.background='';
		}
		//console.log(i);
	}
})
shouCang();

//卖家中心
maiJia=(function(){
	var mai=document.getElementsByClassName('mai')[0];
	var mai_may=document.getElementsByClassName('mai_may')[0];
	var p=mai_may.getElementsByTagName('p');
	for(var i=0;i<p.length;i++){
		p[i].index=i;
		mai.onmouseover=function(){
		mai.style.background='#fff';
		mai.style.color='red';
		mai_may.style.display='block';
		}
		mai.onmouseout=function(){
		mai.style.background='';
		mai.style.color='';
		mai_may.style.display='none';
		}
		mai_may.onmouseover=function(){
		mai_may.style.display='block';
		mai.style.background='#fff';
		}
		mai_may.onmouseout=function(){
		mai_may.style.display='none';
		mai.style.background='';
		}
		p[i].onmouseover=function(){
			this.style.background='#f4f4f4'
		}
		p[i].onmouseout=function(){
			this.style.background=''
		}
	}
})
maiJia();

//客服中心
keFu=(function(){
	var kfu=document.getElementsByClassName('kfu')[0];
	var kf=document.getElementsByClassName('kfu_may')[0];
	var p=kf.getElementsByTagName('p');
	for(var i=0;i<p.length;i++){
		kfu.onmouseover=function(){
			kfu.style.background='#fff';
			kfu.style.color='red';
			kf.style.display='block';
		}
		kfu.onmouseout=function(){
			kfu.style.background='';
			kfu.style.color='';
			kf.style.display='none';
		}
		kf.onmouseover=function(){
			kfu.style.background='#fff';
			kf.style.display='block';
		}
		kf.onmouseout=function(){
			kfu.style.background='';
			kf.style.display='none';
		}
		p[i].onmouseover=function(){
			this.style.background='#f4f4f4'
		}
		p[i].onmouseout=function(){
			this.style.background=''
		}
	}
})
keFu();


//网站导航
wangZhan=(function(){
	var wangZhan=document.getElementsByClassName('wangZhan')[0];
	var wz=document.getElementsByClassName('wz')[0];
	
	wangZhan.onmouseover=function(){
		wangZhan.style.background='#fff';
		wangZhan.style.color='red';
		wz.style.display='block';
	}
	wangZhan.onmouseout=function(){
		wangZhan.style.background='';
		wangZhan.style.color='';
		wz.style.display='none';
	}
	wz.onmouseover=function(){
	wangZhan.style.background='#fff';
	wz.style.display='block';
	}
	wz.onmouseout=function(){
	wangZhan.style.background='';
	wz.style.display='none';
	}
})
wangZhan();
//主题市场
zhuTi=(function(){
	var zhuti=document.getElementsByClassName('wz_zhuti')[0];
	var as=zhuti.getElementsByTagName('a');
	for(var i=0;i<as.length;i++){
		as[i].index=i;
		as[i].onmouseover=function(){
			this.style.background='#fc4200';
			this.style.color='#fff';
		}
		as[i].onmouseout=function(){
			this.style.background='';
			this.style.color='';
		}
	}
})
zhuTi();

//特色市场
teSe=(function(){
	var tese=document.getElementsByClassName('wz_tese')[0];
	var as=tese.getElementsByTagName('a');
	for(var i=0;i<as.length;i++){
		as[i].index=i;
		as[i].onmouseover=function(){
			this.style.background='#9fb838';
			this.style.color='#fff';
		}
		as[i].onmouseout=function(){
			this.style.background='';
			this.style.color='';
		}
	}
})
teSe();

//阿里App
aliLi=(function(){
	var alili=document.getElementsByClassName('wz_aliapp')[0];
	var as=alili.getElementsByTagName('a');
	for(var i=0;i<as.length;i++){
		as[i].index=i;
		as[i].onmouseover=function(){
			this.style.background='rgb(215, 86, 150)';
			this.style.color='#fff';
		}
		as[i].onmouseout=function(){
			this.style.background='';
			this.style.color='';
		}
	}
})
aliLi();

//精彩推荐集
jingCai=(function(){
	var jingcai=document.getElementsByClassName('wz_jincai')[0];
	var as=jingcai.getElementsByTagName('a');
	for(var i=0;i<as.length;i++){
		as[i].index=i;
		as[i].onmouseover=function(){
			this.style.background='#40a7de';
			this.style.color='#fff';
		}
		as[i].onmouseout=function(){
			this.style.background='';
			this.style.color='';
		}
	}
})
jingCai();
//小猫咪
mM=(function(){
	var jh_pic=document.getElementsByClassName('jh_pic')[0];
	var lis=jh_pic.getElementsByTagName('li');
		for(var i=0;i<lis.length;i++){
			lis[i].index=i;
			lis[i].onmouseover=function(){
				this.firstElementChild.style.display='block'
			}
			lis[i].onmouseout=function(){
				this.firstElementChild.style.display='none'
			}
		}
})
mM();
//main1左侧选项卡
//设置封装函数
xuanKa=(function(){
	//获取节点
	var hi=document.getElementsByClassName('hidden')[0];
	var hi_span=hi.getElementsByClassName('NEW1');
	var ma_lis=document.getElementsByClassName('main1_box1')[0].getElementsByTagName('li');
	//console.log(ma_lis);
	//遍历
	for(var i=0;i<ma_lis.length;i++){
		//保存自己下标
		ma_lis[i].index=i;
		ma_lis[i].onmouseover=function(){
			this.style.background='#ffe4dd';
			this.style.color='red';
			hi_span[this.index].style.display='block';
		}
		ma_lis[i].onmouseout=function(){
			this.style.background='';
			this.style.color='';
			hi_span[this.index].style.display='none';
		}
		hi_span[i].onmouseover=function(){
			this.style.display='block';
		}
		hi_span[i].onmouseout=function(){
			this.style.display='none';
		}
		
	}
})
xuanKa();

/*关闭二维码特效*/
close=(function(){
	var mm=document.getElementsByClassName('mm')[0];
	var close=document.getElementsByClassName('close')[0];
	close.onclick=function(){
		mm.style.display='none';
	}
})
close();


/*搜索框*/
souSuo=(function(){
	var baby=document.getElementById('baby');
	var lis=baby.getElementsByTagName('li');
	
	//console.log(baby);
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;

		lis[i].onclick=function(){
			for(var j=0;j<lis.length;j++){
				lis[j].className='';
				lis[this.index].style.background='';
			}
			lis[this.index].className='baby_pic';
		}
	}
		var a=baby.getElementsByTagName('a');
	for(var i=0;i<a.length;i++){
				a[i].index=i;
			a[i].onmouseover=function(){
				this.style.background='#ffe4dd';
			}
			a[i].onmouseout=function(){
				this.style.background='';
			}
			}
		var BA=document.getElementsByClassName('BA')[0];
		var	TI=document.getElementsByClassName('TI')[0];
		var	DI=document.getElementsByClassName('DI')[0];
		var	NV=document.getElementsByClassName('search_nav')[0];
			BA.onclick=function(){
				NV.style.display='block';
			}
			TI.onclick=function(){
				NV.style.display='none';
			}
			DI.onclick=function(){
				NV.style.display='block';
			}
})
souSuo();

//公告
gongGao=(function(){
	var gao=document.getElementsByClassName('gao')[0];
	var text_box=document.getElementById('text_box');
	var lis=gao.getElementsByTagName('li');
	var uls=text_box.getElementsByTagName('ul');
	

	
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onmouseover=function(){
			for(j=0;j<lis.length;j++){
				lis[j].firstElementChild.className='';
				uls[j].className='';
			}
			lis[this.index].firstElementChild.className='bian';
			uls[this.index].className='text_show';
		}
	}
	var a=text_box.getElementsByTagName('a');
	//console.log(a);
	for(var k=0;k<a.length;k++){
			a[k].index=k;
			a[k].onmouseover=function(){
				this.style.color='red';
			}
			a[k].onmouseout=function(){
				this.style.color='';
			}
		}
})
gongGao();

//菜单区选项卡
miMuTe=(function(){
	var pp1=document.getElementsByClassName('pp')[0];
	var pp2=document.getElementsByClassName('pp')[3];
	var pp3=document.getElementsByClassName('pp')[6];
	var ka_1=document.getElementsByClassName('ka_1')[0];
	var ka_2=document.getElementsByClassName('ka_2')[0];
	var ka_3=document.getElementsByClassName('ka_3')[0];
		//console.log(ka_1);
		pp1.onmouseover=function(){
			ka_1.style.display='block';
			ka_2.style.display='none';
			z.style.display='block';
			pp1.style.border='red';
		}
		pp2.onmouseover=function(){
			ka_2.style.display='block';
			ka_1.style.display='none';
			ka_3.style.display='none';
			z.style.display='block';
		}
		pp3.onmouseover=function(){
			ka_3.style.display='block';
			z.style.display='block';
			
		}
	var z=document.getElementsByClassName('z')[0];
	var c=document.getElementsByClassName('c')[0];
	var e=document.getElementsByClassName('e')[0];
	var d=document.getElementsByClassName('d')[0];
		c.onclick=function(){
		z.style.display='none';
		}
		d.onclick=function(){
		z.style.display='none';
		}
		e.onclick=function(){
		z.style.display='none';
		}
})
miMuTe();

/*阿里APP 二维码*/
aliApp=(function(){
	var a=document.getElementsByClassName('aliApp_pic')[0].getElementsByTagName('a');
	var SM=document.getElementsByClassName('aliApp_pic')[0].getElementsByClassName('SM');
	for(var i=0;i<a.length;i++){
		a[i].index=i;
		a[i].onmouseover=function(){
			SM[this.index].style.display='block';
		}
		a[i].onmouseout=function(){
			SM[this.index].style.display='none';
		}
	}

})
aliApp();



/*轮播图*/
(function(){
	//获取节点
	var img_lis=document.getElementById('img').getElementsByTagName('li');
	var num_lis=document.getElementById('num').getElementsByTagName('li');
	var left=document.getElementById('left');
	var right=document.getElementById('right');
	//console.log(img_lis);
	
	//设置自动轮播
	
	//设置默认下标 全局变量
	var i=0;
	
	//设置run的默认值
	var run=null;
	
	//装入函数 进入页面自动轮播
	function autoRun(){
		//设置自动轮播
		run=setInterval(function(){
			// 隐藏当前显示的图片 
			img_lis[i].removeAttribute('class');// 0 1 2 3 4 5
			//隐藏当前的li数字背景
			num_lis[i].firstElementChild.removeAttribute('class');
		
			//显示下一张 下标自增
			i++;
			
			//判断下标最大值 第六章要隐藏后显示下标0
			if(i==img_lis.length){
				i=0;
			}

			//显示下一张
			img_lis[i].setAttribute('class','active');// 1 2 3 4 5 0
			//显示下一个数字背景
			num_lis[i].firstElementChild.setAttribute('class','active_num');
			//console.log(i);
		},1500)
	} 
	
	//加载页面 默认自动轮播
	autoRun();

	
	//设置每一张图片的鼠标移入移出 清除定时器  
	for(var j=0;j<img_lis.length;j++){
	
		//移入
		img_lis[j].onmouseover=function(){
			//清除定时器
			clearInterval(run);
			//显示 箭头
			left.style.display='block';
			right.style.display='block';
		}
	
		//移出
		img_lis[j].onmouseout=function(){
			//重新调用函数
			autoRun();
			//隐藏 箭头
			left.style.display='none';
			right.style.display='none';
		}
	}
	
	
	//设置鼠标移入 数字显示相对应的背景和对应的图片
	for(var k=0;k<num_lis.length;k++){
		
		//找到当前数字li自己的下标
		num_lis[k].index=k;

		//鼠标移入遍历事件
		num_lis[k].onmouseover=function(){
			//alert(this.index)
			//鼠标移入清除定时器
			clearInterval(run);
			//移除之前数字背景 全局变量 自动轮播
			num_lis[i].firstElementChild.className='';
			//显示图片隐藏
			img_lis[i].className='';
			this.style.cursor='pointer';
			
			//全部变量 i 重新赋值等于当前index
			i=this.index;
			
			//显示指定数字背景
			num_lis[i].firstElementChild.className='active_num';
			//显示和数字相对于的图片
			img_lis[i].className='active';
		}
		
		//鼠标移出
		num_lis[k].onmouseout=function(){
			//重新定义函数 全局变量重新赋值 开始走
			autoRun();
		}
		
		
	}
	
	
	
	//设置right的鼠标移入移出和点击
	
	//鼠标移入
	right.onmouseover=function(){
		//箭头显示
		left.style.display='block';
		left.style.cursor='pointer';
		right.style.display='block';
		right.style.cursor='pointer';
		//定时器清除
		clearInterval(run);
	
	}
	//移出 
	right.onmouseout=function(){
		//箭头隐藏
		left.style.display='none';
		right.style.display='none';
		//调用函数
		autoRun();
	}
	
	//right 点击
	right.onclick=function(){
		//点击隐藏当前张图和当前个数字背景
		img_lis[i].className='';
		num_lis[i].firstElementChild.className='';
		
		//点击显示下一张图和下一个数字
		i++;
		if(i==img_lis.length){
			i=0;
		}
		
		//点击显示当前张图和当前个数字背景
		img_lis[i].className='active';
		num_lis[i].firstElementChild.className='active_num';
	}
	
		
	//鼠标移入
	left.onmouseover=function(){
		//箭头显示
		left.style.display='block';
		left.style.cursor='pointer';
		right.style.display='block';
		right.style.cursor='pointer';
		//定时器清除
		clearInterval(run);
	
	}
	//移出 
	left.onmouseout=function(){
		//箭头隐藏
		left.style.display='none';
		right.style.display='none';
		//调用函数
		autoRun();
	}
	
	//left点击
	left.onclick=function(){
		//点击隐藏当前张图和当前个数字背景
		img_lis[i].className='';
		num_lis[i].firstElementChild.className='';
		
		//点击显示下一张图和下一个数字
		i--;
		if(i<0){
			i=img_lis.length-1;
		}
		
		//点击显示当前张图和当前个数字背景
		img_lis[i].className='active';
		num_lis[i].firstElementChild.className='active_num';
	}
})();




/*猜你喜欢*/
guess=(function(){
	var gushops=document.getElementsByClassName('guess_shop');
	var find=document.getElementsByClassName('find');
	//console.log(find);
		for(var i=0;i<gushops.length;i++){
			gushops[i].index=i;
			gushops[i].onmouseover=function(){
				find[this.index].style.display='block';
				this.style='cursor:pointer';
			}
			gushops[i].onmouseout=function(){
				find[this.index].style.display='none';
			}
		}
})
guess();

/*吸顶 没做好，算了不写了*/
xiDing=(function(){
	window.onscroll=function(){
		//兼容处理
		var y=document.documentElement.scrollTop||window.pageYOffset;
		
		if(y<200){
			input.style.position="fixed";
			input.style.top='0px';
			input.style.left='350px';
		}else if(y<200){
			input.style.position='ab';
			input.style.top='0px';
			input.style.left='350px';
		}
	}
})


/*定时轮播*/
taoBao_bo=(function(){
	var taolun=document.getElementsByClassName('taobao_bo')[0];
	lun=setInterval(function(){
		if(taolun.offsetTop==0){
			taolun.style.top=-70+'px';
		}else if(taolun.offsetTop==-70){
			taolun.style.top=-140+'px';
		}else if(taolun.offsetTop==-140){
			taolun.style.top=-0+'px';
		}
	},2000)
})
taoBao_bo();

lunBo2=(function(){
	var lun2box=document.getElementsByClassName('lun2box')[0];
	var numlis=document.getElementsByClassName('num')[0].getElementsByTagName('li');
	var show=document.getElementsByClassName('show')[0];
	console.log(show);
		lun2=setInterval(function(){
			if(lun2box.offsetLeft==0){
				lun2box.style.left=-520+'px';
			}else if(lun2box.offsetLeft==-520){
				lun2box.style.left=-0+'px';
			}
			for(var i=0;i<numlis.length;i++){
				numlis[i].index=i;
				for(var j=0;j<numlis.length;j++){
					numlis[j].className='';
				}
				numlis[this.index].className='show';
			}
		},2000)
})
lunBo2();