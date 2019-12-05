$(document).ready(function(){
	$('#tabela').empty(); //Limpando a tabela
	$.ajax({
		type:'POST',		//Definimos o método HTTP usado
		dataType: 'json',	//Definimos o tipo de retorno
		url:'https://acheulean-limps.000webhostapp.com/statusSolicitacoesCliente.php',//Definindo o arquivo onde serão buscados os dados
		success: function(data){
      var itemSolicitacao = "";
			$.each(data.solicitacao, function(i,dados){
				//Adicionando registros retornados na tabela
         itemSolicitacao +=
       
        "<div class='row solici'><div class='col-xs-6'><img class='img' src='https://acheulean-limps.000webhostapp.com/" + dados.fotoUsuario + "'><p style='text-align:center; color:black; font-size:18px;'>" + dados.nomeUsuario + "</p><p style='text-align:center;'> Local: " + dados.endereco + "," + dados.sg_estado + ".</p></div><div class='col-xs-6 doce'><img class='img' src='https://acheulean-limps.000webhostapp.com/" + dados.fotoProduto + "'><p> " + dados.quantidade + " " + dados.tipo_quantidade + " De " + dados.nomeProduto + "</p><p>Estado: " + dados.stts + " </p><button style='widht:100%' id='aceitar' onclick='aceitar("+dados.cd_pedido+")'>Aceitar</button><button id='esquerdo' style='widht:100%' id='recusar' onclick='recusar("+dados.cd_pedido+")'>Recusar</button></div></div><br>" 

      });
      $("#tabela").html(itemSolicitacao);
    },
	});  
});

function aceitar(arg) {
    
    var form_data = new FormData();
     form_data.append("id_pedido",arg);
        $.ajax({
        url:"https://acheulean-limps.000webhostapp.com/solicitaçãoaceita.php",
        method:'POST',
        data:form_data,
        contentType:false,
        cache:false,
        processData:false,
        success:function(dados){
     
          alert('Sua solicitação foi enviada, Seus meios para contato serão automaticamente disponibilizados para o cliente!');
          location.reload();
         },
         error : function (request, status, error) {
           alert(request.responseText);
         }
     });
};

function recusar(arg) {
    
    var form_data = new FormData();
     form_data.append("id_pedido",arg);
        $.ajax({
        url:"https://acheulean-limps.000webhostapp.com/solicitacaoRecusada.php",
        method:'POST',
        data:form_data,
        contentType:false,
        cache:false,
        processData:false,
        success:function(dados){
     
          alert('Você Recusou a solicitação , uma notificação sera enviada ao cliente!');

          location.reload();
         },
         error : function (request, status, error) {
           alert(request.responseText);
         }
     });
};

