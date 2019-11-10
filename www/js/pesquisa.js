// This is a JavaScript file
$(document).ready(function(){
	$('#tabela').empty(); //Limpando a tabela
	$.ajax({
		type:'POST',		//Definimos o método HTTP usado
		dataType: 'json',	//Definimos o tipo de retorno
		url: 'https://acheulean-limps.000webhostapp.com/listarProdutoVendedor.php',//Definindo o arquivo onde serão buscados os dados
		success: function(dados){
			for(var i=0;dados.length>i && i<5;i++){
				//Adicionando registros retornados na tabela
				$('#tabela').append('<tr><td style="color:white;" id="codigo">'+dados[i].cd_produto+'</td><td>'+dados[i].nm_produto+'</td><td>'+dados[i].tipo_quantidade+'</td><td>'+dados[i].valor+'</td><td><img src="'+dados[i].url_img+'"></td><td>'+dados[i].descri+'</td><td><button id="ver">Ver</button></td></tr>');
			}
		}
	});
});


