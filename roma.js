const input = document.getElementById('input');
const result = document.getElementById('result');
const button = document.getElementById('btn');

button.addEventListener('click', cevir);

function cevir() {
	let enteredNumber = +input.value;
	console.log(enteredNumber);
	if (enteredNumber > 3000) {
		result.innerHTML = 'Please enter a number which is 1less than 3000!';
		input.value = '';
	} else if (enteredNumber == '') {
		alert('Please enter a number');
	} else {
		result.innerHTML = convert(enteredNumber);
	}
}

const convert = (enteredNumber) => {
	let romanToNum = {
		M: 1000,
		CM: 900,
		D: 500,
		CD: 400,
		C: 100,
		XC: 90,
		L: 50,
		XL: 40,
		X: 10,
		IX: 9,
		V: 5,
		IV: 4,
		I: 1
	};
	let romanNumber = '';
	for (let key in romanToNum) {
		while (enteredNumber >= romanToNum[key]) {
			romanNumber += key;
			enteredNumber -= romanToNum[key];
		}
	}
	return `${+input.value} = ${romanNumber}`;
};
window.addEventListener('keyup', function(event) {
	if (event.code == 'Enter' || event.code == 'NumpadEnter') {
		event.preventDefault;
		cevir(event.code);
	}
});
