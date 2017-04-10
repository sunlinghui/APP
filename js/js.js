
log.onclick=function(){
	cang.style.display='block'
}
sou.onclick=function(){
	cang.style.display='block'
}
no.onclick=function(){
	cang.style.display='none'
}
	
	var time=null;
	$('.ba').html($('.ba').html()+$('.ba').html());
	$('.ba').width($('.ba>li').length*$('.ba>li').width());
	$('.ba>li').width(100/$('.ba>li').length+'%')	
	var index = 0;
	var arr3=['坑王驾到','我不是抉择','黑名单 第3季','美人为馅',
	'了不起的孩子 西湖美景','坑王驾到']
	$('#div').on({
	
		'swipeLeft':function(){
			clearInterval(time)
			index++;
			$('#zi').html(arr3[index])
			if(index == $(this).find('.ba li').length)index = 0;
			$('ol>li').removeClass('active');
			$('ol>li').eq(index%($(this).find('.ba li').length/2)).addClass('active');
			$(this).find('.ba').animate({
				'translateX':-15.4*index+'rem'
			},500,function(){
				if(index == $(this).find('.ba li').length/2){
					$('.ba').css({
						'transform':'translateX(0)'
					});
					index = 0;
				}
			});
			time=setInterval(tab,2000)
		},
		'swipeRight':function(){
			clearInterval(time)
			index--;
			$('#zi').html(arr3[index])
			if(index==-1){
				$('.ba').css('transform','translateX('+(-innerWidth*$(this).find('ul li').length/2+'px')+')')
				index = ($(this).find('.ba li').length/2)-1;
			}
			$('ol>li').removeClass('active');
			$('ol>li').eq(index%($(this).find('.ba li').length/2)).addClass('active');
			$(this).find('.ba').animate({
				'translateX':-15.4*index+'rem'
			},500);
			time=setInterval(tab,2000)
		}
	});

	time=setInterval(tab,2000)
	function tab(){
		index++;
		$('#zi').html(arr3[index])
		if(index == $('#div').find('.ba li').length)index = 0;
		$('ol>li').removeClass('active');
		$('ol>li').eq(index%($('#div').find('.ba li').length/2)).addClass('active');
		$('#div').find('.ba').animate({
			'translateX':-15.4*index+'rem'
		},500,function(){
			if(index == $('#div').find('.ba li').length/2){
				$('.ba').css({
					'transform':'translateX(0)'
				});
				index = 0;
			}
		});
	}


	var jin = $('#list_ul li a');

	for(var i = 0;i<jin.length;i++){
		jin[i].index = i;
		jin[i].onclick = function(){
			for(var i = 0;i<jin.length;i++){
			     jin[i].className = 'list_li';	
			      
			}
			
			  this.className+=" kk";
		}
	}

	 /*拖拽*/
	var aa=false;
    var oldX,oldY,newX,newY,speedX,speedY;
	var ls = 0;
	var divLeft;
	list_ul.addEventListener('touchstart',function (e){
		//aa=!aa;
		list_ul.style.transition = '0s';
		l = e.touches[0].clientX - this.offsetLeft;
		div1Left = div1.offsetLeft;
		newX = e.touches[0].clientX;
	});
	list_ul.addEventListener('touchmove',function (e){
		oldX = e.touches[0].clientX;
		list_ul.style.left = e.touches[0].clientX - l + 'px';
		ls = e.touches[0].clientX;
	});
	list_ul.addEventListener('touchend',function (e){
	
		zzz = oldX-newX;
		list_ul.style.transition='1s';
		list_ul.style.left = div1.offsetLeft + zzz*6 + 'px';
        if(div1.offsetLeft + zzz*6 >0){
           list_ul.style.left =0;
        }
	});
	
 	var oldX,oldY,newX,newY,speedX,speedY;
	var lso = 0;
	var divLefts;
	ulp.addEventListener('touchstart',function (e){
		//ls = false;
		ulp.style.transition = '0s';
		l = e.touches[0].clientX - this.offsetLeft;
		div1Lefts = div1.offsetLeft;
		newX = e.touches[0].clientX;
	});
	ulp.addEventListener('touchmove',function (e){
		oldX = e.touches[0].clientX;
		ulp.style.left = e.touches[0].clientX - l + 'px';
		lso = e.touches[0].clientX;
	});
	ulp.addEventListener('touchend',function (e){
	
		zzz = oldX-newX;
		ulp.style.transition='1s';
		ulp.style.left = div1.offsetLeft + zzz*6 + 'px';
        if(div1.offsetLeft + zzz*6 >0){
           ulp.style.left =0;
        }
        if(div1.offsetLeft + zzz*6 <-200){
           ulp.style.left =-200+'px';
        }
	});
	
	
	var arr2=['a-50','a-51','a-52','a-55','a-53',
	'a-37','a-38']
	var arr4=['TFBOYS三周年音乐纪录片','戚薇欧阳娜娜小龙虾庆生','陆毅为贝儿办8岁生日派对','最不可思议的啪啪真人秀',
	'林心如6月孕肚首曝光','女星遭影帝掐脖辱骂','心肝肾病变 耳朵能发现']
	var arr=['a-22','a-27','a-23','a-24','a-25','a-26','a-29','a-31','a-32','a-33',]
	var arr5=['寒山令','胭脂','暗战危城','美人为馅','麻雀','骡子和金子','色情大亨',
	'大话西游3','九条命','魔兽']
	var tu=document.getElementById('tu');
	var oImg=tu.getElementsByTagName('img');
	var huan=document.getElementById('huan')
	var sp=tu.getElementsByClassName('sp_zi')
	huan.onclick=function(){
		var array=[]
		while(array.length<6){
			var index=suiji(0,arr2.length)
			var index=suiji(0,arr4.length)
			if(array.indexOf(index)!=-1){
				
			}else{
				array.push(index)
			}
		}
		
		for(var i=0;i<oImg.length;i++){
			oImg[i].src='img/'+arr2[array[i]]+'.jpg'
		}
		for(var i=0; i<sp.length; i++){
			sp[i].innerHTML=arr4[array[i]]
		}
	}
	
	var oT=document.getElementById('Tu')
	var aImg=oT.getElementsByTagName('img')
	var hu=document.getElementById('hu')
	var span=oT.getElementsByTagName('span')
	hu.onclick=function(){
		var array=[]
		while(array.length<6){
			var index=suiji(0,arr.length)
			var index=suiji(0,arr5.length)
			if(array.indexOf(index)!=-1){
				
			}else{
				array.push(index)
			}
		}
		
		for(var i=0;i<aImg.length;i++){
			aImg[i].src='img/'+arr[array[i]]+'.jpg'
		}
		for(var i=0; i<span.length; i++){
			span[i].innerHTML=arr5[array[i]]
		}
	}
	var aa=document.getElementById('aa')
	var cImg=aa.getElementsByTagName('img')
	var ba=document.getElementById('ba')
	var spa=aa.getElementsByTagName('span')
	ba.onclick=function(){
		var array=[]
		while(array.length<6){
			var index=suiji(0,arr.length)
			var index=suiji(0,arr5.length)
			if(array.indexOf(index)!=-1){
				
			}else{
				array.push(index)
			}
		}
		
		for(var i=0;i<cImg.length;i++){
			cImg[i].src='img/'+arr[array[i]]+'.jpg'
		}
		for(var i=0; i<spa.length; i++){
			spa[i].innerHTML=arr5[array[i]]
		}
	}
	var zy=document.getElementById('zy');
	var dImg=zy.getElementsByTagName('img')
	var zz=document.getElementById('zz')
	var zi=zy.getElementsByClassName('zy_z')
	zz.onclick=function(){
		var array=[]
		while(array.length<6){
			var index=suiji(0,arr2.length)
			var index=suiji(0,arr4.length)
			if(array.indexOf(index)!=-1){
				
			}else{
				array.push(index)
			}
		}
		
		for(var i=0;i<dImg.length;i++){
			dImg[i].src='img/'+arr2[array[i]]+'.jpg'
		}
		for(var i=0; i<zi.length; i++){
			zi[i].innerHTML=arr4[array[i]]
		}
	}
	var dm=document.getElementById('dm');
	var eImg=dm.getElementsByTagName('img')
	var dd=document.getElementById('dd')
	var pp=dm.getElementsByTagName('span')
	dd.onclick=function(){
		var array=[]
		while(array.length<6){
			var index=suiji(0,arr.length)
			var index=suiji(0,arr5.length)
			if(array.indexOf(index)!=-1){
				
			}else{
				array.push(index)
			}
		}
		
		for(var i=0;i<eImg.length;i++){
			eImg[i].src='img/'+arr[array[i]]+'.jpg'
		}
		for(var i=0; i<pp.length; i++){
			pp[i].innerHTML=arr5[array[i]]
		}
	}
	function suiji(n,m){
		return parseInt(Math.random()*(m-n)+n);
	}
	
	