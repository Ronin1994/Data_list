$(document).ready(function() {
	$('#table_id_example').DataTable({
		"language": {
			"url": "list_ZN.json"
		},
		"paging": true, //开启分页
		"aLengthMenu": [10, 15, 20, 25, 30, 35],
		"searching": true, //禁用搜索
		"lengthChange": true,
		"paging": true, //开启表格分页
		"deferRender": true, //延迟渲染
		"bStateSave": false, //在第三页刷新页面，会自动到第一页
		"iDisplayLength": 10,
		"iDisplayStart": 0,
	});
	/*单行删除数据*/

	$(document).ready(function() {
		var table = $('#table_id_example').DataTable();

		$('#table_id_example tbody').on('click', 'tr', function() {
			if($(this).hasClass('selected')) {
				$(this).removeClass('selected');
			} else {
				table.$('tr.selected').removeClass('selected');
				$(this).addClass('selected');
			}
		});

		$('#deleteButton').click(function() {
			table.row('.selected').remove().draw(false);
		});
	});
	/*编辑*/
	// 数据编辑
        $('#table_id_example tbody').on( 'click', 'button#editrow', function () {
            var data = tables.row( $(this).parents('tr') ).data();
            var fields = $("#add-form").serializeArray();
            jQuery.each( fields, function(i, field){
                //jquery根据name属性查找
                $(":input[name='"+field.name+"']").val(data[i]);
            });
            $(":input[name='mark']").val("edit");
            $("#modal-form").modal("show");//弹出框show
            
        });
});