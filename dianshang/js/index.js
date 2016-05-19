
window.onload=function(){
	//banner
	(function(){
		var oBanner=document.getElementById("banner");
		var oUl=oBanner.getElementsByTagName("ul")[0];
		var aLi=oUl.getElementsByTagName("li");
		var aTxt=oBanner.getElementsByClassName("txt")[0];
		var oOl=oBanner.getElementsByTagName("ol")[0];
		var oBottom=oBanner.getElementsByClassName("bottom")[0];
		var aTop=oBanner.getElementsByClassName("dotTop")[0];
		var aBottom=oBanner.getElementsByClassName("dotBottom")[0];
		var num=0;
		var timer=null;
		var number=0;
		var json={
			"banner":["例如：荷棠鱼坊烤鱼 或 樱花日本料理","例如： 樱花日本料理","例如：荷棠鱼坊烤鱼 ","例如：荷棠鱼 或 花日本料理","例如：荷棠鱼坊烤理"]
		}
		var arr=[
			{"name":"萱萱","time":"五分钟前","article":"写了一篇新文章：关于那些花儿的魅力..."},
			{"name":"盼盼","time":"十分钟前","article":"写了一篇新文章：关于个时候的的魅力..."},
			{"name":"缓缓","time":"十一分钟前","article":"写了一篇新文章：关于政府魅力..."},
			{"name":"静静","time":"十三钟前","article":"写了一篇新文章：论国策..."},
			{"name":"嘤嘤","time":"十八钟前","article":"写了一篇新文章：资治通鉴..."},
			{"name":"七七","time":"二十三钟前","article":"写了一篇新文章：那些事国哥..."},
			{"name":"恻恻","time":"二十五前","article":"写了一篇新文章：南京执行的战网..."}
		]
		aTxt.value=json.banner[0];
		for(var i=0;i<aLi.length;i++){
			aLi[i].index=i;
			aLi[i].onclick=function(){
				for(var j=0;j<aLi.length;j++){
					aLi[j].className="";
				}
				this.className="active";
				aTxt.value=json.banner[this.index];
				num=this.index;
			}
		}
		
				aTxt.onfocus=function(){
					if(aTxt.value==json.banner[num]){
						aTxt.value="";
					}
				}
				aTxt.onblur=function(){
					if(aTxt.value==""){
						//alert(num)
						aTxt.value=json.banner[num];
					}
				}	
				
				
		var str="";
		for(var i=0;i<arr.length;i++){
			str+="<li class='update'><strong>"+arr[i].name+"</strong><em>"+arr[i].time+"</em><a href='#'>"+arr[i].article+"</a></li>"
		}
		oOl.innerHTML=str;
		timer=setInterval(function(){
			var isp=parseInt(getStyle(oOl,"top"))-30;
			if(isp<=-180){
				isp=0;
			}
			oOl.style.top=isp+"px";
		},2000)
		oBottom.onmouseover=function(){
			clearInterval(timer);
		}
		oBottom.onmouseout=function(){
			timer=setInterval(function(){
			var isp=parseInt(getStyle(oOl,"top"))-30;
			if(isp<=-180){
				isp=0;
			}
			oOl.style.top=isp+"px";
		},2000)
		}
		aTop.onclick=function(){
			var spe=parseInt(getStyle(oOl,"top"));
			spe+=30;
			if(spe>=0){
				spe=0;
			}
			oOl.style.top=spe+"px";
		}
		aBottom.onclick=function(){
			var spe=parseInt(getStyle(oOl,"top"));
			spe-=30;
			if(spe<=-180){
				spe=-180;
			}
			oOl.style.top=spe+"px";
		}
	})();
	//hotshop
	(function(){
		var oHotShop=document.getElementsByClassName("hotShop")[0];
		var oUl=oHotShop.getElementsByTagName("ul");
		var aLi=oUl[0].getElementsByTagName("li");
		var json={"hot":[{"img":"img/main/eat_pic.jpg","a":"御舟和涵珍园国际酒店","span":"区域：朝阳/BCD<br />人均：180元<br />人气：12321"},
						{"img":"img/main/eat_pic.jpg","a":"和涵珍园国际酒店","span":"区域：威海/BCD<br />人均：190元<br />人气：12221"},
						{"img":"img/main/eat_pic.jpg","a":"御舟和涵珍园酒店","span":"区域：青岛/BCD<br />人均：180元<br />人气：321"}],
					"ew":[{"img":"img/main/eat_pic.jpg","a":"涵珍园国际酒店","span":"区域：西安/BCD<br />人均：3000元<br />人气:2321"},
							{"img":"img/main/eat_pic.jpg","a":"御舟和涵珍园店","span":"区域：南京/BCD<br />人均：80元<br />人气：11"},
							{"img":"img/main/eat_pic.jpg","a":"天上人间国际酒店","span":"区域：广州/BCD<br />人均：10元<br />人气：321"}]}
		
		var str="";
		var str2="";
		for(var i=0;i<3;i++){
			str+="<li><img src='"+json.hot[i].img+"' class='fl'/><a href='#' class='fl'>"+json.hot[i].a+"</a><span class='fl'>"+json.hot[i].span+"</span></li>"
		}
		str+='<li class="spec"><a href="#" class="more fr">MORE</a></li>';
		
		for(var i=0;i<3;i++){
			str2+="<li><img src='"+json.ew[i].img+"' class='fl'/><a href='#' class='fl'>"+json.ew[i].a+"</a><span class='fl'>"+json.ew[i].span+"</span></li>"
		}
		str2+='<li class="spec"><a href="#" class="more fr">MORE</a></li>';
		
		oUl[1].innerHTML=str;
		//alert(str);
		for(var i=0;i<aLi.length;i++){
			aLi[i].index=i;
			aLi[i].onclick=function(){
				for(var j=0;j<aLi.length;j++){
					aLi[j].className="gradient";
				}
				this.className="active";
				if(this.index==0){
					oUl[1].innerHTML=str;
				}else{
					oUl[1].innerHTML=str2;
				}
			}
		}
	})();
		
	//activity
	(function(){
		var oActivity=document.getElementsByClassName("activity")[0];
		var aAc2=oActivity.getElementsByClassName("active2")[0];
		var aHide=aAc2.getElementsByClassName("hide")[0];
		aAc2.onmousemove=function(){
			aHide.style.display="block";
		}
		aAc2.onmouseout=function(){
			aHide.style.display="none";
		}
	})();
	
	//recommend
	(function(){
		var oRecommend=document.getElementsByClassName("recommend")[0];
		var oCenter=oRecommend.getElementsByClassName("center")[0];
		var oL=oCenter.getElementsByClassName("left")[0];
		var aImgL=oL.getElementsByTagName("img")[0];
		var oR=oCenter.getElementsByClassName("right")[0];
		var aLi=oR.getElementsByTagName("li");
		var aImg=oR.getElementsByTagName("img");
		var json={
			"left":["img/main/recommend/1.jpg","img/main/recommend/2.jpg","img/main/recommend/3.jpg"],
			"right":["img/main/recommend/2_1.jpg","img/main/recommend/1_1.jpg","img/main/recommend/3_1.jpg"]
		};
		var timer=null;
		var num=0;
		function Move(){
			timer=setInterval(function(){
				for(var i=0;i<aImg.length;i++){
					aImg[i].className="";
				}
				aImg[num].className="active";
				aImgL.src=json.left[num];
					num++;
					if(num==3){
						num=0;
					}
				
			},1000)
		}
		Move();
		oCenter.onmouseover=function(){
			clearInterval(timer);
			for(var i=0;i<aLi.length;i++){
				aLi[i].index=i;
				aLi[i].onclick=function(){
					for(var j=0;j<aLi.length;j++){
						aImg[j].className="";
					}
					aImgL.src=json.left[this.index];
					aImg[this.index].className="active";
				}
			}
		}
		
		oCenter.onmouseout=function(){
			Move();
		}
	})();

	//subway
	(function(){
		var oSub=document.getElementsByClassName("subway")[0];
		var aLi=oSub.getElementsByTagName("li");
		var aImg=oSub.getElementsByTagName("img")[0];
		var arr=["img/main/subway.jpg","img/main/subway2.jpg"];
		for(var i=0;i<aLi.length;i++){
			aLi[i].index=i;
			aLi[i].onclick=function(){
				for(var j=0;j<aLi.length;j++){
					aLi[j].className="gradient";
				}
				this.className="active";
				if(this.index==0){
					aImg.src=arr[0];
				}else{
					aImg.src=arr[1];
				}
			}
		}
	})();
	
	//BBS
	(function(){
		var oBbs=document.getElementsByClassName("bbs")[0];
		var oBottom=oBbs.getElementsByClassName("bottom")[0];
		
		var json={"active":[{
			"img":"img/main/bbs/1.jpg",
			"a":"花钱治--日剧中的手机",
			"span":"修睿思",
			"em":"ONE"
		},{
			"img":"img/main/bbs/2.jpg",
			"a":"花钱治--日剧中手机",
			"span":"修睿思2",
			"em":"TWO"
		},{
			"img":"img/main/bbs/3.jpg",
			"a":"花治--日剧中的手机",
			"span":"修睿思3",
			"em":"THREE"
		},{
			"img":"img/main/bbs/4.jpg",
			"a":"花钱治--日中的手机",
			"span":"修睿思4",
			"em":"FOUR"
		},{
			"img":"img/main/bbs/5.jpg",
			"a":"花治--日剧中的手机",
			"span":"修睿思5",
			"em":"FIVE"
		},{
			"img":"img/main/bbs/6.jpg",
			"a":"花钱治--日剧的手机",
			"span":"修睿思6",
			"em":"SIX"
		},{
			"img":"img/main/bbs/7.jpg",
			"a":"花钱治-日剧中的手机",
			"span":"修思",
			"em":"SEVEN"
		}],
		"normal":[{
			"em":"01",
			"strong":"保农没见过的古怪餐厅",
			"span":"世说新语"
		},{
			"em":"02",
			"strong":"保农没见过的古怪餐厅",
			"span":"世说新语"
		},{
			"em":"03",
			"strong":"保农没见过的古怪餐厅",
			"span":"世说新语"
		},{
			"em":"04",
			"strong":"保农没见过的古怪餐厅",
			"span":"世说新语"
		},{
			"em":"05",
			"strong":"保农没见过的古怪餐厅",
			"span":"世说新语"
		},{
			"em":"06",
			"strong":"保农没见过的古怪餐厅",
			"span":"世说新语"
		},{
			"em":"07",
			"strong":"保农没见过的古怪餐厅",
			"span":"世说新语"
		}]};
		//初始化
		var str="";
		var str2="";
		for(var i=0;i<json.normal.length;i++){
			str+="<li><em>"+json.normal[i].em+"</em><strong>"+json.normal[i].strong+"</strong><span>"+json.normal[i].span+"</span></li>";
		}
		oBottom.innerHTML=str;
		var aLi=oBottom.getElementsByTagName("li");
		aLi[0].className="active";
		aLi[0].innerHTML='<img src="img/main/bbs/1.jpg"/><a href="#">花钱治--日剧中的手机</a><span>秀瑞斯</span><em>ONE</em>'
		
		for(var i=0;i<aLi.length;i++){
			aLi[i].index=i;
			aLi[i].onmouseover=function(){

				for(var j=0;j<aLi.length;j++){
					aLi[j].className="";
					aLi[j].innerHTML="<em>"+json.normal[j].em+"</em><strong>"+json.normal[j].strong+"</strong><span>"+json.normal[j].span+"</span>"
				}
				
				this.className="active";
				this.innerHTML="<img src='"+json.active[this.index].img+"'/><a href='#'>"+json.active[this.index].a+"</a><span>"+json.active[this.index].span+"</span><em>"+json.active[this.index].em+"</em>"
			}
		}
		
	})();
	
	//lifestyle
	(function(){
		var oLife=document.getElementsByClassName("lifestyle")[0];
		var oCenter=oLife.getElementsByClassName("center")[0];
		var aLi=oCenter.getElementsByTagName("li");
		var oBottom=oLife.getElementsByClassName("bottom")[0];
		var json={"ask":[
			{"em":"美食","a":"推荐几款性价比比较好的冰箱","img":"img/main/false.gif"},{"em":"购物","a":"推荐几款性价比比较好","img":"img/main/true.gif"},{"em":"休闲","a":"几款性价比比较好的冰箱","img":"img/main/false.gif"},{"em":"娱乐","a":"啊啊推荐几款性价比比较好的冰箱","img":"img/main/true.gif"},{"em":"美食","a":"推荐几款性价比比较好的冰箱","img":"img/main/false.gif"}
		],"know":[
			{"em":"美食","a":"推荐几款性价比比较好的水泵","img":"img/main/false.gif"},{"em":"购物","a":"推荐几款性价比比较好的电视","img":"img/main/false.gif"},{"em":"休闲","a":"几款性价比比较好的冰箱","img":"img/main/true.gif"},{"em":"交友","a":"啊啊推荐几款性价比比较好的冰箱","img":"img/main/true.gif"},{"em":"美食","a":"推荐几款性价比比较好的水浒","img":"img/main/true.gif"}
		],"question":[
			{"em":"美食","a":"推荐几款性价比较好的冰箱","img":"img/main/true.gif"},{"em":"购物","a":"推荐几款性价比比较好的电影","img":"img/main/true.gif"},{"em":"休闲","a":"几款性价比比较好的冰箱","img":"img/main/true.gif"},{"em":"娱乐","a":"啊啊推款性价比比较好的冰箱","img":"img/main/true.gif"},{"em":"美食","a":"推荐几款比比较好的冰箱","img":"img/main/false.gif"}
		]};
		var str1="<dt><span>标题</span><em>状态</em></dt>";
		var str2="<dt><span>标题</span><em>状态</em></dt>";
		var str3="<dt><span>标题</span><em>状态</em></dt>";
		
		for(var i=0;i<json.ask.length;i++){
			str1+="<dd>[<em>"+json.ask[i].em+"</em>]<a href='#'>"+json.ask[i].a+"</a><img src='"+json.ask[i].img+"'/></dd>";
			str2+="<dd>[<em>"+json.know[i].em+"</em>]<a href='#'>"+json.know[i].a+"</a><img src='"+json.know[i].img+"'/></dd>";
			str3+="<dd>[<em>"+json.question[i].em+"</em>]<a href='#'>"+json.question[i].a+"</a><img src='"+json.question[i].img+"'/></dd>";
		}
		//初始化

		oBottom.innerHTML=str1;
		
		for(var i=0;i<aLi.length;i++){
			aLi[i].index=i;
			aLi[i].onmouseover=function(){
				for(var j=0;j<aLi.length;j++){
					aLi[j].className="gradient";
				}
				this.className="active";
				if(this.index==0){
					oBottom.innerHTML=str1;
				}else if(this.index==1){
					oBottom.innerHTML=str2;
				}else{
					oBottom.innerHTML=str3;
				}
			}
		}
	})();
	
	//coupons
	(function(){
		var oCoupons=document.getElementsByClassName("coupons")[0];
		var oUl=oCoupons.getElementsByTagName("ul")[0];
		var oDl=oCoupons.getElementsByTagName("dl")[0];
		var aLi=oUl.getElementsByTagName("li");
		var json={"people":[{"a":"老北京一尊黄牛","span":"12%","em":"234"},{"a":"老南京一尊黄牛","span":"11%","em":"334"},{"a":"老天津一尊黄牛","span":"20%","em":"34"},{"a":"老东京一尊黄牛","span":"12%","em":"234"},{"a":"老济南一尊黄牛","span":"12%","em":"234"}],
					"recommend":[{"a":"老北京一尊黄牛","span":"12%","em":"234"},{"a":"老越南一尊黄牛","span":"11%","em":"334"},{"a":"老黑龙江一尊黄牛","span":"32%","em":"34"},{"a":"老东北一尊黄牛","span":"12%","em":"234"},{"a":"老无锡一尊黄牛","span":"12%","em":"234"}],
					"new":[{"a":"老北京一尊黄牛","span":"12%","em":"234"},{"a":"老南京一尊黄牛","span":"11%","em":"334"},{"a":"老齐齐哈尔一尊黄牛","span":"10%","em":"34"},{"a":"老细账一尊黄牛","span":"12%","em":"234"},{"a":"老荆南一尊黄牛","span":"12%","em":"234"}]};
		var str1="<dt><strong>商店名</strong><span>省</span><em>打印</em></dt>";
		var str2="<dt><strong>商店名</strong><span>省</span><em>打印</em></dt>";
		var str3="<dt><strong>商店名</strong><span>省</span><em>打印</em></dt>";
		for(var i=0;i<json.people.length;i++){
			str1+="<dd><a href='#'>"+json.people[i].a+"</a><span>"+json.people[i].span+"</span><em>"+json.people[i].em+"</em></dd>";
			str2+="<dd><a href='#'>"+json.recommend[i].a+"</a><span>"+json.recommend[i].span+"</span><em>"+json.recommend[i].em+"</em></dd>";
			str3+="<dd><a href='#'>"+json.new[i].a+"</a><span>"+json.new[i].span+"</span><em>"+json.new[i].em+"</em></dd>"
		}
		for(var i=0;i<aLi.length;i++){
			aLi[i].index=i;
			aLi[i].onmouseover=function(){
				for(var j=0;j<aLi.length;j++){
					aLi[j].className="gradient";
				}
				this.className="active";
				if(this.index==0){
					oDl.innerHTML=str1;
				}else if(this.index==1){
					oDl.innerHTML=str2;
				}else{
					oDl.innerHTML=str3;
				}
			}
		}
	})();
	
	//redhot
	(function(){
		var oRedHot=document.getElementsByClassName("redhot")[0];
		var oUl=oRedHot.getElementsByClassName("bottom")[0];
		var aLi=oUl.getElementsByTagName("li");
		var aDiv=oUl.getElementsByTagName("div");
		for(var i=0;i<aLi.length;i++){
			aLi[i].index=i;
			aLi[i].onmouseover=function(){
				if(this.index==0){
					return;
				}else{
				aDiv[this.index-1].style.visibility="visible";
				}
			}
			aLi[i].onmouseout=function(){
				if(this.index==0){
					return;
				}else{
				aDiv[this.index-1].style.visibility="hidden";
				}
			}
		}
	})();
	function getStyle(obj,attr){
				return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
			}
}
