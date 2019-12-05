$(document).ready(function(){
$('#info').empty(); //Limpando a tabela
	$.ajax({
		type:'POST',		//Definimos o método HTTP usado
		dataType: 'json',	//Definimos o tipo de retorno
		url: 'https://acheulean-limps.000webhostapp.com/listaPerfil.php',//Definindo o arquivo onde serão buscados os dados
		success: function(data){
      var itemPessoa = "";
			$.each(data.pessoa, function(i,dados){
				//Adicionando registros retornados na tabela
         itemPessoa +=

        "<div class='row'><div class='col-xs-12'><img id='foto' src='https://acheulean-limps.000webhostapp.com/" + dados.foto + "'></div></div><div class='row'><div class='col-xs-12'><p style='background-color:rgb(224, 68, 89);' id='nome'>" + dados.nome + "</p><p style='background-color:rgb(224, 68, 89);'>Vendedor</p></div></div>";

      });
      $("#info").html(itemPessoa);
    },
	});  
});
