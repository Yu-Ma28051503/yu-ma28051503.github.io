/* script.js
 * - Set Last Update date
 * - Control Form Button
*/

document.addEventListener('DOMContentLoaded', function () {
    const updateDate = document.getElementById('updated-date');
    const toggleSwitch = document.getElementById('flexSwitchCheckDefault');
    const myForm = document.getElementById('myForm');
    const submitButton = document.getElementById('submitButton');

    /* Set Last Update date */
    updateDate.innerText = "Last updated 2024/08/13";

    /* Control Form Button */
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
