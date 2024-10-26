(function () {
'use strict'

var forms = document.querySelectorAll('.needs-validation')

Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        event.stopPropagation();

        // Validate form
        if (this.checkValidity()) {
          // Show success alert
          document.getElementById('successAlert').classList.remove('d-none');

          // Hide the modal after submission
          var modal = bootstrap.Modal.getInstance(document.getElementById('modalContantUs'));
          modal.hide();
          // Reset the form and validation
          this.reset();
          this.classList.remove('was-validated');
        } else {
          this.classList.add('was-validated');
        }
    }, false)
})
})()