document.addEventListener("DOMContentLoaded", function() {

	const checkbox = document.querySelector('#main--checkbox');
	const checkboxMonthly = document.querySelectorAll('.price_monthly');
    const checkboxYear = document.querySelectorAll('.price_year');
    document.querySelector('#main--checkbox').onclick = showPrice;

    showPrice();

	function showPrice() {
        if (checkbox.checked === false) {
            for (let i = 0; i < checkboxYear.length, i < checkboxMonthly.length; i++) {
                checkboxMonthly[i].style.display = 'none';
                checkboxYear[i].style.display = 'block';
            }
        } else if (checkbox.checked === true) {
            for (let i = 0; i < checkboxYear.length, i < checkboxMonthly.length; i++) {
                checkboxYear[i].style.display = 'none';
                checkboxMonthly[i].style.display = 'block';
            }
        } else {
            console.log('Error - checkbox!!!');
        }
    }
});
