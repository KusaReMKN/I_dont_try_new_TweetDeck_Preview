const targetClassName = 'js-gryphon-beta-btn gryphon-beta-btn-container';
const cookieString = 'tweetdeck_version=legacy';

if (document.cookie.indexOf(cookieString) !== -1) {
	const timerId = setInterval(() => {
		const elems = document.getElementsByClassName(targetClassName);
		const banner = elems.item(0);
		if (elems.length > 0) {
			const banner = elems.item(0);
			banner.parentElement.removeChild(banner);
			clearInterval(timerId);
		}
	});
}

console.log('RIP legacy TweetDeck');
