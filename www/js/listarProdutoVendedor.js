$(document).ready(function(){
	$('#tabela').empty(); //Limpando a tabela
	$.ajax({
		type:'POST',		//Definimos o método HTTP usado
		dataType: 'json',	//Definimos o tipo de retorno
		url: 'https://acheulean-limps.000webhostapp.com/listarProdutoVendedor.php',//Definindo o arquivo onde serão buscados os dados
		success: function(dados){
			for(var i=0;dados.length>i;i++){
				//Adicionando registros retornados na tabela
				$('#tabela').append('<tr><td style="color:white;" id="codigo">'+dados[i].cd_produto+'</td><td>'+dados[i].nm_produto+'</td><td>'+dados[i].tipo_quantidade+'</td><td>'+dados[i].valor+'</td><td><img src="'+dados[i].url_img+'"></td><td>'+dados[i].descri+'</td><td><button id="deletar">Deletar</button></td></tr>');
			}
		}
	});
});

$(document).on("click","#deletar",function(){
     var form_data = new FormData();
     form_data.append("codigo",$("#codigo").val());
    
        $.ajax({
        url:"https://acheulean-limps.000webhostapp.com/deleteProduto.php",
        method:'POST',
        data:form_data,
        contentType:false,
        cache:false,
        processData:false,
        success:function(dados){
          alert('Deletado Com sucesso!');
          location.reload();
         },
         error : function (request, status, error) {
           alert(request.responseText);
         }
     });
});