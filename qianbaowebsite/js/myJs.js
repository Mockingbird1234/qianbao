//控制对象上下左右移动   或 透明度的变化
//obj-控制对象   attr-对象的方向   target-运动的终点   dir-运动的步长   endFn-回调函数
function doMove(obj,attr,target,dir,endFn){
							clearInterval(obj.timer);
							
							obj.timer=setInterval(function(){
							
							var spe=parseFloat(getStyle(obj,attr))+dir;
							
							
							if(spe>target&&dir>0||spe<target&&dir<0){
								spe=target;
							}
							if(attr=="opacity"){
								obj.style[attr]=spe;
							}else{
								obj.style[attr]=spe+"px";
							}
							if(spe==target){
								clearInterval(obj.timer);
								endFn&&endFn();
							}
						},30)
					
					}


//获取对象的计算后的样式
function getStyle(obj,attr){
				return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
			}



//对象上下左右来回抖动
function shake(obj,attr,endFn){
					var spe=parseInt(getStyle(obj,attr));
					var array=[];
					var num=0;
					for(var i=20;i>0;i-=2){
						array.push(i,-i);
					}
					array.push(0);
					
					clearInterval(obj.timer);
					obj.timer=setInterval(function(){
						obj.style[attr]=spe+array[num]+"px";
						num++;
						if(num==array.length){
							clearInterval(obj.timer)
							num=0;
							endFn&&endFn();
						}
					},30)
				}

//获取元素到页面的left/top值
function getPos(obj){
	var pos={left:0,top:0};
	while(obj){
		pos.left+=obj.offsetLeft;
		pos.top+=obj.offsetTop;
		obj=obj.offsetParent;
	}
	return pos;
}

//document.getElementsByClassName方法;
function getElementsByClassName(parent,tagName,className){
	var aEls=parent.getElementsByTagName(tagName);
	var arr=[];
	for(var i=0;i<aEls.length;i++){
		var aClassName=aEls[i].className.split(' ');
		for(var j=0;j<aClassName.length;j++){
			if(aClassName[i]==className){
				arr.push(aEls[i]);
				break;
			}
		}
	}
	return arr;
}


//addClass
function addClass(obj,className){
	if(obj.className==''){
		obj.className=className;
	}else{
		var arrClassName=obj.className.split(' ');
		var _index=arrIndexof(arrClassName,className);
		if(_index==-1){
			obj.className+=' '+className;
		}
		
	}
} 


//removeClass
function removeClass(obj,className){
	if(obj.className!=''){
		var arrClassName=obj.className.split(' ');
		var _index=arrIndexof(arrClassName,className);
		if(_index!=-1){
			arrClassName.splice(_index,1);
			obj.className=arrClassName.join(' ');
		}
	}
}
//判断数组中是否有相同的数据
function arrIndexof(arr,v){
	for(var i=0;i<arr.length;i++){
		if(arr[i]==v){
			return i;
		}
	}
	return -1;
}





