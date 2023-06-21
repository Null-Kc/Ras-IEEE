// Start Cabecalho 
function desabilitarScroll() {
  document.body.style.overflow = 'hidden';
}

function habilitarScroll() {
  document.body.style.overflow = '';
}

var li = document.getElementById("menu_hamburguer");
var menu = false;


li.addEventListener("click", function(event) {
 
  if(menu == false){
    menu = true;
    desabilitarScroll();
  }
  else{
    menu = false;
    habilitarScroll();
  }
})

function fecharmenu(){
  document.getElementById('menu_hamburguer').click();
}
