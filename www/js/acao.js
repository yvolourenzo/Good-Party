// Redirecionamentos 
function bolos(){
  location.href = "bolos.html";
}
function voltarPerfilV(){
  location.href = "perfilV.html";
}
function voltarPerfilC(){
  location.href = "perfilC.html";
}
function voltarVendedor() {
  location.href = "vendedor.html";
}
function voltarCliente() {
  location.href = "cliente.html";
}
function editarCliente() {
  location.href = "editarInfoCliente.html";
}
function voltarMenu() {
  location.href = "perfil.html";
}
function itensCarrinho(){
  location.href = "itensCarrinho.html";
}
function index(){
  location.href = "index.html";
}
function bolos(){
  location.href = "bolos.html";
}
// Funções pagina carrinho
function fechar2(){
  location.href = "poslogin.html";
}
function abrirmenu() {
  document.getElementById("mySidebar").style.display = "block";
}
function fechar() {
  document.getElementById("mySidebar").style.display = "none";
}
function bolococo(){
  location.href = "bolococo.html";
}
function myFunction() {
  var y = document.getElementById("Div1");
  var x = document.getElementById("Div2");
  var z = document.getElementById("Div3");
  if (x.style.display === "none" && y.style.display == "none") {
    x.style.display = "block";
  }
   else {
    x.style.display = "none";
  }
}
$('#adicionarLink').click(function(){
  $(location).attr('href', 'addproduto.html');
});

$('#voltarV').click(function(){
  $(location).attr('href', 'vendedor.html');
});

$('#cancelar').click(function(){
  $(location).attr('href', 'vendedor.html');
});

$('#cancelar').click(function(){
  $(location).attr('href', 'vendedor.html');
});

$('#logar').click(function(){
  if($('#login').val() == 'vendedor'){
     $(location).attr('href','vendedor.html');
  }
   else if($('#login').val() == 'cliente'){
     $(location).attr('href','cliente.html');
   }
   else if($('#login').val() == 'Cliente'){
     $(location).attr('href','cliente.html');
   }
   else if($('#login').val() == 'Vendedor'){
     $(location).attr('href','vendedor.html');
  }
});

$('#cadastrar').click(function(){
  $(location).attr('href','cadastrar.html');
});
function editarVendedor(){
  location.href = "editarInfoVendedor.html";
};









