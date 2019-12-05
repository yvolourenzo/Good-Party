$(document).ready(function(){
	$('#contatos').empty(); //Limpando a tabela
	$.ajax({
		type:'POST',		//Definimos o método HTTP usado
		dataType: 'json',	//Definimos o tipo de retorno
		url:'https://acheulean-limps.000webhostapp.com/contatoVendedor.php',//Definindo o arquivo onde serão buscados os dados
		success: function(data){
      var itemContato = "";
			$.each(data.contato, function(i,dados){
				//Adicionando registros retornados na tabela
         itemContato +=
       
        "<div class='row solici'><div class='col-xs-6'><img class='img' src='https://acheulean-limps.000webhostapp.com/" + dados.fotoUsuario + "'><p style='text-align:center; color:black; font-size:18px;'>" + dados.nomeUsuario + "</p><p style='text-align:center;'> Local: " + dados.endereco + "," + dados.sg_estado + ".</p></div><div class='col-xs-6 doce'><a class='a'><i class='fa fa-envelope' aria-hidden='true' href='mail:" + dados.email + "'></i> " + dados.email + "</a><br><a 'class='a' href='tel:" + dados.telefone + "'><i class='fa fa-phone' aria-hidden='true'></i> +55 " + dados.telefone + "</a></div></div><br>" 

      });
      $("#contatos").html(itemContato);
    },
	});  
});

