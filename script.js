const buttons = document.querySelectorAll('.accordion-btn');
const accordionInfo = document.querySelectorAll('.accordion-info-text');
const accordion = document.querySelector('.accordion');

function openOption() {
	if (this.nextElementSibling.classList.contains('active')) {
		this.nextElementSibling.classList.remove('active');
		return;
	} else {
		closeOptions();
		this.nextElementSibling.classList.toggle('active');
	}
}

const closeOptions = () => {
	buttons.forEach((btn) => {
		btn.nextElementSibling.classList.remove('active');
	});
};

const clickOutsideAccordion = (e) => {
	if (
		e.target.classList.contains('accordion-btn') ||
		e.target.classList.contains('accordion-info') ||
		e.target.classList.contains('accordion-info-text')
	) {
		return;
	} else {
		closeOptions();
	}
	// if (e.target.classList.contains('accordion-btn')) {
	// 	openOption();
	// } else {
	// 	closeOptions();
	// }
};

buttons.forEach((btn) => {
	btn.addEventListener('click', openOption);
});
window.addEventListener('click', clickOutsideAccordion);
