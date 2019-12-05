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
  
        "<div class='col-xs-12 linha itemProd' data-toggle='modal' data-target='#modalProduto' data-id='" + dados.codigo + "'><img class='img-responsive' src='https://acheulean-limps.000webhostapp.com/" + dados.foto + "' style=' width: 100%; height: 200px; margin-top:10px; border-radius: 10px 10px 0px 0px;'><input id='nome' style='background-color:white; text-align:center; font-size:20px; width:100%;'  placeholder='" + dados.produto + "' readonly><input id='valor' style='background-color:white; text-align:center; font-size:20px; width:100%;'  placeholder='Valor: " + dados.valor + "' readonly><input id='quantidade' style='background-color:white; text-align:center; font-size:20px; width:100%;'  placeholder='Qntd: " + dados.quantidade + "' readonly><textarea style='background-color:white; text-align:center; font-size:20px; width:100%;'  placeholder='Descrição: " + dados.descricao + "' readonly></textarea></p><!--                                                                                                                                                     BOTAO                                                                --><button class='botao' style='widht:50%;' id='deletar' onclick='deletar("+dados.codigo+")'>Excluir</button><button class='botao' style='widht:50%;' id='alterar' href='#janela"+dados.codigo+"' rel='modal"+dados.codigo+"'>Alterar</button></div><style>.display{display:none;}.displayB{display: block;}</style>                                                                                                            <!--  JANELA MODAL-->                                  <div class='window' id='janela"+dados.codigo+"'><a href='#' class='fechar'>X Fechar</a><h4 style='text-align:center;'>Alterar Produto</h4><img class='img-responsive' src='https://acheulean-limps.000webhostapp.com/" + dados.foto + "'><p style='text-align:center;'>Nome</p><input placeholder='"+dados.produto+"' class='form-control' id='nomeAlterado"+dados.codigo+"'><p style='text-align:center;'>Valor</p><input placeholder='"+dados.valor+"' class='form-control' id='valorAlterado"+dados.codigo+"'><button id='salvar' class='botao' onclick='salvarAlteracoes("+dados.codigo+")'>Salvar</button></div><div id='mascara'></div><script>$(document).ready(function(){$('button[rel=modal"+dados.codigo+"]').click( function(ev){ev.preventDefault();var id = $(this).attr('href');var alturaTela = $(document).height();var larguraTela = $(window).width();$('#mascara').css({'width':larguraTela,'height':alturaTela});$('#mascara').fadeIn(1000); $('#mascara').fadeTo('slow',0.8);var left = ($(window).width() /2) - ( $(id).width() / 2 );var top = ($(window).height() / 2) - ( $(id).height() / 2 );$(id).css({'top':top,'left':left});$(id).show();});$('#mascara').click( function(){$(this).hide();$('.window').hide();});$('.fechar').click(function(ev){ev.preventDefault();$('#mascara').hide();$('.window').hide();});}); function salvarAlteracoes(arg){var form_data = new FormData();form_data.append('codigo',arg);form_data.append('nome',$('#nomeAlterado"+dados.codigo+"').val());form_data.append('valor',$('#valorAlterado"+dados.codigo+"').val());$.ajax({url:'https://acheulean-limps.000webhostapp.com/alteraProduto.php',method:'POST',data:form_data,contentType:false,cache:false,processData:false,success:function(dados){alert('Dados atualizados com sucesso!');location.reload();},error : function (request, status, error){alert(request.responseText);}});};</script>" 

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





