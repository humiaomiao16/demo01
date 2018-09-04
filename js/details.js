



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
var foot=document.getElementsByClassName('foot')[0];
var uls=foot.getElementsByTagName('ul');
	console.log(uls);
	
	//li的个数
	var num=1;
	//创建li节点函数
	function createLi(ul){
		//创建元素节点
		var li=document.createElement('li');
		//li设置随机高度 
		li.style.height=rand()+'px';
		//li设置背景图片 随机图片
		li.style.backgroundImage='url(pubu/'+bg()+'.jpg)';
		li.style.backgroundSize='100% 100%';
		//console.log(li);
		//将li添加到ul中
		ul.appendChild(li);
		
	}
	//调用函数
	//createLi(uls[0],num);
	
	//li的随机高度函数
	function rand(){
		return Math.floor(Math.random()*300)+100;
	}
	//li的随机图片
	function bg(){
		return Math.floor(Math.random()*10)+1;
	}

	//遍历uls添加li节点 然后找到最短的ul 继续添加li
	function state(){

		for(var i=0;i<30;i++){
			//在uls中找到最短的ul的高
			var ArrHeight=[uls[0].offsetHeight,uls[1].offsetHeight,uls[2].offsetHeight,uls[3].offsetHeight,uls[4].offsetHeight];
			//console.log(ArrHeight);
			
			//找到最短的uls的下标 然后继续添加li节点
			var index=mini(ArrHeight);
			console.log(index);
			
			//遍历添加li节点
			//createLi(uls[i],num++);
			//调用li函数 给最短ul添加li
			createLi(uls[index],num++);
		}
	}
	//调用函数 初始张数
	state();
	
	//声明最短ul的函数 返回下标
	function mini(arr){
		//数组中任意一个
		var mh=arr[0]; 
		//遍历判断
		for(var i=0;i<arr.length;i++){
			//找到数组中最短的
			if(arr[i]<mh){
				mh=arr[i];
			}
		}
		//反回的是下标
		return  arr.indexOf(mh);
	}
	
	
	//滚动条监听事件
	window.onscroll=function(){
		//判断滚动条到底部
		//html高度-可视区域的高度==滚动的距离
		//html总的高度
		var dh=document.documentElement.offsetHeight;
		//console.log(dh)
		//获取可视区域高度
		var ch=document.documentElement.clientHeight||document.body.clientHeight||window.innerHeight;
		//console.log(ch);
		//获取滚动的距离
		var st=document.documentElement.scrollTop||document.body.scrollTop;
		//console.log(st);
		
		//判断到底
		if(dh-ch==st){
			//调用函数
			state();
		}
	}

babyLike=(function(){
	var lis=document.getElementsByClassName('ka')[0].getElementsByTagName('li');
	var spans=document.getElementsByClassName('buy')[0].getElementsByTagName('span');
	console.log(lis);
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onclick=function(){
			for(var j=0;j<lis.length;j++){
				lis[j].className='';
				spans[j].className='';
			}
			lis[this.index].className='z';
			spans[this.index].className='block';
			this.style.cursor='pointer';
		}

	}

})
babyLike();

cliCk=(function(){
	var lis=document.getElementById('click').getElementsByTagName('li');
		for(var i=0;i<lis.length;i++){
			lis[i].index=i;
			lis[i].onmouseover=function(){
				for(var j=0;j<lis.length;j++){
					lis[j].className='';
				}
				lis[this.index].className='border';
			}
			
		}
})
cliCk();