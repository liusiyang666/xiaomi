// dom加载完成之后执行
document.addEventListener('DOMContentLoaded', function () {
	setTimeout(loaded, 50); 
}, false);

function loaded(){
	pullDownEl = document.getElementById('pullDown');
	pullUpEl = document.getElementById('pullup');
	puDownOffset = pullDownEl.offsetHeight;
	pullUpOffset = pullUpEl.offsetHeight;
	myScroll = new iScroll('wrapper', {
		useTransition: true,// 过度
		topOffset: puDownOffset,
		onScrollMove:function(){
			if(this.y > 5 && !pullDownEl.className.match('flip')){
				pullDownEl.className = 'flip';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = '释放刷新';
				this.minScrollY = 0;
			} else if(this.y < 5 && pullDownEl.className.match('flip')){
				pullDownEl.className = '';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Pull down to refresh...';
				this.minScrollY = -puDownOffset;
			} else if(this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')){
				pullUpEl.className = 'flip';
				pullUpEl.querySelector('.pullupLabel').innerHTML = '释放加载';
				this.maxScrollY = this.maxScrollY;
			} else if(this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')){
				pullUpEl.className = '';
				pullUpEl.querySelector('.pullupLabel').innerHTML = 'Pull up to load more...';
				this.maxScrollY = pullUpOffset;
			}
		},
		onScrollEnd:function(){
			if(pullDownEl.className.match('flip')){
				pullDownEl.className = 'loading';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = '加载中';
				// 刷新数据
				pullDownAction()
			} else if(pullUpEl.className.match('flip')){
				pullUpEl.className = 'loading';
				pullUpEl.querySelector('.pullupLabel').innerHTML = '加载中';
				// 加载数据
				pullUpAction();
			}
		},
		onRefresh:function(){
			if(pullDownEl.className.match('loading')){
				pullDownEl.className = '';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新';
			} else if(pullUpEl.className.match('loading')){
				pullUpEl.className = '';
				pullUpEl.querySelector('.pullupLabel').innerHTML = '上拉加载';
			}
		}
	})
	loadData();
}


/*// 定义变量用来记录当前li的个数
var generatedCount = 0;*/

// 初始化数据
function loadData(){
	var li;
	oUl = document.getElementById('listData');
	/*for(var i = 0; i < 3; i++){*/
		li = document.createElement('li');
		li.innerHTML = ''
		oUl.appendChild(li);
	/*}*/
	myScroll.refresh();
}

// 下拉刷新
function pullDownAction(){
	setTimeout(function(){
		myScroll.refresh();
	}, 400);
}
// 上拉加载
function pullUpAction(){
	setTimeout(function(){
		var li;
		oUl = document.getElementById("listData");
		/*for(var i = 0; i < 3; i++){*/
			li = document.createElement('section');
			li.innerHTML = '<div><img src="images/3_06.png"/></div><div><div>D2c女装专场</div><div>06/01 - 06/07</div></div><div><img src="images/3_02.png"/></div><div><div>意大利尊享名品专场</div><div>06/01 - 06/07</div></div>'
			oUl.appendChild(li);
		/*}*/
		myScroll.refresh();
	}, 400);
}
