$(function(){
  $('#enviar').click(function(){
    $('#etapa1').removeClass('displayB');
    $('#etapa1').addClass('display');
    $('#etapa2').removeClass('display');
    $('#etapa2').addClass('displayB');
    $('#anterior').removeClass('display');
    $('#anterior').addClass('displayB');
    $('#enviar').removeClass('displayB');
    $('#enviar').addClass('display');
    $('#enviar2').removeClass('display');
    $('#enviar2').addClass('displayB');
    // display B, mostra a div
    // display , remove a div

    $('#anterior').click(function(){
    $('#etapa1').removeClass('display');
    $('#etapa1').addClass('displayB');
    $('#etapa2').removeClass('displayB');
    $('#etapa2').addClass('display');
    $('#anterior').removeClass('displayB');
    $('#anterior').addClass('display');
    $('#enviar2').removeClass('displayB');
    $('#enviar2').addClass('display');
    $('#enviar').removeClass('display');
    $('#enviar').addClass('displayB');
    });
    // Função do botão enviar 2 , ativa a etapa 3 , e retira a etapa 2
    $('#enviar2').click(function(){
    $('#etapa3').removeClass('display');
    $('#etapa3').addClass('displayB');
    $('#etapa2').removeClass('displayB');
    $('#etapa2').addClass('display');
    $('#anterior').removeClass('displayB');
    $('#anterior').addClass('display');
    $('#anterior2').removeClass('display');
    $('#anterior2').addClass('displayB');
    $('#enviar2').removeClass('displayB');
    $('#enviar2').addClass('display');
    $('#finalizar').removeClass('display');
    $('#finalizar').addClass('displayB');
    });
    // anterior da pagina 3 
    $('#anterior2').click(function(){
    $('#etapa3').removeClass('displayB');
    $('#etapa3').addClass('display');
    $('#etapa2').removeClass('display');
    $('#etapa2').addClass('displayB');
    $('#anterior').removeClass('display');
    $('#anterior').addClass('displayB');
    $('#enviar2').removeClass('display');
    $('#enviar2').addClass('displayB');
    $('#anterior2').removeClass('displayB');
    $('#anterior2').addClass('display');
    $('#finalizar').removeClass('displayB');
    $('#finalizar').addClass('display');
    });  
    // botão de finalizar
    $('#finalizar').click(function(){
      if($('#senha').val() != $('#senhac').val()){
        alert('As senhas estão diferentes');
     }
     else if ($('#CPF').hasClass('displayB') && $('#CNPJ').hasClass('display') ) {
        $(location).attr('href', 'cliente.html');
     }
      else if ($('#CNPJ').hasClass('displayB') && $('#CPF').hasClass('display') ) {
        $(location).attr('href', 'vendedor.html');
     }  
  });
  // funções dos radios buttons
  // comprador
  $('input[type=radio][name=opcao]').change(function(){
    if (this.value == 'Comprador') {
        $('#CPF').removeClass('display');
        $('#CPF').addClass('displayB');
        $('#CNPJ').removeClass('displayB');
        $('#CNPJ').addClass('display');
    }
    else if (this.value == 'Vendedor') {
        $('#CNPJ').removeClass('display');
        $('#CNPJ').addClass('displayB');
        $('#CPF').removeClass('displayB');
        $('#CPF').addClass('display');
    }
  });
});
});
function index(){
  location.href = "index.html";
  }
