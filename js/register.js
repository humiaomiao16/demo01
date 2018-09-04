



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

button=(function(){
	var b4=document.getElementsByClassName('b4')[0];
	var xieyi=document.getElementsByClassName('xieyi')[0];
		b4.onclick=function(){
			xieyi.style.display='none';
		}
})
button();

zhengZe=(function(){
	//声明正则表达式 1    2 3  8
	var pattern=/^1(([358]\d)|(47)|(66)|(7[013678]))\d{8}$/;
	
	//获取节点
	var num=document.getElementById('in1');
	var cont=document.getElementById('tx1');
	//num的失去焦点事件
	num.onblur=function(){
		//获取用户输入的值
		var v=this.value;
		//alert(v)
		
		//test() 方法
		if(pattern.test(v)){
			//显示正确
			cont.innerHTML='用户名可以使用'
		}else{
			//显示不正确
			cont.innerHTML='请设置正确用户名'
		}
		
	}
	
	
	
	//匹配密码
	var num1=document.getElementById('in2');
	var cont1=document.getElementById('tx2');
	var deng=document.getElementsByClassName('deng')[0];
	//声明正则
	var pp=/^\d{6}/
	
	//失去焦点
	num1.onblur=function(){
		//获取用户输入的值
		var v=this.value;
		//alert(v)
		
		//test() 方法
		if(pp.test(v)){
			//显示正确
			cont1.innerHTML='输入正确'
			deng.innerHTML='<a href="login.html" class="deng"><button class="b1">注册成功点击登陆</button></a>';
		}else{
			//显示不正确
			cont1.innerHTML='请设置1-6位密码'
		}
		
	}
})
zhengZe();