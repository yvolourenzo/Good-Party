// Comando para salvar os Produtos
$(document).on("click","#adicionar",function(){
   var prop = document.getElementById('caminho').files[0];
   var nome_imagem = prop.name;
   var extensao_imagem = nome_imagem.split('.').pop().toLowerCase();

   if(jQuery.inArray(extensao_imagem,['png','jpg','jpeg']) == -1) {
     navigator.notification.alert("imagem invalida");
  }else{ 
    var form_data = new FormData();
     form_data.append("foto",prop);
     form_data.append("nome",$("#nome").val());
     form_data.append("preco",$("#preco").val());
     form_data.append("text",$("#text").val());
     form_data.append("quantidade",$("#quantidade").val());
       
        $.ajax({
        url:"https://acheulean-limps.000webhostapp.com/cadastrarProduto.php",
        method:'POST',
        data:form_data,
        contentType:false,
        cache:false,
        processData:false,
        success:function(data){
          alert("O produto foi registrado com sucesso!!");
          location.reload(); 
         }
     });
   }
});
