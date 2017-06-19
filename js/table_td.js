$(document).ready(function(){
  $("button").click(function(e){
	  if($(e.target).attr("class")== 1){
		  // 
		  $("#set").empty();
		  // ���ñ���ɫ
		  if(($(e.target).css("background-color"))!="rgb(255, 255, 0)"){
			 $(e.target).css("background-color","yellow");
		  }
		  // 
		  var btns = $("button");
		  var txt2 = "";
		  var arr = new Array();
		  for(var i=0; i<btns.length; i++){
			  if(($(btns.eq(i)).css("background-color"))=="rgb(255, 255, 0)"){
				  arr[i] = "<li>"+ $(btns.eq(i)).attr("id")+"桌"+$(btns.eq(i)).text()+"座"+"</li>";
			  	
			  }
		  }
		  // 
		  $("#set").append(arr); 
		
	  }
	  if($(e.target).attr("class")== 2){
		  	var btns = $("button");
	  		for(var i=0; i<btns.length; i++){
			  if(($(btns.eq(i)).css("background-color"))=="rgb(255, 255, 0)"){
				  $(btns.eq(i)).css("background-color","black");
				  $(btns.eq(i)).attr("disabled", true); 
				   // 
		  		  $("#set").empty()
			  }
		  }
	  }
	  if($(e.target).attr("class")== 3){
	  		var btns = $("button");
		    for(var i=0; i<btns.length; i++){
			  if(($(btns.eq(i)).css("background-color"))=="rgb(255, 255, 0)"){
				   $(btns.eq(i)).css("background-color","green");
				   // 
		  		  $("#set").empty();
			  }
			}
	  }
  });
  
});
