$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
            $('.ini').addClass('active');
        } else {
            $('.navbar').removeClass('active');
            $('.ini').removeClass('active');
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