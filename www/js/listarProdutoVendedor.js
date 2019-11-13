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
  
        "<div class='col-xs-12 linha itemProd' data-toggle='modal' data-target='#modalProduto' data-id='" + dados.codigo + "'><img class='img-responsive' src='https://acheulean-limps.000webhostapp.com/" + dados.foto + "' style=' width: 100%; height: 200px; margin-top:10px; border-radius: 10px 10px 0px 0px;'><input id='nome' style='background-color:white; text-align:center; font-size:20px; width:100%;'  placeholder='" + dados.produto + "' readonly><input id='valor' style='background-color:white; text-align:center; font-size:20px; width:100%;'  placeholder='Valor: " + dados.valor + "' readonly><input id='quantidade' style='background-color:white; text-align:center; font-size:20px; width:100%;'  placeholder='Qntd: " + dados.quantidade + "' readonly><textarea style='background-color:white; text-align:center; font-size:20px; width:100%;'  placeholder='Descrição: " + dados.descricao + "' readonly></textarea><input class='form-control impu display' type='file' name='caminho' id='caminho' ></p><button class='botao' style='widht:50%;' id='deletar' onclick='deletar("+dados.codigo+")'>Excluir</button><button class='botao' style='widht:50%;' id='alterar' onclick='alterar("+dados.codigo+")'>Alterar</button></div></div></div></div><style>.display{display:none;}.displayB{display: block;}</style>" 

      });
      $("#tabela").html(itemProduto);
    },
	});  
});

function deletar(arg) {
    var form_data = new FormData();
     form_data.append("codigo",arg);
  
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

$('#alterar').click(function(){
      $("#nome").prop("readonly", false);
      alert('meu rabo');
  desabilita();

});
function desabilita() {
  $("#nome").prop("readonly", true);
  $("#valor").prop("readonly", true);
  $("#quantidade").prop("readonly", true);
  $("#descro").prop("readonly", true);
    alert('MEU CUZAO CHEIO DE MERDA');
}



