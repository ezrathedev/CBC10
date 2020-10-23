
var username = document.querySelector('#username');
var user = document.querySelector('#user');
var password = document.querySelector('#password');
var submit = document.getElementById('input[type=submit]');
var  userLabel = document.querySelector('label[for=username]'); //line 6  // use label[for=username]
var passLabel = document.querySelector('label[for=password]'); 
var rememberMe = document.querySelector('input[type=checkbox]');
var submitBtn = document.querySelector('button[type=submit]'); // line 9

username.addEventListener('focus', function(){
    username.classList.add('blue-border');
    userLabel.classList.add('blue');

    if(username.value === ''){
        username.classList.remove('error');
        userLabel.classList.remove('error');
    }
});

username.addEventListener('blur', function(){
    //  // use classlist .rmove to remove the styles from the input
    username.classList.remove('blue-border');
    userLabel.classList.remove('blue');
    
})
password.addEventListener('focus', function(e){
    // use classlist to add style to the input box
    passLabel.classList.add('blue');
    password.classList.add('blue-border')
    
    if(password.value === ''){
        passLabel.classList.remove('error');
        password.classList.remove('error');
    } //! this works

});

password.addEventListener('blur', function(){
    // use classlist .remove to remove the styles from the input
    password.classList.remove('blue-border');
    passLabel.classList.remove('blue');

    if (password.checked) {
        passLabel.classList.remove('error');
        password.classList.remove('error');
    }
});

rememberMe.addEventListener('change', function(){
    // use classlist .add to add style to the input box !
    if(rememberMe.checked){
        alert('event fired!');// this works 
    }
});

submitBtn.addEventListener('click', function(e){
    console.log('event fired!');
    if(username.value === ''){
        username.classList.add('error');
        userLabel.classList.add('error');
    } 
    if(password.value === ''){
        password.classList.add('error');
        passLabel.classList.add('error');
    } // this worked
    e.preventDefault;
});
