var user = document.getElementById('username'); // for username input
var password = document.getElementById('password'); // for password input
var submit = document.querySelector('Input[type=submit]'); // for submit button
var userLabel = document.getElementById('userLabel') // for user label
var passLabel = document.getElementById('passLabel') // for password lable
var rememberMe = document.getElementById('Me'); //! getting null back for this Fix!!

rememberMe.addEventListener('click', function(e){
    var alt = alert('do you want us to remember your password?');
    console.log(alt);
});

submit.addEventListener('click', function(e){
    user.value = '';
    password.value = '';
    e.preventDefault();
});

