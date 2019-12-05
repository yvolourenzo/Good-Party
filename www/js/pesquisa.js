$(document).ready(function(){
	$('#tabela').empty(); //Limpando a tabela
	$.ajax({
		type:'POST',		//Definimos o método HTTP usado
		dataType: 'json',	//Definimos o tipo de retorno
		url: 'https://acheulean-limps.000webhostapp.com/listarProdutoCliente.php',//Definindo o arquivo onde serão buscados os dados
		success: function(data){
      var itemProduto = "";
			$.each(data.produto, function(i,dados){
				//Adicionando registros retornados na tabela
         itemProduto +=
  
        "<div class='col-xs-12 linha itemProd' data-toggle='modal' data-target='#modalProduto' data-id='" + dados.codigo + "'><img class='img-responsive' src='https://acheulean-limps.000webhostapp.com/" + dados.foto + "'><p id='nome' style='background-color:white; text-align:center; font-size:20px; width:100%;'>" + dados.produto + "<br> R$:" + dados.valor + " a/o " + dados.quantidade + " <br>  Descrição:" + dados.descricao + "</p></p><a href='#janela"+dados.codigo+"' rel='modal"+dados.codigo+"'>Solicitar</a></div><!--                                                                                                                                          JANELA MODAL-->                                  <div class='window' id='janela"+dados.codigo+"'><a href='#' class='fechar'>X Fechar</a><h4 style='text-align:center;'>"+dados.produto+"</h4><img class='img-responsive' src='https://acheulean-limps.000webhostapp.com/" + dados.foto + "'><p style='font-size:18px;'>"+dados.produto+" esta por apenas R$:" + dados.valor +" a/o " + dados.quantidade + " </p><p style='text-align:center; font-size:18px;'>Quantos deseja solicitar ?</p><input class='form-control' id='quantidade' placeholder='Digite a quantidade aqui'></div><div id='mascara'></div><script>$(document).ready(function(){$('a[rel=modal"+dados.codigo+"]').click( function(ev){ev.preventDefault();var id = $(this).attr('href');var alturaTela = $(document).height();var larguraTela = $(window).width();$('#mascara').css({'width':larguraTela,'height':alturaTela});$('#mascara').fadeIn(1000); $('#mascara').fadeTo('slow',0.8);var left = ($(window).width() /2) - ( $(id).width() / 2 );var top = ($(window).height() / 2) - ( $(id).height() / 2 );$(id).css({'top':top,'left':left});$(id).show();});$('#mascara').click( function(){$(this).hide();$('.window').hide();});$('.fechar').click(function(ev){ev.preventDefault();$('#mascara').hide();$('.window').hide();});});</script>" 


         

      });
      $("#tabela").html(itemProduto);

    // fim da função do modal
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
  
        "<div class='col-xs-12 linha itemProd' data-toggle='modal' data-target='#modalProduto' data-id='" + dados.codigo + "'><img class='img-responsive' src='https://acheulean-limps.000webhostapp.com/" + dados.foto + "' style=' width: 100%; height: 200px; margin-top:10px; border-radius: 10px 10px 0px 0px;'><p id='nome' style='background-color:white; text-align:center; font-size:20px; width:100%;'>" + dados.produto + "<br> R$:" + dados.valor + " a/o " + dados.quantidade + " <br>  Descrição:" + dados.descricao + "</p></p><button class='botao'><a class='botao'  href='#janela1' rel='"+dados.codigo+"'>Solicitar</a></button><div class='window' id='janela1'><a href='#' class='fechar'>X</a><h4>Digite a quantidade que deseja solicitar ao vendedor Este produto esta sendo vendido R$:" + dados.valor + " a/o " + dados.quantidade + " </h4><input class='form-control' id='quantidade' type='number'><br><button class='botao' style='widht:50%;' id='concluir' onclick='concluir("+dados.codigo+")'>Concluir</button></div></div></div></div></div>" 

      });
      $("#tabela").html(itemProduto);
    },
	});  
});  





// function concluir(arg){  
//     var form_data = new FormData();
//      form_data.append("id_produto",arg);
//       form_data.append("quantidade",$("#quantidade").val());
//         $.ajax({
//         url:"https://acheulean-limps.000webhostapp.com/enviarSolicitacao.php",
//         method:'POST',
//         data:form_data,
//         contentType:false,
//         cache:false,
//         processData:false,
//         success:function(dados){
     
//           alert('Sua solicitação foi enviada!');

//           location.reload();
//          },
//          error : function (request, status, error) {
//            alert(request.responseText);
//          }
//      });
// };