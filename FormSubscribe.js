(function () {
    'use strict'
    
    var forms2 = document.querySelectorAll('.needs-validation2')
    
    Array.prototype.slice.call(forms2).forEach(function (form2) {
      form2.addEventListener('submit', function (event2) {
        event2.preventDefault();
        event2.stopPropagation();

        // Validate form
        if (this.checkValidity()) {
            // Show success alert
            document.getElementById('successAlert2').classList.remove('d-none');

            // Reset the form and validation
            this.reset();
            this.classList.remove('was-validated');
          } else {
            this.classList.add('was-validated');
          }
          
      }, false)
    })
    })()