// script.js

document.addEventListener('DOMContentLoaded', function () {
    const toggleSwitch = document.getElementById('flexSwitchCheckDefault');
    const myForm = document.getElementById('myForm');
    const submitButton = document.getElementById('submitButton');

    toggleSwitch.addEventListener('change', function () {
      if (toggleSwitch.checked) {
        myForm.removeAttribute('disabled');
        submitButton.removeAttribute('disabled');
      } else {
        myForm.setAttribute('disabled', 'disabled');
        submitButton.setAttribute('disabled', 'disabled');
      }
    });
});
