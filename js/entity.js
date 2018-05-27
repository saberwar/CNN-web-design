//配置信息类
function Parameters(){
	this.data_path="";
	this.save_path="";
	this.order="";
	this.learning_rate_base="";
	this.learning_rate_decay="";
	this.regularaztion_rate="";
	this.training_steps="";
	this.moving_average_decay="";
	this.name="input";
}
//get与set方法
Parameters.prototype.get1=function(){
	
	return this.data_path;
	
}
Parameters.prototype.get2=function(){
	
	return this.save_path;
	
}
Parameters.prototype.get3=function(){
	
	return this.order;
	
}
Parameters.prototype.get4=function(){
	
	return this.learning_rate_base;
	
}
Parameters.prototype.get5=function(){
	
	return this.learning_rate_decay;
	
}
Parameters.prototype.get6=function(){
	
	return this.regularaztion_rate;
	
}
Parameters.prototype.get7=function(){
	
	return this.training_steps;
	
}
Parameters.prototype.get8=function(){
	
	return this.moving_average_decay;
	
}
Parameters.prototype.get9=function(){
	
	return this.name;
	
}
Parameters.prototype.set1=function(a){
	
	this.data_path=a;
}
Parameters.prototype.set2=function(a){
	
	this.save_path=a;
}
Parameters.prototype.set3=function(a){
	
	this.order=a;
}
Parameters.prototype.set4=function(a){
	
	this.learning_rate_base=a;
}
Parameters.prototype.set5=function(a){
	
	this.learning_rate_decay=a;
}
Parameters.prototype.set6=function(a){
	
	this.regularaztion_rate=a;
}
Parameters.prototype.set7=function(a){
	
	this.training_steps=a;
}
Parameters.prototype.set8=function(a){
	
	this.moving_average_decay=a;
}
Parameters.prototype.set9=function(a){
	
	this.name=a;
}

//填充数据
Parameters.prototype.fillData=function(){
	document.getElementById("data_path").value=this.get1();
	document.getElementById("save_path").value=this.get2();

	document.getElementById("parameters_learning_rate_base").value=this.get4();
	document.getElementById("parameters_learning_rate_decay").value=this.get5();
	document.getElementById("parameters_regularaztion_rate").value=this.get6();
	document.getElementById("parameters_training_steps").value=this.get7();
	document.getElementById("parameters_moving_average_decay").value=this.get8();

				
}
//记录数据
Parameters.prototype.upData=function(){
	this.set1(document.getElementById("data_path").value);
	this.set2(document.getElementById("save_path").value);

	this.set4(document.getElementById("parameters_learning_rate_base").value);
	this.set5(document.getElementById("parameters_learning_rate_decay").value);
	this.set6(document.getElementById("parameters_regularaztion_rate").value);
	this.set7(document.getElementById("parameters_training_steps").value);
	this.set8(document.getElementById("parameters_moving_average_decay").value);

	
	
	
	
}
//创建json
Parameters.prototype.makeJSON=function(){
	var param={
					  "order":"2",
    "name":"parameters",
    "learning_rate_base":this.get4(),
   	"learning_rate_decay":this.get5(),
   	"regularaztion_rate":this.get6(),
    "training_steps":this.get7(),
    "moving_average_decay":this.get8()
					  
					  }
	return param;
	
}



