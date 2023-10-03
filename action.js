//Efecto nav background

$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.na').addClass('active');
            $('.ini').addClass('active');
        } else {
            $('.na').removeClass('active');
            $('.ini').removeClass('active');
        }
    });
});

//Funcionalidad de toggle
$(function() {
  $(".toggle").on("click", function() {
      if ($(".item").hasClass("active")) {
          $(".item").removeClass("active");
          $(this).find("a").html("<i class='fa fa-bars'></i>");
      } else {
          $(".item").addClass("active");
          $(this).find("a").html("<i class='fa fa-times'></i>");
      }
  });
});





/*Modal*/
const exampleModal = document.getElementById('exampleModal')
if (exampleModal) {
  exampleModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    const recipient = button.getAttribute('data-bs-whatever')
    // If necessary, you could initiate an Ajax request here
    // and then do the updating in a callback.
    const im = button.getAttribute('im')
    const desc = button.getAttribute('des')
    // Update the modal's content.
    const modalTitle = exampleModal.querySelector('.modal-title')
    const modalBodyInput = exampleModal.querySelector('.modal-body input')
    const espdes = exampleModal.querySelector('#message-text')
    const i =exampleModal.querySelector('#imser')
    
    i.src = `${im}`
    espdes.innerHTML = desc
    modalTitle.textContent = ` ${recipient}`
    modalBodyInput.value = recipient
  })
}

//Efecto parallax

window.onscroll = function(){

  var posicion = window.pageYOffset || document.documentElement.scrollTop;

  var elemento1 = document.getElementById("icon_auto");
  var elemento2 = document.getElementById("icon_agua");
  var elemento3 = document.getElementById("letras");

  elemento1.style.bottom = posicion * 0.2 + "px";
  elemento2.style.top = posicion * 0.1 + "px";
  elemento3.style.bottom = posicion * 0.4 + "px";
}