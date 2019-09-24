// This is a JavaScript file
$(function(){
   $('#botaoC2').click(function(){
    $('#status3').removeClass('displayB');
    $('#status3').addClass('display');
    $('#status2').removeClass('display');
    $('#status2').addClass('displayB');
    $('#botaoC2').removeClass('displayB');
    $('#botaoC2').addClass('display');
    $('#botaoC3').removeClass('display');
    $('#botaoC3').addClass('displayB');

    $('#botaoC3').click(function(){
      $('#itemR').removeClass('displayB');
      $('#itemR').addClass('display');
    });
   });
   $('#excluir').click(function(){
    $('#itemC').removeClass('displayB');
    $('#itemC').addClass('display');
   });

   $('#excluir2').click(function(){
    $('#itemE').removeClass('displayB');
    $('#itemE').addClass('display');
   });

   $('#excluir3').click(function(){
    $('#itemD').removeClass('displayB');
    $('#itemD').addClass('display');
   });
});