// 父类

  function MyNode(id){
	  
	  this.id=id;
	  
	  
	  
	  }
	  
	  //实体类Input
	  function Input(id){
		  MyNode.call(this,id);
		  this.name='input';
		  this.order='';
		  this.image_height='';
		  this.image_widht='';
		  this.image_channels='';
		  this.batch_size='';
		  this.num_class='';
		  
		  }
		  Input.prototype=new MyNode();
		  Input.prototype.get1=function(){
			  return this.name;
			  
			  }
			   Input.prototype.get2=function(){
			  return this.order;
			  
			  }
			   Input.prototype.get3=function(){
			  return this.image_height;
			  
			  }
			   Input.prototype.get4=function(){
			  return this.image_widht;
			  
			  }
			   Input.prototype.get5=function(){
			  return this.image_channels;
			  
			  }
			   Input.prototype.get6=function(){
			  return this.batch_size;
			  
			  }
			   Input.prototype.get7=function(){
			  return this.num_class;
			  
			  }
			 Input.prototype.set1=function(a){
				 
				 this.name=a;
				 
				 }
				  Input.prototype.set2=function(a){
				 
				 this.order=a;
				 
				 }
				  Input.prototype.set3=function(a){
				 
				 this.image_height=a;
				 
				 }
				  Input.prototype.set4=function(a){
				 
				 this.image_widht=a;
				 
				 }
				  Input.prototype.set5=function(a){
				 
				 this.image_channels=a;
				 
				 }
				  Input.prototype.set6=function(a){
				 
				 this.batch_size=a;
				 
				 } 
				 Input.prototype.set7=function(a){
				 
				 this.num_class=a;
				 
				 }
				 Input.prototype.fillData=function(){
				
				
				document.getElementById("Input_image_height").value=this.get3();
				document.getElementById("Input_image_widht").value=this.get4();
				document.getElementById("Input_image_channels").value=this.get5();
				document.getElementById("Input_batch_size").value=this.get6();
				document.getElementById("Input_num_class").value=this.get7();
				
				//alert(this.id);
				
				
				
				}
				function setInputValue(id){
				//alert(id);
				var judge=false;
				for(var i=0;i<input_list.length;i++){
					
					  if(input_list[i].id==id){
						  
						  judge=true;
						
				
				var t3=document.getElementById("Input_image_height").value;
				var t4=document.getElementById("Input_image_widht").value;
				var t5=document.getElementById("Input_image_channels").value;
				var t6=document.getElementById("Input_batch_size").value;
				var t7=document.getElementById("Input_num_class").value;
						 
				   input_list[i].set3(t3);
				    input_list[i].set4(t4);
					 input_list[i].set5(t5);
					  input_list[i].set6(t6);
					  input_list[i].set7(t7);
						  }
					
					
					}
					if(!judge){
				var input_test=new Input(id);
				
				var t3=document.getElementById("Input_image_height").value;
				var t4=document.getElementById("Input_image_widht").value;
				var t5=document.getElementById("Input_image_channels").value;
				var t6=document.getElementById("Input_batch_size").value;
				var t7=document.getElementById("Input_num_class").value;
						
				   input_test.set3(t3);
				    input_test.set4(t4);
					 input_test.set5(t5);
					  input_test.set6(t6);
					  input_test.set7(t7);
					 //CreateJson(data_test);
				       input_list.push(input_test);
				
					}
					
					
					
				}
	  //实体类*******************Data********************************************
		function Data(id){
			MyNode.call(this,id);
			this.name='input';
			this.check_point_dir='';
			this.train_datas_dir='';
			this.train_labels_dir='';
			this.eval_datas_dir='';
			this.eval_labels_dir='';
			this.channel='';
			this.op='';
			
			}
			
			Data.prototype=new MyNode();
			//数据填充方法
			Data.prototype.fillData=function(){
				
				document.getElementById("Data_check_point_dir").value=this.get1();
				document.getElementById("Data_train_datas_dir").value=this.get2();
				document.getElementById("Data_train_labels_dir").value=this.get3();
				document.getElementById("Data_eval_datas_dir").value=this.get4();
				document.getElementById("Data_eval_labels_dir").value=this.get5();
				document.getElementById("Data_channel").value=this.get6();
				document.getElementById("Data_op").value=this.get7();
				
				//alert(this.id);
				
				
				
				}
			//get方法
			Data.prototype.get1=function(){
				return this.check_point_dir;
				
				}
				
				Data.prototype.get2=function(){
				return this.train_datas_dir;
				
				}
				Data.prototype.get3=function(){
				return this.train_labels_dir;
				
				}
				Data.prototype.get4=function(){
				return this.eval_datas_dir;
				
				}
				Data.prototype.get5=function(){
				return this.eval_labels_dir;
				
				}
				Data.prototype.get6=function(){
				return this.channel;
				
				}
				Data.prototype.get7=function(){
				return this.op;
				
				}
			
		//set方法
		Data.prototype.set1=function(a){
			this.check_point_dir=a;														
			}	
			Data.prototype.set2=function(a){
			this.train_datas_dir=a;														
			}	
			
			Data.prototype.set3=function(a){
			this.train_labels_dir=a;														
			}
			
			Data.prototype.set4=function(a){
			this.eval_datas_dir=a;														
			}
			
			Data.prototype.set5=function(a){
			this.eval_labels_dir=a;														
			}
			
			Data.prototype.set6=function(a){
			this.channel=a;														
			}
			Data.prototype.set7=function(a){
			this.op=a;														
			}
			//根据属性值，生成对象
			function setDataValue(id){
				//alert(id);
				var judge=false;
				for(var i=0;i<data_list.length;i++){
					
					  if(data_list[i].id==id){
						  
						  judge=true;
						  var t1=document.getElementById("Data_check_point_dir").value;
						  var t2=document.getElementById("Data_train_datas_dir").value;
				
				var t3=document.getElementById("Data_train_labels_dir").value;
				var t4=document.getElementById("Data_eval_datas_dir").value;
				var t5=document.getElementById("Data_eval_labels_dir").value;
				var t6=document.getElementById("Data_channel").value;
				var t7=document.getElementById("Data_op").value;
						   data_list[i].set1(t1);
						   data_list[i].set2(t2);
				   data_list[i].set3(t3);
				    data_list[i].set4(t4);
					 data_list[i].set5(t5);
					  data_list[i].set6(t6);
					  data_list[i].set7(t7);
						  }
					
					
					}
					if(!judge){
				var data_test=new Data(id);
				var t1=document.getElementById("Data_check_point_dir").value;
				var t2=document.getElementById("Data_train_datas_dir").value;
				
				var t3=document.getElementById("Data_train_labels_dir").value;
				var t4=document.getElementById("Data_eval_datas_dir").value;
				var t5=document.getElementById("Data_eval_labels_dir").value;
				var t6=document.getElementById("Data_channel").value;
				var t7=document.getElementById("Data_op").value;
				 data_test.set1(t1);
				  data_test.set2(t2);
				   data_test.set3(t3);
				    data_test.set4(t4);
					 data_test.set5(t5);
					  data_test.set6(t6);
					   data_test.set7(t7);
					 //CreateJson(data_test);
				       data_list.push(data_test);
				
					}
					
					
					
				}
		//****************************************conv类*********************************************
		
		
		//conv对象
	
	function conv(id){
		MyNode.call(this,id);
		this.order='0';
		this.name='conv';
		this.kernel_size='';
		this.input_num='';
		this.output_num='';
		this.stride='';
		this.trainable='';
		this.op='';							
		}
		conv.prototype=new MyNode();
		conv.prototype.fillData=function(){
			
			
			document.getElementById("Conv_kernel_size").value=this.get1();
			document.getElementById("Conv_Input_num").value=this.get2();
			document.getElementById("Conv_Output_num").value=this.get3();
			document.getElementById("Conv_Stride").value=this.get4();
			document.getElementById("Conv_select").value=this.get5();
			document.getElementById("Conv_Op").value=this.get6();
			
			
			
			
			}
		
		
		//get方法
		conv.prototype.get1=function(){
			
			return this.kernel_size;
			
			
			}
			
			conv.prototype.get2=function(){
			
			return this.input_num;
			
			
			}
			conv.prototype.get3=function(){
			
			return this.output_num;
			
			
			}
			conv.prototype.get4=function(){
			
			return this.stride;
			
			
			}
			conv.prototype.get5=function(){
			
			return this.trainable;
			
			
			}
			conv.prototype.get6=function(){
			
			return this.op;
			
			
			}
		
		
	//set方法
	
	conv.prototype.set1=function(a){
		
		this.kernel_size=a;
		
		
		}
		conv.prototype.set2=function(a){
		
		this.input_num=a;
		
		
		
		}
		conv.prototype.set3=function(a){
		
		this.output_num=a;
		
		
		
		}
		conv.prototype.set4=function(a){
		
		this.stride=a;
		
		
		
		}
		conv.prototype.set5=function(a){
		
		this.trainable=a;
		
		
		
		}
		conv.prototype.set6=function(a){
		
		this.op=a;
		
		
		
		}
		conv.prototype.set=function(a){
		
		this.order=a;
		
		
		
		}
		
		//根据值生成对象
		function setConvValue(id){
			
				var judge=false;
				for(var i=0;i<conv_list.length;i++){
					
					  if(conv_list[i].id==id){
						  
						  judge=true;
						  var t1=document.getElementById("Conv_kernel_size").value;
			var t2=document.getElementById("Conv_Input_num").value;
			var t3=document.getElementById("Conv_Output_num").value;
			var t4=document.getElementById("Conv_Stride").value;
			var t5=document.getElementById("Conv_select").value;
			var t6=document.getElementById("Conv_Op").value;
			conv_list[i].set1(t1);
				  conv_list[i].set2(t2);
				   conv_list[i].set3(t3);
				    conv_list[i].set4(t4);
					 conv_list[i].set5(t5);
					  conv_list[i].set6(t6);
						  }
					
					
					}
					if(!judge){
			var conv_test=new conv(id);
		
			var t1=document.getElementById("Conv_kernel_size").value;
			var t2=document.getElementById("Conv_Input_num").value;
			var t3=document.getElementById("Conv_Output_num").value;
			var t4=document.getElementById("Conv_Stride").value;
			var t5=document.getElementById("Conv_select").value;
			var t6=document.getElementById("Conv_Op").value;
			conv_test.set1(t1);
				  conv_test.set2(t2);
				   conv_test.set3(t3);
				    conv_test.set4(t4);
					 conv_test.set5(t5);
					  conv_test.set6(t6);
					
					conv_list.push(conv_test);
				
					 // CreateJson(conv_test);
					}
			}
			//*******************************pool类******************************************
				
	//pool对象
	function pool(id){
		MyNode.call(this,id);
		this.order='';
		this.name='pool';
		this.kernel_size='';
		this.stride='';
		this.op='';
		
		
		
		
		}
		pool.prototype=new MyNode();
		pool.prototype.fillData=function(){
			document.getElementById("Pool_kernel_size").value=this.get1();
				document.getElementById("Pool_Stride").value=this.get2();
				document.getElementById("Pool_Op").value=this.get3();
			
			}
		//get方法
		pool.prototype.get1=function(){
			return this.kernel_size;
			
			}
			pool.prototype.get2=function(){
			return this.stride;
			
			}
			pool.prototype.get3=function(){
			return this.op;
			
			}
		//set方法
		pool.prototype.set1=function(a){
			
			this.kernel_size=a;
			
			
			}
			pool.prototype.set2=function(a){
			
			this.stride=a;
			
			
			}
			pool.prototype.set3=function(a){
			
			this.op=a;
			
			
			}
			
			//根据值生成对象
			function setPoolValue(id){
				var judge=false;
				for(var i=0;i<pool_list.length;i++){
					
					  if(pool_list[i].id==id){
						  
						  judge=true;
						  var t1=document.getElementById("Pool_kernel_size").value;
				var t2=document.getElementById("Pool_Stride").value;
				var t3=document.getElementById("Pool_Op").value;
				pool_list[i].set1(t1);
				  pool_list[i].set2(t2);
				   pool_list[i].set3(t3);
						  }
					
					
					}
					if(!judge){
				var pool_test=new pool(id);
				var t1=document.getElementById("Pool_kernel_size").value;
				var t2=document.getElementById("Pool_Stride").value;
				var t3=document.getElementById("Pool_Op").value;
				pool_test.set1(t1);
				  pool_test.set2(t2);
				   pool_test.set3(t3);
				  pool_list.push(pool_test);
				 //CreateJson(pool_test);
				
					}
				}
				
				//************************fc***********************************
					//fc对象
	function  fc(id){
		MyNode.call(this,id);
		this.order="";
		this.name='fc';
		//this.rows='';
		this.cols='';
		this.trainable='';
		this.op='';
		
		
		
		
		}
		fc.prototype=new MyNode();
		fc.prototype.fillData=function(){
			//document.getElementById("Fc_rows").value=this.get1();
			 document.getElementById("Fc_cols").value=this.get2();
			  document.getElementById("Fc_select").value=this.get3();
			   document.getElementById("Fc_Op").value=this.get4();
			
			
			}
		//get方法
		/*fc.prototype.get1=function(){
			
			return this.rows;
			
			}*/
			fc.prototype.get2=function(){
			
			return this.cols;
			
			}
			fc.prototype.get3=function(){
			
			return this.trainable;
			
			}
			fc.prototype.get4=function(){
			
			return this.op;
			
			}
		//set方法
		/*fc.prototype.set1=function(a){
			
			this.rows=a;
			
			
			
			}*/
			fc.prototype.set2=function(a){
			
			this.cols=a;
			
			
			
			}
			fc.prototype.set3=function(a){
			
			this.trainable=a;
			
			
			
			}
			fc.prototype.set4=function(a){
			
			this.op=a;
			
			
			
			}
			
			//生成对象
			
			function setFcValue(id){
				var judge=false;
				for(var i=0;i<fc_list.length;i++){
					
					  if(fc_list[i].id==id){
						  
						  judge=true;
						   //var t1=document.getElementById("Fc_rows").value;
			   var t2=document.getElementById("Fc_cols").value;
			   var t3=document.getElementById("Fc_select").value;
			   var t4=document.getElementById("Fc_Op").value;
			       //fc_list[i].set1(t1);
				  fc_list[i].set2(t2);
				   fc_list[i].set3(t3);
				fc_list[i].set4(t4);
						  }
					
					
					}
					if(!judge){
			   var fc_test=new fc(id);
			   
			   //var t1=document.getElementById("Fc_rows").value;
			   var t2=document.getElementById("Fc_cols").value;
			   var t3=document.getElementById("Fc_select").value;
			   var t4=document.getElementById("Fc_Op").value;
			  
			   
			   //fc_test.set1(t1);
				  fc_test.set2(t2);
				   fc_test.set3(t3);
				fc_test.set4(t4);
				// CreateJson(fc_test);
				fc_list.push(fc_test);
					}
			}
			//********************Active类*****************************************
			//Active对象

