const check_connection_class = '.check-connection'
const alert_message = 'check VPN and internet connection'

/**
 * Checks that server connection is stable before redirecting in order to 
 * prevent losing form data.
 * 
 * To implement a connection check for a form, ensure the following:
 * 
 * - the template contains this script
 * - the relevant form is of class 'check-connection'
 * - the name argument to the Crispy Forms Submit class is not 'submit',
 *   i.e., self.helper.add_input(Submit('submit', 'Submit')) should instead be
 *   self.helper.add_input(Submit('submit-button', 'Submit'))
 */
function add_connection_check() {
  $(check_connection_class).on('submit', function(event) {
    event.preventDefault()
    let form = this
    $.ajax({
      type: 'GET',
      url: '/api/check-connection',
      success: function() {
        // call submit on the DOM element, rather than the jquery selection, to avoid a recursive call
        form.submit()
      },
      error: function() {
        alert(alert_message)
      },
    });
  });
}

add_connection_check()
