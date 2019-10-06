// This is a JavaScript file
$(document).ready(function(){
    $("a[rel=modal]").click( function(ev){
        ev.preventDefault();
 
        var id = $(this).attr("href");
 
        var alturaTela = $(document).height();
        var larguraTela = $(window).width();
     
        //colocando o fundo preto
        $('#mascara').css({'width':larguraTela,'height':alturaTela});
        $('#mascara').fadeIn(1000); 
        $('#mascara').fadeTo("slow",0.8);
 
        var left = ($(window).width() /2) - ( $(id).width() / 2 );
        var top = ($(window).height() / 2) - ( $(id).height() / 2 );
     
        $(id).css({'top':top,'left':left});
        $(id).show();   
    });
 
    $("#mascara").click( function(){
        $(this).hide();
        $(".window").hide();
    });
 
    $('.fechar').click(function(ev){
        ev.preventDefault();
        $("#mascara").hide();
        $(".window").hide();
    });

    $('#exc').click(function(ev){
        ev.preventDefault();
        $("#mascara").hide();
        $(".window").hide();
        alert('O cliente foi aceito , e foi transferido para a pagina de chat');
        $("#Sol").text('Solicitação Aceita');
    });

    $('#exc1').click(function(ev){
        ev.preventDefault();
        $("#mascara").hide();
        $(".window").hide();
        alert('O cliente foi aceito , e foi transferido para a pagina de chat');
        $("#Sol1").text('Solicitação Aceita');
    });

    $('#exc2').click(function(ev){
        ev.preventDefault();
        $("#mascara").hide();
        $(".window").hide();
        alert('O cliente foi aceito , e foi transferido para a pagina de chat');
        $("#Sol2").text('Solicitação Aceita');
    });

    $('#exc3').click(function(ev){
        ev.preventDefault();
        $("#mascara").hide();
        $(".window").hide();
        alert('O cliente foi aceito , e foi transferido para a pagina de chat');
        $("#Sol3").text('Solicitação Aceita');
    });

    $('#edi').click(function(ev){
        ev.preventDefault();
        $("#mascara").hide();
        $(".window").hide();
        $(".solici").hide();
        alert('Você cancelou a solicitação , e ela foi excluida')
    });
   
   $('#exc7').click(function(ev){
        ev.preventDefault();
        $("#mascara").hide();
        $(".window").hide();
        alert('A negociação foi aceita ! Entregue o produto no Horario e Local marcado!');
    });

    $('#ok').click(function(ev){
        ev.preventDefault();
        $("#mascara").hide();
        $(".window").hide();
    });

    $('#edi7').click(function(ev){
        ev.preventDefault();
        $("#mascara").hide();
        $(".window").hide();
        $(".solici").hide();
        alert('Você cancelou a negociação!');
    });
    

});

