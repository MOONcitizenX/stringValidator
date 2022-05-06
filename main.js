let input = document.querySelector('input');
let button = document.querySelector('button');
let result = document.querySelector('.result__field');

button.addEventListener('click', () => validateString(input.value));

const validateString = (str) => {
	result.innerHTML = '';
	let strInput = String(str).trim();
	let numberFlag = false;
	let charFlag = false;
	let upperCharFlag = false;
	let atCharFlag = false;
	let notEmptyFlag = false;
	let resString = ['Your string contains no: '];
	let res = [];

	if (strInput != '') {
		notEmptyFlag = true;
	} else {
		resString = "You've entered an empty string.\n";
		result.style.color = '#cf2323';
		return (result.textContent = resString);
	}
	if (/[a-zA-Zа-яА-Я]/.test(strInput)) {
		charFlag = true;
	} else {
		res.push('letters');
	}
	if (/[0-9]/.test(strInput)) {
		numberFlag = true;
	} else {
		res.push('numbers');
	}
	if (/[A-ZА-Я]/.test(strInput)) {
		upperCharFlag = true;
	} else {
		res.push('uppercase letters');
	}
	if (strInput.includes('@')) {
		atCharFlag = true;
	} else {
		res.push('"@"');
	}
	if (strInput.length < 5) {
		res.push('is too SHORT');
	}
	if (strInput.length > 64) {
		res.push('is too LONG');
	}
	if (
		numberFlag &&
		charFlag &&
		upperCharFlag &&
		atCharFlag &&
		notEmptyFlag &&
		5 <= strInput.length &&
		strInput.length <= 64
	) {
		resString = `Your string "${strInput}" is good to go! Well done!`;
		result.style.color = 'rgb(72, 201, 139)';
		return (result.textContent = resString);
	} else if (
		numberFlag &&
		charFlag &&
		upperCharFlag &&
		atCharFlag &&
		notEmptyFlag &&
		strInput.length < 5
	) {
		resString = 'Your string is too SHORT.';
		result.style.color = '#cf2323';
		return (result.textContent = resString);
	} else if (
		numberFlag &&
		charFlag &&
		upperCharFlag &&
		atCharFlag &&
		notEmptyFlag &&
		strInput.length > 64
	) {
		resString = 'Your string is too LONG.';
		result.style.color = '#cf2323';
		return (result.textContent = resString);
	} else {
		result.style.color = '#cf2323';
	}
	return (result.textContent = resString + res.join(', ') + '.');
};
