// Start Cabecalho 
function disableScroll() {
  document.body.style.overflow = 'hidden';
}

function enableScroll() {
  document.body.style.overflow = '';
}

var li = document.getElementById("menu-hamburguer");
var menu = false;

li.addEventListener("click", function(event) {
 
  if(menu == false){
    menu = true;
    disableScroll();
  }
  else{
    menu = false;
    enableScroll();
  }
})

function closemenu(){
  document.getElementById('menu-hamburguer').click();
}
