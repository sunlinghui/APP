	
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
        if(div1.offsetLeft + zzz*2 >0){
           list_ul.style.left =0;
        }
	});
	

	var cj=document.getElementById('cj')
	var arr=['鼻尖相碰的距离_','1分钟前']
	cj.addEventListener('blur',function(){
		var str=cj.value;
		var oli=document.createElement('li');
		oli.className='lieTo';
		oli.innerHTML='<p class="Name">'+arr[0]+'</p><p class="con">'+str+'</p><p class="Time">2分钟前</p><img src="img/b-12.jpg" class="touxiang"/><div class="ac"><span>0</span><a href="javascript:;"><img src="img/b-13.jpg" /></a><a href="javascript:;"><img src="img/b-14.jpg" /></a></div>'
		if(ul.children.length!=0){
			ul.insertBefore(oli,ul.children[0])
		}else{
			ul.appendChild(oli)
		}
		cj.value='';
	},false)