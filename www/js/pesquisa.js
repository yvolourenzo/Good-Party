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
  
        "<div class='col-xs-12 linha itemProd' data-toggle='modal' data-target='#modalProduto' data-id='" + dados.codigo + "'><img class='img-responsive' src='https://acheulean-limps.000webhostapp.com/" + dados.foto + "'><p id='nome' style='background-color:white; text-align:center; font-size:20px; width:100%;'>" + dados.produto + "<br> R$:" + dados.valor + " a/o " + dados.quantidade + " <br>  Descrição:" + dados.descricao + "</p></p><button class='botao' href='#janela"+dados.codigo+"' rel='modal"+dados.codigo+"'>Solicitar</button></div><!--                                                                                                                                          JANELA MODAL-->                                  <div class='window' id='janela"+dados.codigo+"'><a href='#' class='fechar'>X Fechar</a><h4 style='text-align:center;'>"+dados.produto+"</h4><img class='img-responsive' src='https://acheulean-limps.000webhostapp.com/" + dados.foto + "'><div class='vendedor' style='background-color:#ECECEC'><h4 style='text-align:center;'>Vendedor</h4><p style='text-align:center; font-size:18px;'>" + dados.usuario +"</p><img style='border-radius:90px; height:50px; margin-left:45%;' class='img-responsive' src='https://acheulean-limps.000webhostapp.com/" + dados.foto_usuario + "'><p style='font-size:18px; text-align:center;'>" + dados.sg_estado +" ," + dados.endereco +" </p></div>"+dados.produto+" esta por apenas R$:" + dados.valor +" a/o " + dados.quantidade + " </p><p style='text-align:center; font-size:18px;'>Quantos deseja solicitar ?</p><input class='form-control' id='quantidade' placeholder='Digite a quantidade aqui' ><button class='botao' onclick='solicitar("+dados.codigo+")'>Solicitar</button></div><div id='mascara'></div><script>$(document).ready(function(){$('button[rel=modal"+dados.codigo+"]').click( function(ev){ev.preventDefault();var id = $(this).attr('href');var alturaTela = $(document).height();var larguraTela = $(window).width();$('#mascara').css({'width':larguraTela,'height':alturaTela});$('#mascara').fadeIn(1000); $('#mascara').fadeTo('slow',0.8);var left = ($(window).width() /2) - ( $(id).width() / 2 );var top = ($(window).height() / 2) - ( $(id).height() / 2 );$(id).css({'top':top,'left':left});$(id).show();});$('#mascara').click( function(){$(this).hide();$('.window').hide();});$('.fechar').click(function(ev){ev.preventDefault();$('#mascara').hide();$('.window').hide();});});</script>" 


         

      });
      $("#tabela").html(itemProduto);

    // fim da função do modal
    },
	});  
});

function solicitar(arg){  
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
  
        "<div class='col-xs-12 linha itemProd' data-toggle='modal' data-target='#modalProduto' data-id='" + dados.codigo + "'><img class='img-responsive' src='https://acheulean-limps.000webhostapp.com/" + dados.foto + "'><p id='nome' style='background-color:white; text-align:center; font-size:20px; width:100%;'>" + dados.produto + "<br> R$:" + dados.valor + " a/o " + dados.quantidade + " <br>  Descrição:" + dados.descricao + "</p></p><button class='botao' href='#janela"+dados.codigo+"' rel='modal"+dados.codigo+"'>Solicitar</button></div><!--                                                                                                                                          JANELA MODAL-->                                  <div class='window' id='janela"+dados.codigo+"'><a href='#' class='fechar'>X Fechar</a><h4 style='text-align:center;'>"+dados.produto+"</h4><img class='img-responsive' src='https://acheulean-limps.000webhostapp.com/" + dados.foto + "'><div class='vendedor' style='background-color:#ECECEC'><h4 style='text-align:center;'>Vendedor</h4><p style='text-align:center; font-size:18px;'>" + dados.usuario +"</p><img style='border-radius:90px; height:50px; margin-left:45%;' class='img-responsive' src='https://acheulean-limps.000webhostapp.com/" + dados.foto_usuario + "'><p style='font-size:18px; text-align:center;'>" + dados.sg_estado +" ," + dados.endereco +" </p></div>"+dados.produto+" esta por apenas R$:" + dados.valor +" a/o " + dados.quantidade + " </p><p style='text-align:center; font-size:18px;'>Quantos deseja solicitar ?</p><input class='form-control' id='quantidade' placeholder='Digite a quantidade aqui' ><button class='botao' onclick='solicitar("+dados.codigo+")'>Solicitar</button></div><div id='mascara'></div><script>$(document).ready(function(){$('button[rel=modal"+dados.codigo+"]').click( function(ev){ev.preventDefault();var id = $(this).attr('href');var alturaTela = $(document).height();var larguraTela = $(window).width();$('#mascara').css({'width':larguraTela,'height':alturaTela});$('#mascara').fadeIn(1000); $('#mascara').fadeTo('slow',0.8);var left = ($(window).width() /2) - ( $(id).width() / 2 );var top = ($(window).height() / 2) - ( $(id).height() / 2 );$(id).css({'top':top,'left':left});$(id).show();});$('#mascara').click( function(){$(this).hide();$('.window').hide();});$('.fechar').click(function(ev){ev.preventDefault();$('#mascara').hide();$('.window').hide();});});</script>" 

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