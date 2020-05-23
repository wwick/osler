const workup_form = '.check-connection'
$(workup_form).on('submit', function(event) {
  event.preventDefault()
  // "this" would be the {} object, so save the variable
  let form = this
  $.ajax({
    type:"GET",
    url: '/api/time',
    success: function() {
      // call submit on the DOM element, rather than the jquery selection
      // doing the latter triggers submit event handlers, and would be a recursive call (https://api.jquery.com/trigger/#trigger1)
      // triggering on the DOM element does not (https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit). this bypasses some HTML-based constraint validation as described, but we do those validations via Django.
      // https://stackoverflow.com/questions/6022777/recursive-jquery-submit-function-doesnt-submit-the-form#answer-6023334
      form.submit()
    },
    error: function() {
      alert("check VPN and internet connection")
    },
  });
});