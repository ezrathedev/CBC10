//! Overall great work, everything worked as it is supposed to. I made a few adjustments on areas I think could be improved in both index.html & scripts.js
var username = document.querySelector('#username');
var user = document.querySelector('#user');
var password = document.querySelector('#password');
var submit = document.getElementById('input[type=submit]');
var userLabel = document.querySelector('label[for=username]'); //line 6  // use label[for=username]
var passLabel = document.querySelector('label[for=password]');
var rememberMe = document.querySelector('input[type=checkbox]');
var submitBtn = document.querySelector('button[type=submit]'); // line 9
var logout = document.getElementById('logout');
var error = document.getElementsByClassName('error');
username.addEventListener('focus', function () {
	username.classList.add('blue-border');
	userLabel.classList.add('blue');

	//? I think this would be better placed on the 'blur' event listener & to check if the username.value does NOT equal an empty string, otherwise might make sense to leave the input box red.
	// if (username.value === '') {
	// 	username.classList.remove('error');
	// 	userLabel.classList.remove('error');
	// }
});

username.addEventListener('blur', function () {
	// use classlist .rmove to remove the styles from the input
	username.classList.remove('blue-border');
	userLabel.classList.remove('blue');

	//? Moved from focus listener
	if (username.value !== '') {
		username.classList.remove('error');
		userLabel.classList.remove('error');
	}
});

password.addEventListener('focus', function (e) {
	// use classlist to add style to the input box
	passLabel.classList.add('blue');
	password.classList.add('blue-border');

	//? I think this would be better placed on the 'blur' event listener & to check if the username.value does NOT equal an empty string, otherwise might make sense to leave the input box red.
	// if (password.value === '') {
	// 	passLabel.classList.remove('error');
	// 	password.classList.remove('error');
	// } // this works //? Remove exclamation so you find feedback comments easier.
});

password.addEventListener('blur', function () {
	// use classlist .remove to remove the styles from the input
	password.classList.remove('blue-border');
	passLabel.classList.remove('blue');

	//? Moved from focus listener
	if (password.value !== '') {
		passLabel.classList.remove('error');
		password.classList.remove('error');
	}

	//! Password input field does not have a checked property, therefore this is an unreachable code block
	// if (password.checked) {
	// 	passLabel.classList.remove('error');
	// 	password.classList.remove('error');
	// }
});

rememberMe.addEventListener('change', function () {
	// use classlist .add to add style to the input box !
	if (rememberMe.checked) {
		// alert('we will save your password!');// this works //? We don't want to tell them we're saving their password
		alert(`We will save your username for next time!`);
	} else {
		//? Was NOT in the instructions but this just adds the functionality to destroy the localStorage username on un-checking of the box. i.e. we no longer have to click the sign in button to be forgotten.
		localStorage.removeItem('username');
	}
});

submitBtn.addEventListener('click', function (e) {
	if (username.value === '' && password.value === '') {
		username.classList.add('error');
		userLabel.classList.add('error');
		password.classList.add('error');
		passLabel.classList.add('label', 'error');
		// find a way to link the two together.
	} else if (username.value === '') {
		username.classList.add('error');
		userLabel.classList.add('error');
	} else if (password.value === '') {
		password.classList.add('error');
		passLabel.classList.add('error');
	} else {
		if (rememberMe.checked) {
			localStorage.setItem('username', username.value);
		} else {
			localStorage.removeItem('username');
		}
		sessionStorage.setItem('username', username.value); //? Changed order for better formatting/readability
		userLabel.classList.remove('error');
		passLabel.classList.remove('error');
		password.classList.remove('error');
		username.classList.remove('error');
		// localStorage.removeItem('username'
		// console.log(localStorage); //? Just commenting out for feedback
	}
});

window.addEventListener('load', function () {
	if (localStorage.getItem('username') !== null) {
		username.value = localStorage.getItem('username');
		rememberMe.checked = true;
	}
	if (sessionStorage.getItem('username') !== null) {
		// user.innerHTML = sessionStorage.getItem('username');
		user.textContent = sessionStorage.getItem('username'); //? We would rather use textContent here instead of innerHTML for performance reasons.
		// rememberMe.checked = false;
	}
});

// if(sessionStorage !== 'null'){
//     user.innerHTML += localStorage.getItem('username');
// }

logout.addEventListener('click', function () {
	// sessionStorage.clear(); //? Since we only have one item in our session storage this is ok, however it might be a better idea to just remove the one variable we want to remove and leave the rest.
	sessionStorage.removeItem('username');
	window.location.replace('index.html');
});
