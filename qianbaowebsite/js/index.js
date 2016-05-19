
window.onload=function(){
	var onOff=true;
	//header start
	var ahoverPay=document.getElementsByClassName("hover_pay")[0];
	var aPay=ahoverPay.getElementsByTagName("ul")[0];
	ahoverPay.onmouseover=function(){
		aPay.style.display="block";
	}
	ahoverPay.onmouseout=function(){
		aPay.style.display="none";
	}
	//header end
	
	//nav_bar start
	var oNavBar=document.getElementById("nav_bar");
	var aQuestion=document.getElementsByClassName("question")[0];
	var oSide_bar=document.getElementById("side_bar");
	var oSide_bar_ul=oSide_bar.getElementsByTagName("ul")[0];
	var oSide_bar_ul_li=oSide_bar_ul.getElementsByTagName("li");
	var oSide_left=oSide_bar.getElementsByClassName("side_left");
	var oSide_shadow=oSide_bar.getElementsByClassName("side_shadow");
	var timer5=null;
	var timer6=null;
	oSide_bar_ul_li[2].style.height=0;
	
	for(var i=0;i<oSide_bar_ul_li.length;i++){
		oSide_bar_ul_li[i].index=i;
		oSide_bar_ul_li[i].onmouseover=function(){
			//alert(this.index)
			oSide_left[this.index].style.display="block";
			oSide_shadow[this.index].style.display="block";
			//this.style.background="#ffffff";
		}
		oSide_bar_ul_li[i].onmouseout=function(){
			oSide_left[this.index].style.display="none";
			oSide_shadow[this.index].style.display="none";
		}
	}
	oSide_bar_ul_li[2].onclick=function(){
		pageScroll();
	}
	
		function pageScroll(){
		//把内容滚动指定的像素数（第一个参数是向右滚动的像素数，第二个参数是向下滚动的像素数）
		window.scrollBy(0,-80);
		//延时递归调用，模拟滚动向上效果
		scrolldelay = setTimeout(pageScroll,100);
		//获取scrollTop值，声明了DTD的标准网页取document.documentElement.scrollTop，否则取document.body.scrollTop；因为二者只有一个会生效，另一个就恒为0，所以取和值可以得到网页的真正的scrollTop值
		var sTop=document.documentElement.scrollTop+document.body.scrollTop;
		//判断当页面到达顶部，取消延时代码（否则页面滚动到顶部会无法再向下正常浏览页面）
		if(sTop==0) clearTimeout(scrolldelay);
		}
	window.onscroll=function(){
	
		var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
			//oSide_bar.style.top=scrollTop+402+"px";
		if(scrollTop>=134){
			oNavBar.style.display="block";
			//oNavBar.style.top=scrollTop+"px";
		}else{
			oNavBar.style.display="none";
		}
		if(onOff){
			
			if(scrollTop>=1370&&scrollTop<=2000){
				aQuestion.style.top=scrollTop-1370+"px";
			}else if(scrollTop<1370){
				aQuestion.style.top=0;
			}else if(scrollTop>2000){
				aQuestion.style.top=686+"px";
			}
		}else{
			if(scrollTop>=1256&&scrollTop<=1950){
				aQuestion.style.top=scrollTop-1256+"px";
			}else if(scrollTop<1256){
				aQuestion.style.top=0;
			}else if(scrollTop>1950){
				aQuestion.style.top=800+"px";
			}
		}
		
		//alert(scrollTop)
		if(scrollTop<=10){
			clearInterval(timer5);
			clearInterval(timer6);
			timer6=setInterval(function(){
				var iHi=parseInt(getStyle(oSide_bar_ul_li[2],"height"))-6;
				if(iHi<=0){
					iHi=0;
				}
				oSide_bar_ul_li[2].style.height=iHi+"px";
				if(iHi==0){
					clearInterval(timer6);
				}
			},30)
		}else{
			clearInterval(timer5);
			clearInterval(timer6);
			timer5=setInterval(function(){
				var iHi=parseInt(getStyle(oSide_bar_ul_li[2],"height"))+6;
				if(iHi>=53){
					iHi=53;
				}
				oSide_bar_ul_li[2].style.height=iHi+"px";
				if(iHi==53){
					clearInterval(timer5);
				}
			},30)
		}
		
		
	}
	//nav_bar end
	
	//pic_switch start
	var oBanner=document.getElementById("banner");
	var aBanner=oBanner.getElementsByClassName("banner")[0];
	var aPicture=aBanner.getElementsByClassName("picture")[0];
	var oUl=aBanner.getElementsByTagName("ul")[0];
	var aLi=oUl.getElementsByTagName("li");
	var aA=aBanner.getElementsByTagName("a");
	var arr=["img/ad/1.png","img/ad/2.jpg","img/ad/3.jpg","img/ad/4.jpg"];
	var prevNext=aBanner.getElementsByTagName("span");
	var num=0;
	var timer=null;
	oBanner.onmouseover=function(){
		prevNext[0].style.display="block";
		prevNext[1].style.display="block";
		clearInterval(timer);
	}
	oBanner.onmouseout=function(){
		prevNext[0].style.display="none";
		prevNext[1].style.display="none";
		pic();
	}
	for(var i=0;i<arr.length;i++){
		aPicture.innerHTML+="<a href='#'></a>";
		aA[i].innerHTML="<img src="+arr[i]+"/>";
		aA[i].style.display="none";
		oUl.innerHTML+="<li></li>";
	}
	
	pic();
	function pic(){
		clearInterval(timer);
			timer=setInterval(function(){
			for(var i=0;i<arr.length;i++){
				aA[i].style.display="none";
				aLi[i].style.background="grey";
				
				aLi[i].index=i;
				aLi[i].onclick=function(){
					for(var j=0;j<arr.length;j++){
						aA[j].style.display="none";
						aLi[j].style.background="grey";
					}
					
					clearInterval(timer);
					setTimeout(pic,4000);
					num=this.index;
					aA[this.index].style.display="block";
					aLi[this.index].style.background="#B95C11";
				}
			}
			
			prevNext[0].onclick=function(){
				for(var j=0;j<arr.length;j++){
					aA[j].style.display="none";
					aLi[j].style.background="grey";
				}
			
				clearInterval(timer);
				setTimeout(pic,4000);
				num--;
				if(num==-1){
					num=arr.length-1;
				}
				aA[num].style.display="block";
				aLi[num].style.background="#B95C11"
			}
			prevNext[1].onclick=function(){
				
				for(var j=0;j<arr.length;j++){
					aA[j].style.display="none";
					aLi[j].style.background="grey";
				}
				
				clearInterval(timer);
				setTimeout(pic,4000);
				num++;
				if(num==arr.length){
					num=0;
				}
				aA[num].style.display="block";
				aLi[num].style.background="#B95C11"
			}
			
			aA[num].style.display="block";
			aLi[num].style.background="#B95C11"
			num++;
			if(num==arr.length){
				num=0;
			}
		},2000)
	}
	
	//pic_switch end
	
	//question start
	
	
	//question end
	
	//recommend start
	
	var oRecommend=document.getElementsByClassName("recommend")[0];
	var aRecommend_t=oRecommend.getElementsByClassName("recommend_t")[0];
	var aRecommend_b=oRecommend.getElementsByClassName("recommend_b")[0];
	var aRecommend_a=aRecommend_t.getElementsByTagName("a");
	var aWrap_ul=oRecommend.getElementsByClassName("wrap_ul")[0];
	var aPrev=oRecommend.getElementsByClassName("prev")[0];
	var aNext=oRecommend.getElementsByClassName("next")[0];
	var timer2=null;
	var num2=0;
	function add(obj){
		for(var i=0;i<aRecommend_a.length;i++){
			removeClass(aRecommend_a[i],"active_a")
		}
		addClass(obj,"active_a");
	}
	aRecommend_a[2].onclick=function(){
		add(this);
		doMove(aRecommend_b,"left",0,30);
		num2=0;
	}
	aRecommend_a[1].onclick=function(){
		add(this);
		doMove(aRecommend_b,"left",-699,-30);
		num2=1;
	}
	aRecommend_a[0].onclick=function(){
		add(this);
		doMove(aRecommend_b,"left",-1398,-30);
		num2=2;
	}
	aWrap_ul.onmouseover=function(){
		aPrev.style.display="block";
		aNext.style.display="block";
	}
	aWrap_ul.onmouseout=function(){
		aPrev.style.display="none";
		aNext.style.display="none";
	}
	aPrev.onclick=function(){
		if(num2==0){
			doMove(aRecommend_b,"left",-699,-30);
			num2=1;
			add(aRecommend_a[1]);
		}else if(num2==1){
			doMove(aRecommend_b,"left",-1398,-30);
			add(aRecommend_a[0]);
			num2=2;
		}else if(num2==2){
			//doMove(aRecommend_b,"left",-1398,-20);
			//add(aRecommend_a[0]);
			num=2;
		}
	}
	aNext.onclick=function(){
		if(num2==2){
			doMove(aRecommend_b,"left",-699,30);
			add(aRecommend_a[1]);
			num2=1;
		}else if(num2==1){
			doMove(aRecommend_b,"left",0,30);
			add(aRecommend_a[2]);
			num2=0;
		}else if(num2==0){
			//doMove(aRecommend_b,"left",-1398,-20);
			//add(aRecommend_a[2]);
			num=0;
		}
	}
	//recommend end
	
	
	//login in start
	
	var oMain_one=document.getElementsByClassName("main_r_one")[0];
	var aMain_div=oMain_one.getElementsByTagName("div")[0];
	var aMain_em=oMain_one.getElementsByTagName("em")[0];
	var timer3=null;
	
	aMain_em.onclick=function(ev){
		var ev=ev||event;
		 
		if(onOff){
			timer3=setInterval(function(){
				var iH=parseInt(getStyle(aMain_div,"height"))-12;
				if(iH<=42){
					iH=42;
				}
				aMain_div.style.height=iH+"px";
				if(iH==42){
					clearInterval(timer3);
				}
			},30)
			this.innerHTML="&or;";
			onOff=false;
		}else{
			timer3=setInterval(function(){
				var iH=parseInt(getStyle(aMain_div,"height"))+12;
				if(iH>=156){
					iH=156;
				}
				aMain_div.style.height=iH+"px";
				if(iH==156){
					clearInterval(timer3);
				}
			},30)
			this.innerHTML="&Lambda;";
			onOff=true;
		}
		
	}
	
	//login in enf
	
	
	//pointer start
	
	var aUlover=document.getElementsByClassName("ulover")[0];
	var aUlover_ul=aUlover.getElementsByTagName("ul")[0];
	var timer4=null;
	function tab(){
		timer4=setInterval(function(){
			var iL=parseInt(getStyle(aUlover_ul,"left"))-1;
			if(iL<=-660){
				iL=0;
			}
			aUlover_ul.style.left=iL+"px";
		},20)
	}
	tab();
	aUlover.onmouseover=function(){
		clearInterval(timer4);
	}
	aUlover.onmouseout=function(){
		tab();
	}
	
	//pointer end
	
	
	//mission_b start
	
	var aMission=document.getElementsByClassName("mission_b")[0];
	var aMission_li=aMission.getElementsByTagName("li");
	var aMission_shadow=aMission.getElementsByClassName("shadow");
	for(var i=0;i<aMission_li.length;i++){
		aMission_li[i].index=i;
		aMission_li[i].onmouseover=function(){
			aMission_shadow[this.index].style.display="block";
		}
		aMission_li[i].onmouseout=function(){
			aMission_shadow[this.index].style.display="none";
		}
	}
	
	// mission_b end
}
