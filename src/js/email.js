emailjs.init('');

window.onload = function() {
  const Apagar = document.querySelector("#reset");

  document.querySelector('#contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    this.contact_number.value = Math.random() * 100000 | 0;
    
    emailjs.sendForm('', '', this)
      .then(function() {
        console.log('SUCESSO!');
        Apagar.click();
      }, function(error) {
        console.log('FALHA...', error);
      });
  });
};