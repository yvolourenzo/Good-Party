$(document).ready(function(){
$('#info').empty(); //Limpando a tabela
	$.ajax({
		type:'POST',		//Definimos o método HTTP usado
		dataType: 'json',	//Definimos o tipo de retorno
		url: 'https://acheulean-limps.000webhostapp.com/editarInfoListagem.php',//Definindo o arquivo onde serão buscados os dados
		success: function(data){
      var itemPessoa = "";
			$.each(data.pessoa, function(i,dados){
				//Adicionando registros retornados na tabela
         itemPessoa +=

        "<div class='row bar'><div class='col-xs-2'><button id='voltar' style='font-size:24px' onclick='voltarPerfilV()' ><i class='fa fa-mail-reply'></i></button></div><div class='col-xs-10'><h3 class='tittle'>Editar Dados</h3></div></div><div class='row'><div class='col-xs-12'><div class='form-group'><p>Nome</p><input type='text' class='form-control impu' id='nome' placeholder='" + dados.nome + "' maxlength='45'></input></div></div></div><div class='row'><div class='col-xs-12'><div class='form-group'><p>Senha</p><input type='password' class='form-control impu' id='senha' placeholder='Senha' maxlength='45'></input></div></div></div><div class='row'><div class='col-xs-12'><div class='form-group'><input type='password' class='form-control impu' id='senhac' placeholder='Confirmação de Senha' maxlength='45'></input></div></div></div><div class='row'><div class='col-xs-12'><div class='form-group'><p>Email</p><input type='text' class='form-control impu' id='email' placeholder='" + dados.email + "' maxlength='50'></input></div></div></div><div class='row'><div class='col-xs-12'><div class='form-group'><p>Telefone</p><input type='text' class='form-control impu' id='tel' placeholder='" + dados.telefone + "' maxlength='45' ></input></div></div></div><div class='row'><p>Estado</p><div class='col-xs-12'><div class='form-group'><select name='estado' id='estado' class='form-control impu' ><option disabled selected>Seu estado atual é " + dados.sg_estado + "</option><option value='AC'>Acre</option><option value='AL'>Alagoas</option><option value='AP'>Amapá</option><option value='AM'>Amazonas</option><option value='BA'>Bahia</option><option value='CE'>Ceará</option><option value='DF'>Distrito Federal</option><option value='ES'>Espírito Santo</option><option value='GO'>Goiás</option><option value='MA'>Maranhão</option><option value='MT'>Mato Grosso</option><option value='MS'>Mato Grosso do Sul</option><option value='MG'>Minas Gerais</option><option value='PA'>Pará</option><option value='PB'>Paraíba</option><option value='PR'>Paraná</option><option value='PE'>Pernambuco</option><option value='PI'>Piauí</option><option value='RJ'>Rio de Janeiro</option><option value='RN'>Rio Grande do Norte</option><option value='RS'>Rio Grande do Sul</option><option value='RO'>Rondônia</option><option value='RR'>Roraima</option><option value='SC'>Santa Catarina</option><option value='SP'>São Paulo</option><option value='SE'>Sergipe</option><option value='TO'>Tocantins</option></select></div></div></div><div class='row'><div class='col-xs-12'><p>Endereço</p><input type='text' class='form-control impu' id='endereco' placeholder='" + dados.endereco + "' maxlength='45' required><br><p>Foto</p><input class='form-control impu' name='caminho' type='file' id='caminho'></input></div></div><div class='row'><div class='col-xs-3'><div class='col-xs-6'><button class='btn btn-info botao'id='adicionar'>Concluido</button></div></div><div class='col-xs-3'></div></div>";

      });
      $("#info").html(itemPessoa);
    },
	});  
});
$(document).on("click","#adicionar",function(){
   var prop = document.getElementById('caminho').files[0];
   var nome_imagem = prop.name;
   var extensao_imagem = nome_imagem.split('.').pop().toLowerCase();

   if(jQuery.inArray(extensao_imagem,['png','jpg','jpeg']) == -1) {
     navigator.notification.alert("imagem invalida");
  }else{ 
    var form_data = new FormData();
     form_data.append("foto",prop);
     form_data.append("nomeUsuario",$("#nome").val());
     form_data.append("senha",$("#senha").val());
     form_data.append("email",$("#email").val());
     form_data.append("telefone",$("#tel").val());
     form_data.append("endereco",$("#endereco").val());
     form_data.append("estado",$("#estado").val());
     
        $.ajax({
        url:"https://acheulean-limps.000webhostapp.com/editarInfo.php",
        method:'POST',
        data:form_data,
        contentType:false,
        cache:false,
        processData:false,
        success:function(data){
          alert("Dados editados com sucesso!");
          location.href="perfilV.html"; 
         }
     });
   }
});
