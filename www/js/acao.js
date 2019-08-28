// Redirecionamentos 
function bolos(){
  location.href = "bolos.html";
}
function poslogin() {
  location.href = "poslogin.html";
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
// Tratamento de Senha
var password = document.getElementById("senha")
  , confirm_password = document.getElementById("senhac");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Senhas diferentes!");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

