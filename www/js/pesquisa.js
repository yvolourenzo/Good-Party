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
  
        "<div class='col-xs-12 linha itemProd' data-toggle='modal' data-target='#modalProduto' data-id='" + dados.codigo + "'><img class='img-responsive' src='https://acheulean-limps.000webhostapp.com/" + dados.foto + "'><p id='nome' style='background-color:white; text-align:center; font-size:20px; width:100%;'>" + dados.produto + "<br> R$:" + dados.valor + " a/o " + dados.quantidade + " <br>  Descrição:" + dados.descricao + "</p></p><a class='botao'  href='#janela1' rel='"+dados.codigo+"'>Solicitar</a><div class='window' id='janela1'><a href='#' class='fechar' style='width:10%;text-align:justify;border:none;white-space:normal;float:none;outline:0;background-color:#CC495B;font-size: 20px;color: white;'>X</a><img class='img-responsive' src='https://acheulean-limps.000webhostapp.com/" + dados.foto + "' style=' width: 100%; height: 200px; margin-top:10px; border-radius: 10px 10px 0px 0px;'><h4 style='text-align:center;'> Este produto esta sendo vendido R$:" + dados.valor + " a/o " + dados.quantidade + ".<br> Digite a quantidade que deseja solicitar ao vendedor </h4><input class='form-control' id='quantidade' type='number'><br><button class='botao' style='widht:50%;' id='concluir' onclick='concluir("+dados.codigo+")'>Concluir</button></div></div></div></div></div><div class='col-xs-12'><p style='text-align:center;'>MEU CEU</p></div><script>$(document).ready(function(){$('a[rel="+dados.codigo+"]').click( function(ev){ev.preventDefault();var id = $(this).attr('href');var alturaTela = $(document).height();var larguraTela = $(window).width();$('#mascara').css({'width':larguraTela,'height':alturaTela});$('#mascara').fadeIn(1000);$('#mascara').fadeTo('slow',0.8);var left = ($(window).width() /2) - ( $(id).width() / 2 );var top = ($(window).height() / 2) - ( $(id).height() / 2 );$(id).css({'top':top,'left':left});$(id).show();});$('#mascara').click( function(){$(this).hide();$('.window').hide();});$('.fechar').click(function(ev){ev.preventDefault();$('#mascara').hide();$('.window').hide();});});$('#exc').click(function(){$('#mascara').hide();$('.window').hide();$alert('A solicitação foi enviada ao vendedor');});</script>" 

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
  
        "<div class='col-xs-12 linha itemProd' data-toggle='modal' data-target='#modalProduto' data-id='" + dados.codigo + "'><img class='img-responsive' src='https://acheulean-limps.000webhostapp.com/" + dados.foto + "' style=' width: 100%; height: 200px; margin-top:10px; border-radius: 10px 10px 0px 0px;'><p id='nome' style='background-color:white; text-align:center; font-size:20px; width:100%;'>" + dados.produto + "<br> R$:" + dados.valor + " a/o " + dados.quantidade + " <br>  Descrição:" + dados.descricao + "</p></p><a class='botao' id='alink' href='#janela1' rel='modal'>Solicitar</a><div class='window' id='janela1'><a href='#' class='fechar'>X</a><h4>Digite a quantidade que deseja solicitar ao vendedor Este produto esta sendo vendido R$:" + dados.valor + " a/o " + dados.quantidade + " </h4><input class='form-control' id='quantidade' type='number'><br><button class='botao' style='widht:50%;' id='concluir' onclick='concluir("+dados.codigo+")'>Concluir</button></div></div></div></div></div>" 

      });
      $("#tabela").html(itemProduto);
      // começo da função do modal
      $(document).ready(function(){
    $('a[rel=modal]').click( function(ev){
        ev.preventDefault();
 
        var id = $(this).attr('href');
 
        var alturaTela = $(document).height();
        var larguraTela = $(window).width();
     
        //colocando o fundo preto
        $('#mascara').css({'width':larguraTela,'height':alturaTela});
        $('#mascara').fadeIn(1000); 
        $('#mascara').fadeTo('slow',0.8);
 
        var left = ($(window).width() /2) - ( $(id).width() / 2 );
        var top = ($(window).height() / 2) - ( $(id).height() / 2 );
     
        $(id).css({'top':top,'left':left});
        $(id).show();   
    });
 
    $('#mascara').click( function(){
        $(this).hide();
        $('.window').hide();
    });
 
    $('.fechar').click(function(ev){
        ev.preventDefault();
        $('#mascara').hide();
        $('.window').hide();
    });
  
});
$('#exc').click(function(){

       $('#mascara').hide();
       $('.window').hide();
       $alert('A solicitação foi enviada ao vendedor');
    });
    // fim da função do modal
    },
	});  
});  



