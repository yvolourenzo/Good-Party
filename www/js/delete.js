// This is a JavaScript file
$(document).on("click","#deletar",function(){
     var form_data = new FormData();
     form_data.append("codigo",$("#codigo").val());
    
        $.ajax({
        url:"https://acheulean-limps.000webhostapp.com/deleteProduto.php",
        method:'POST',
        data:form_data,
        contentType:false,
        cache:false,
        processData:false,
        success:function(result){
          alert('Deletado Com sucesso!');
          location.reload();
         },
         error : function (request, status, error) {
           alert(request.responseText);
         }
     });
});
