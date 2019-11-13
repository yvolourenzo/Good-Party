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
  
        "<div class='col-xs-12 linha itemProd' data-toggle='modal' data-target='#modalProduto' data-id='" + dados.codigo + "'><img class='img-responsive' src='https://acheulean-limps.000webhostapp.com/" + dados.foto + "' style=' width: 100%; height: 200px; margin-top:10px; border-radius: 10px 10px 0px 0px;'><p id='nome' style='background-color:white; text-align:center; font-size:20px; width:100%;'>" + dados.produto + "<br> R$:" + dados.valor + " a/o " + dados.quantidade + " <br>  Descrição:" + dados.descricao + "</p></p><button class='botao' style='widht:100%;' id='solicita' onclick='solicita("+dados.codigo+")'>Solicitar</button></div></div></div></div>" 

      });
      $("#tabela").html(itemProduto);
    },
	});  
});

$(document).on("click","#pesquisar",function(){
    var form_data = new FormData();

     form_data.append("campo",$("#campo").val());
          
        $.ajax({
        url:"https://acheulean-limps.000webhostapp.com/pesquisa.php",
        method:'POST',
        data:form_data,
        dataType: 'json',
        contentType:false,
        cache:false,
        processData:false,
        success:function(data){

      var itemProduto = "";
			$.each(data.produto, function(i,dados){
       
				//Adicionando registros retornados na tabela
         itemProduto +=
  
        "<div class='col-xs-12 linha itemProd' data-toggle='modal' data-target='#modalProduto' data-id='" + dados.codigo + "'><img class='img-responsive' src='https://acheulean-limps.000webhostapp.com/" + dados.foto + "' style=' width: 100%; height: 200px; margin-top:10px; border-radius: 10px 10px 0px 0px;'><p id='nome' style='background-color:white; text-align:center; font-size:20px; width:100%;'>" + dados.produto + "<br> R$:" + dados.valor + " a/o " + dados.quantidade + " <br>  Descrição:" + dados.descricao + "</p></p><button class='botao' style='widht:100%;' id='solicita' onclick='solicita("+dados.codigo+")'>Solicitar</button></div></div></div></div>" 

      });
      $("#tabela").html(itemProduto);
    },
	});  
});  



