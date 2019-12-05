$(document).ready(function(){
	$('#soli').empty(); //Limpando a tabela
	$.ajax({
		type:'POST',		//Definimos o método HTTP usado
		dataType: 'json',	//Definimos o tipo de retorno
		url:'https://acheulean-limps.000webhostapp.com/solicitaCliente.php',//Definindo o arquivo onde serão buscados os dados
		success: function(data){
      var itemSolicitacao = "";
			$.each(data.solicitacao, function(i,dados){
				//Adicionando registros retornados na tabela
         itemSolicitacao +=
       
        "<div class='row solici'><div class='col-xs-6'><p style='text-align:center;'>Vendedor</p><img class='img' src='https://acheulean-limps.000webhostapp.com/foto/6606.jpeg'><p style='text-align:center; color:black; font-size:18px;'> Fernanda Souza </p><p style='text-align:center;'> Local:  Rua Fagundes 333 ,CE.</p></div><div class='col-xs-6 doce'><img class='img' src='https://acheulean-limps.000webhostapp.com/" + dados.fotoProduto + "'><p> " + dados.quantidade + " " + dados.tipo_quantidade + " De " + dados.nomeProduto + "</p><p>Estado: " + dados.stts + " </p><button style='widht:100%' id='aceitar' onclick='cancelar("+dados.cd_pedido+")'>Cancelar Solicitação</button></div></div><br>" 

      });
      $("#soli").html(itemSolicitacao);
    },
	});  
});
