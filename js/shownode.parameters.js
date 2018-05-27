//处理属性弹窗

			   function myshow(obj){
			   	var id=obj.parentNode.getAttribute("id")//获取id
			   	
				   var test=document.getElementById("testshow");
				
				 switch (obj.innerHTML){
					 
					 case 'input':createInputValue(obj.innerHTML,id);break;
					 case 'conv':createConvValue(obj.innerHTML,id);break;
					 case 'pool':createPoolValue(obj.innerHTML,id);break;
					 case 'fc':createFcValue(obj.innerHTML,id);break;
					 case 'active':createActiveValue(obj.innerHTML,id);break;
					 case 'dropout':createDropoutValue(obj.innerHTML,id);break;
					  case 'loss':createLossValue(obj.innerHTML,id);break;
					 
					 
					 
					 
					 
					 }
					
				   test.style.display="block";
				   
				   
				   }
			   //窗口隐藏以及生成对象
			   function hide(type,id){
			   var tyep = type;
			    
			   switch(type){
			   	case 'input':setInputValue(id);break;
					 case 'conv':setConvValue(id);break;
					 case 'pool':setPoolValue(id);break;
					 case 'fc':setFcValue(id);break;
					 case 'active':setActiveValue(id);break;
					 case 'dropout':setDropoutValue(id);break;
					  case 'loss':setLossValue(id);break;
			   	
			   }
			 
			   //隐藏
			   var test=document.getElementById("testshow");
			   test.style.display="none";
			   }
