$(document).ready(function(){
	$('#tabela').empty(); //Limpando a tabela
	$.ajax({
		type:'POST',		//Definimos o método HTTP usado
		dataType: 'json',	//Definimos o tipo de retorno
		url: 'https://acheulean-limps.000webhostapp.com/listarProdutoVendedor.php',//Definindo o arquivo onde serão buscados os dados
		success: function(data){
      var itemProduto = "";
			$.each(data.produto, function(i,dados){
				//Adicionando registros retornados na tabela
         itemProduto +=
				"<div class='row linha itemProd' data-toggle='modal' data-target='#modalProduto' data-id='" + dados.codigo + "'><div class='col-xs-3'><img src='https://acheulean-limps.000webhostapp.com/" + dados.foto + "' alt='' style='margin-left : 1px;width: 80px;  height: 80px; text-align: center ; border-radius:120px;'></div><div class='col-xs-9'><div class='row'><div class='col-xs-6'><label for=''><br> " + dados.produto + "</label></div><div class='col-xs-6'><label for=''><strong>Descrição:</strong><br> " + dados.descricao + "</label></div></div><div class='row'><div class='col-xs-6'><label for=''><strong>Quantidade:</strong><br> " + dados.quantidade + "</label></div><div class='col-xs-6'><label for=''><strong>Valor:</strong><br> R$ " + dados.valor + "</label><button id='deletar' onclick='deletar("+dados.codigo+")'>Deletar</button></div></div></div></div><br><hr>";
      });
      $("#tabela").html(itemProduto);
    },
	});  
});


	// FUNÇÃO DE DELETAR PRODUTO
//$(document).on("click","#deletar",function(){
    //document.getElementById("idexclusao") = dados.codigo
function deletar(arg) {
    var form_data = new FormData();
     form_data.append("codigo",arg);
     //nao é pra vir undefined aqui ...
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
};

	// FUNÇÃO DE ALTERAÇÃO DE PRODUTO
// $(document).on("click","#deletar",function(){
//      form_data.append("codigo",$("#codigo").val());    
//         $.ajax({
//         url:"https://acheulean-limps.000webhostapp.com/deleteProduto.php",
//         method:'POST',
//         data:form_data,
//         contentType:false,
//         cache:false,
//         processData:false,
//         success:function(dados){
        
//           alert('Deletado Com sucesso!');

//           location.reload();
//          },
//          error : function (request, status, error) {
//            alert(request.responseText);
//          }
//      });
// });


