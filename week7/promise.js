const promise1 = () => {
	return new Promise((resolve, reject) => {
		resolve('i have resolved');
	});
};

promise1()
	.then(() => {
		console.log('Success');
	})
	.catch(() => {
		console.log('there was an error');
	});

const promise2 = (errorboolean) => {
	return new Promise((resolve, reject) => {
		if (errorboolean) {
			reject('there was an error');
		} else {
			resolve('your data you asked for');
		}
	});
};

promise2(true)
	.then((data) => {
		console.log(data);
	})
	.catch((err) => {
		console.log(err);
	});

promise2(false)
	.then((data) => {
		console.log(data);
	})
	.catch((err) => {
		console.log(err);
	});

const promise3 = new Promise((resolve, reject) => {
	resolve('promise3 is complete');
});

const promise4 = new Promise((resolve, reject) => {
	resolve('promise4 is complete'); //? modified for step 16
});

promise4
	.then((data) => {
		console.log(data);
	})
	.catch((err) => {
		console.log(err);
	});

// const promise5 = new Promise((resolve, reject) => {}); //? This isn't complete the promise should resolve. This is neither resolving or rejecting
const promise5 = new Promise((resolve, reject) => {
	resolve('Promise 5 is complete');
});

Promise.all([promise3, promise4, promise5])
	.then((data) => {
		console.log(data);
	})
	.catch((err) => {
		console.log(err);
	});

let ul = document.querySelector('ul');

let xhr = new XMLHttpRequest();

// xhr.open('GET', 'http://api.icndb.com/jokes/random?limitTo=[nerdy]', true); //? This was supposed to get a specific joke. It was supposed to get joke with the id of 15. That joke is "When Chuck Norris goes to donate blood, he declines the syringe, and instead requests a hand gun and a bucket." read about it here --> http://www.icndb.com/api/ SECTION: "Fetching a specific joke"
xhr.open('GET', 'http://api.icndb.com/jokes/15', true);

xhr.onload = function () {
	console.log(this.responseText);
	const joke = JSON.parse(this.responseText).value.joke;
	console.log(joke);
	ul.innerHTML = `<li>${joke}</li>`;
};

xhr.send();

//? HTML + JS to fetch a certain number of jokes then populate a ul with them
const input = document.querySelector('input[type=number]');
const output = document.querySelector('#jokes');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
	let numJokes = parseInt(input.value); //? We can't get 2.5 jokes so parsing to an int instead of a float

	if (isNaN(numJokes)) {
		numJokes = 1;
	}

	let ajax = new XMLHttpRequest();

	ajax.open('GET', `http://api.icndb.com/jokes/random/${numJokes}`, true);

	ajax.onload = function () {
		const jokes = JSON.parse(this.responseText).value;

		output.innerHTML = '';
		for (const joke of jokes) {
			output.innerHTML += `<li>${joke.joke}</li>`;
		}
	};

	ajax.send();
});
