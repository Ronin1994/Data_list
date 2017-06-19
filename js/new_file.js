//为td添加一个class
$(function() {
	$("#table td div").click(function() {
		$(this).toggleClass('bg')	
		var tableDate ='';
		var tableDateOut = '';
		var tableClass='';
			
		if($("#table td div").hasClass("bg")) {
			// 获取 table div 凳子 id
			//tableDate = $("div .bg ").text()
			// 获取table 桌号
			//tableClass= $('div .bg ').attr("id")
			//alert(tableClass)

			//var b = new Array(tableDate.length);
			//for(var i=0; i<b.length; i++){
				//b[i] = tableDate.substring(i,i+1)
			}
			//b.sort()
			//for(var i=0; i<b.length; i++){
				//tableDateOut = tableDateOut + (tableClass+ b[i]+ ' ')
			}
			//get data for table
			$("#select-list").html(tableDateOut)
			

		}else{
			$("#select-list").html('')
		}

	})
})