emailjs.init('7N1Ssz7fskGdjIECF');

window.onload = function() {
  const Apagar = document.querySelector("#reset");

  document.querySelector('#contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    this.contact_number.value = Math.random() * 100000 | 0;
    
    emailjs.sendForm('service_bbdlxbl', 'template_vw5w8or', this)
      .then(function() {
        console.log('SUCESSO!');
        Apagar.click();
      }, function(error) {
        console.log('FALHA...', error);
      });
  });
};