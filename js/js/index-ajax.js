$.ajax({
		type:"get",
		url:"http://127.0.0.1:8989",
		async:true,
		success:function(data){
		
			var obj=JSON.parse(data);
			
			//轮播
			var lunbostr=obj.lunbo;
		
			var lb="";
			for (var i in lunbostr) {
				lb+='<div class="swiper-slide"><img src="img/'+lunbostr[i]+'"/></div>';
			}
			$('.lunbo>.swiper-wrapper').html(lb);
			lbAtuo ();
			
			//按钮组
			
			var btn=obj.btn;
			
			var btn1='';
			var btn2='';
			for(var j=0 ; j<4;j++){
				btn1 += '<a href="#"><div><img src="img/index/'+btn[j].img+'" /></div><div>'+btn[j].txt+'</div></a>'
			}
			
			$('.nav>.nav-up').html(btn1);
			for(var j=4 ; j<8;j++){
				btn2 += '<a href="#"><div><img src="img/index/'+btn[j].img+'" /></div><div>'+btn[j].txt+'</div></a>'
			}
			$('.nav>.nav-dow').html(btn2);
			//新闻
			var newday=obj.newday;
			
			var nd='';
			for(var j in newday){
				nd+='<div class="swiper-slide">'+newday[j].title+'</div>';
			}
			$('.scoll>.swiper-wrapper').html(nd);
			scroll ();	
			//推荐
			var tuijian=obj.tj;
			var tjj='';
			for(var i in tuijian){
				tjj+='<div class="swiper-slide"><img src="img/index/'+tuijian[i].img+'" /><p>'+tuijian[i].txtp+'</p><span>'+tuijian[i].sptxt+'</span></div>'
			}
			$('.tj>.swiper-wrapper').html(tjj)	
			tuij();	
				
				
				
			
		}
	});
		//轮播
			function lbAtuo () {
				var lbSwiper = new Swiper('.lunbo', {
					autoplay: 2000, //可选选项，自动滑动
						loop:true,
						pagination: '.swiper-pagination'
				})
			
			}
		//新闻滚动	
			function scroll () {
					var ssSwiper = new Swiper('.scoll', {
						autoplay: 2000, //可选选项，自动滑动
						loop:true,
						direction: 'vertical'
					})
		
			}
		//推荐
		function tuij() {
			var mySwiper5 = new Swiper('.tj', {
					slidesPerView: 3,
					spaceBetween:10,
					paginationClickable: true,
	
			});
		
		}