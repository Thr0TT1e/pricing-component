document.addEventListener("DOMContentLoaded", function() {

	const checkbox = document.querySelector('#main--checkbox');
	const checkboxMonthly = document.querySelectorAll('.price_monthly');
    const checkboxYear = document.querySelectorAll('.price_year');

	if (checkbox.checked === false) {
        for (let i = 0; i < checkboxMonthly.length; i++) {
            checkboxMonthly[i].style.display = 'none';
        }
    } else if (checkbox === true) {
        for (let i = 0; i < checkboxYear.length; i++) {
            checkboxYear[i].style.display = 'none';
        }
    } else {
	    console.log('Error - checkbox!!!');
    }

});
