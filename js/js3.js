log.onclick=function(){
	cang.style.display='block'
}
sou.onclick=function(){
	cang.style.display='block'
}
no.onclick=function(){
	cang.style.display='none'
}
	
	$('.ba').html($('.ba').html()+$('.ba').html());
	$('.ba').width($('.ba>li').length*$('.ba>li').width());
	$('.ba>li').width(100/$('.ba>li').length+'%')	
	var index = 0;
	var time=null;
	var arr=['','我不是抉择','黑名单 第3季','美人为馅',
	'了不起的孩子 西湖美景','坑王驾到']
	$('#div').on({
		'swipeLeft':function(){
			clearInterval(time)
			index++;
			$('#zi').html(arr[index])
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
		$('#zi').html(arr[index])
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