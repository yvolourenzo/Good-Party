// Comando para salvar o Cadastro
$(document).on("click","#finalizar",function(){
 // var prop = document.getElementById('caminho').files[0];
 // var nome_imagem = prop.name;
  //var extensao_imagem = nome_imagem.split('.').pop().toLowerCase();

  /*if(jQuery.inArray(extensao_imagem,['png','jpg','jpeg']) == -1) {
     navigator.notification.alert("imagem invalida");
  }else{*/
    var form_data = new FormData();
    // form_data.append("foto",prop);
     form_data.append("nome",$("#nome").val());
     form_data.append("senha",$("#senha").val());
     form_data.append("email",$("#email").val());
     form_data.append("telefone",$("#telefone").val());
     form_data.append("complemento",$("#complemento").val());
     form_data.append("endereco",$("#endereco").val());
     form_data.append("estado",$("#estado").val());
     form_data.append("cpf",$("#CPF").val());
     form_data.append("cnpj",$("#CNPJ").val());
       
        $.ajax({
        url:"https://acheulean-limps.000webhostapp.com/cadastra.php",
        method:'POST',
        data:form_data,
        contentType:false,
        cache:false,
        processData:false,
        success:function(data){
          alert(data);
          location.reload(); 
         }
     });
  //}
});
