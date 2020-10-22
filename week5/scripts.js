
var username = document.getElementById('username');
var user = document.getElementById('user');
var password = document.getElementById('password');
var submit = document.getElementById('input[type=submit]');
var  userLabel = document.querySelector('label[for=username]'); //line 6  // use label[for=username]
var passlabel = document.querySelector('label[for=password]'); 
var rememberMe = document.querySelector('input[type=checkbox]');
var submitBtn = document.getElementById('submit'); // line 9

username.addEventListener('focus', function(e){
    e.target(username);
});

username.addEventListener('blur', function(){
    //  // use classlist .remove to remove the styles from the input
})
password.addEventListener('focus', function(){
    // use classlist to add style to the input box
});

password.addEventListener('blur', function(){
    // use classlist .remove to remove the styles from the input
    Element.classlist.remove('');
});

rememberMe.addEventListener('click', function(){
    // use classlist .add to add style to the input box !
    Element.classlist.add('');
});

submitBtn.addEventListener('click', function(){
// line 13
});


