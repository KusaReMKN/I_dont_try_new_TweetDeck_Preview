const targetClassName = 'js-gryphon-beta-btn gryphon-beta-btn-container';

const timerId = setInterval(() => {
	const elems = document.getElementsByClassName(targetClassName);
	const banner = elems.item(0);
	if (elems.length > 0) {
		const banner = elems.item(0);
		banner.parentElement.removeChild(banner);
		clearInterval(timerId);
	}
});
