//! Not finished but you get the idea.
var username = document.querySelector('#username');
var user = document.getElementById('user');
var password = document.getElementById('password');
var userLabel = document.querySelector('form label[for=username]');
var passLabel = document.querySelector('form label[for=password]');
var rememberMe = document.querySelector('form input[type=checkbox]');
var submitBtn = document.getElementsByTagName('button').item(1);

username.addEventListener('input', function () {
	if (username.value === '') {
		username.classList.add('error');
		userLabel.classList.add('label-error');
	} else {
		username.classList.add('valid');
		userLabel.classList.add('label-valid');
		username.classList.remove('error');
		userLabel.classList.remove('label-error');
	}
});

username.addEventListener('focus', function () {
	userLabel.classList.add('blue');
	username.classList.add('blue-border');
});

username.addEventListener('blur', function () {
	userLabel.classList.remove('blue');
	username.classList.remove('blue-border');
});

password.addEventListener('input', function () {
	if (password.value === '') {
		password.classList.add('error');
		passLabel.classList.add('label-error');
	} else if (password.value.length < 6) {
		password.classList.add('error');
		passLabel.classList.add('label-error');
	} else {
		password.classList.add('valid');
		passLabel.classList.add('label-valid');
		password.classList.remove('error');
		passLabel.classList.remove('label-error');
	}
});

password.addEventListener('focus', function () {
	passLabel.classList.add('blue');
	password.classList.add('blue-border');
});

password.addEventListener('blur', function () {
	passLabel.classList.remove('blue');
	password.classList.remove('blue-border');
});
