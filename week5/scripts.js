
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
 // use classlist .rmove to remove the styles from the input
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
        alert('we will save your password!');// this works 
    
    }
});

submitBtn.addEventListener('click', function(e){
    // e.preventDefault()
    
    if(username.value === '' && password.value === ''){
        username.classList.add('error');
        userLabel.classList.add('error');
        password.classList.add('error');
        passLabel.classList.add('label','error');
        // find a way to link the two together. 
    } else if (user.value === ''){
        username.classList.add('error');
        userLabel.classList.add('error');
    } else if (password.value === '') {
        password.classList.add('error');
        passLabel.classList.add('error');

    } else {
        userLabel.classList.remove('error');
        passLabel.classList.remove('error');
        password.classList.remove('error');
        username.classList.remove('error');
        user.innerHTML = username.value;
        // username.value = '';
        // password.value = '';  
        // password.disabled = true;
        // username.disabled = true; 
    }
    s
    submitBtn.addEventListener('checked' => (){
        localStorage.setItem()

    })

})

