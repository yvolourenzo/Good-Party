// This is a JavaScript file
$(document).on("click","#logar",function(){
     var form_data = new FormData();
     form_data.append("senha",$("#senha").val());
     form_data.append("email",$("#email").val());

        $.ajax({
        url:"https://acheulean-limps.000webhostapp.com/login.php",
        method:'POST',
        data:form_data,
        dataType:'json',
        contentType:false,
        cache:false,
        processData:false,
        success:function(data){
          
          if(data.nivel == "Vendedor"){
            location.href='vendedor.html';
          }
          else if(data.nivel == "Comprador"){
            location.href='cliente.html';
          }
            else{
                alert("Você ainda não é registrado , cadastre-se");
                location.reload();
            }
    
         },

         error: function (request, status, error) {
                alert(request.responseText);
         }
     });
});
