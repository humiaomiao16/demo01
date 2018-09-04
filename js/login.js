






//切换界面
erWei=(function(){
	var centent1=document.getElementsByClassName('centent1')[0];
	var centent=document.getElementsByClassName('centent')[0];
	var bian1=document.getElementsByClassName('bian1')[0];
	var bian2=document.getElementsByClassName('bian2')[0];
		bian1.onclick=function(){
			centent.style.display='block';
			centent1.style.display='none';
		}
		bian2.onclick=function(){
			centent1.style.display='block';
			centent.style.display='none';
		}
		
})
erWei();


// 登录
b1.onblur=function(){
		// var uname=this.value;
		// // console.log(uname);
		
		// //发送 获取信息
		// Ajax().post('5.php','uuu='+uname,function(msg){
		// 	// console.log(msg);	
		// 	if(msg=='y'){
		// 		//表示以注册
		// 		info.innerHTML='对不起，该用户已存在';
		// 	}else{
		// 		//表示可以注册
		// 		info.innerHTML='恭喜，用户名可以使用';
		// 	}
		// });
		alert('ok');
	}