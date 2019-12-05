// This is a JavaScript file
function concluir(arg){  
    var form_data = new FormData();
     form_data.append("id_produto",arg);
      form_data.append("quantidade",$("#quantidade").val());
        $.ajax({
        url:"https://acheulean-limps.000webhostapp.com/enviarSolicitacao.php",
        method:'POST',
        data:form_data,
        contentType:false,
        cache:false,
        processData:false,
        success:function(dados){
     
          alert('Sua solicitação foi enviada!');

          location.reload();
         },
         error : function (request, status, error) {
           alert(request.responseText);
         }
     });
};

$(document).ready(function(){
	$('#soli').empty(); //Limpando a tabela
	$.ajax({
		type:'POST',		//Definimos o método HTTP usado
		dataType: 'json',	//Definimos o tipo de retorno
		url: 'https://acheulean-limps.000webhostapp.com/listarProdutoVendedor.php',//Definindo o arquivo onde serão buscados os dados
		success: function(data){
      var itemProduto = "";
			$.each(data.produto, function(i,dados){
				//Adicionando registros retornados na tabela
         itemProduto +=
  
        "<div class='col-xs-6'><img class='img-responsive' src='https://acheulean-limps.000webhostapp.com/" + dados.foto + "'></div><div class='col-xs-6'><td><tr><h3 style='text-align:center;'>" + dados.nome + "</h3></tr><tr><button class='detalhes'><a rel='modal' href='#detalhes' style='color:white;'>Detalhes do pedido</a></button></tr><tr><p id='Sol'>Solicitação Pendente</p></tr></td><div class='window' id='detalhes'><h4>Solicitação para pedido de <br>Bibi Confeiteira</h4><img src='img/oBrownie.jpg' class='img-responsive'><h4 style='text-align:center;'>Você Deseja 6 Dezenas de Brownie de Ovomaltine</h4><p style='text-align:center;'>Total : R$:60,00</p></div><div id='mascara'></div></div>" 

      });
      $("#soli").html(itemProduto);
    },
	});  
});