function Active(id){
	MyNode.call(this,id);
	this.order="";
	this.name='avtive';
	this.op='';
	
	
	
	
	
	}
	Active.prototype=new MyNode();
	Active.prototype.fillData=function(){
		document.getElementById("Active_op").value=this.get1();
		
		}
	
	//get方法
	Active.prototype.get1=function(){
		
		return this.op;
		
		
		}
	
	//set方法
	Active.prototype.set1=function(a){
		
		this.op=a;
		
		}
		
		//生成方法
		
		function setActiveValue(id){
			var judge=false;
				for(var i=0;i<active_list.length;i++){
					
					  if(active_list[i].id==id){
						  
						  judge=true;
						  var t1=document.getElementById("Active_op").value;
						  active_list[i].set1(t1);
						  }
					
					
					}
					if(!judge){
		    var active_test=new Active(id);
			var t1=document.getElementById("Active_op").value;
			
			active_test.set1(t1);	
			 //CreateJson(active_test);
			active_list.push(active_test);
					}
		}
		//*******************************Dropout******************************************************
		
//Dropout对象
function Dropout(id){
	MyNode.call(this,id);
	this.order="";
	this.prob="";
	this.name='dropout';
	this.op='';
	
	
	
	
	}
	Dropout.prototype=new MyNode();
	Dropout.prototype.fillData=function(){
		
		document.getElementById("Dropout_Op").value=this.get1();
		document.getElementById("Dropout_prob").value=this.get2();
		}
	
	//get方法
	Dropout.prototype.get1=function(){
		return this.op;
		
		}
	Dropout.prototype.get2=function(){
		return this.prob;
		
		}
	//set方法
	Dropout.prototype.set1=function(a){
		
		this.op=a;
		
		
		
		}
		Dropout.prototype.set2=function(a){
		
		this.prob=a;
		
		
		
		}
		
		//生成对象
		
		function setDropoutValue(id){
			
			
			var judge=false;
				for(var i=0;i<dropout_list.length;i++){
					
					  if(dropout_list[i].id==id){
						  
						  judge=true;
						  var t1=document.getElementById("Dropout_Op").value;
						   var t2=document.getElementById("Dropout_prob").value;
						   
						   dropout_list[i].set1(t1);
						    dropout_list[i].set2(t2);	
						  }
					
					
					}
					if(!judge){
		      var dropout_test=new Dropout(id);
			  var t1=document.getElementById("Dropout_Op").value;
			  var t2=document.getElementById("Dropout_prob").value;
			 dropout_test.set1(t1);	
			 dropout_test.set2(t2);	
			 dropout_list.push(dropout_test);
			// CreateJson(dropout_test);
					}
		}
		//***************************Loss****************************
		//Loss对象
function Loss(id){
	MyNode.call(this,id);
	this.order="";
	this.name='loss';
	this.op='';
	
	
	
	
	}
	Loss.prototype=new MyNode();
Loss.prototype.fillData=function(){
	
	document.getElementById("Loss_select").value=this.get1();
	
	
	}

//get方法

Loss.prototype.get1=function(){
	
	return this.op;
	
	}
//set方法
Loss.prototype.set1=function(a){
	
	this.op=a;
	
	}
	//生成对象
	function setLossValue(id){
		var judge=false;
				for(var i=0;i<loss_list.length;i++){
					
					  if(loss_list[i].id==id){
						  
						  judge=true;
						   var t1=document.getElementById("Loss_select").value;
						   loss_list[i].set1(t1);
						  }
					
					
					}
					if(!judge){
	  var loss_test=new Loss(id);
	  var t1=document.getElementById("Loss_select").value;
	   loss_test.set1(t1);	
	   
	    loss_list.push(loss_test);
			// CreateJson(loss_test);
					}
	}