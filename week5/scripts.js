//! Everything looked great, not a lot of feedback did have some in here though, I added some additional code in app2.js using the 'input' event to dynamically update the input boxes, check out that and the feedback, let me know if you have any questions.
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

    //! This is incorrect b/c if the value was empty we would still want it to remain red.
    // if(username.value === ''){
    //     username.classList.remove('error');
    //     userLabel.classList.remove('error');
    // }
    //? To remove error class, I mis-spoke earlier, the !important was on .blue-border & .blue to prevent the need to do this.
    if(username.classList.contains('error') || userLabel.classList.contains('error')) {
        username.classList.remove('error');
        userLabel.classList.remove('error');
    };
});

username.addEventListener('blur', function(){
 // use classlist .rmove to remove the styles from the input
    username.classList.remove('blue-border');
    userLabel.classList.remove('blue');
});

password.addEventListener('focus', function(e){
    // use classlist to add style to the input box
    passLabel.classList.add('blue');
    password.classList.add('blue-border')
    
    //! This is incorrect b/c if the value was empty we would still want it to remain red. 
    // if(password.value === ''){
    //     passLabel.classList.remove('error');
    //     password.classList.remove('error');
    // } //! this works
    //? To remove the error class
    if(password.classList.contains('error') || passLabel.classList.contains('error')) {
        password.classList.remove('error');
        passLabel.classList.remove('error');
    };
});

password.addEventListener('blur', function(){
    // use classlist .remove to remove the styles from the input
    password.classList.remove('blue-border');
    passLabel.classList.remove('blue');

    //! Why are you removing the error class when the remember me box is checked? 
    // if (password.checked) {
    //     passLabel.classList.remove('error');
    //     password.classList.remove('error');
    // };
});

rememberMe.addEventListener('change', function(){
    // use classlist .add to add style to the input box !
    if(rememberMe.checked){
        alert('we will save your password!');// this works 
    }
});

submitBtn.addEventListener('click', function(e){
    e.preventDefault(); //? un-commented for hw #1
    
    if(username.value === '' && password.value === ''){
        username.classList.add('error');
        userLabel.classList.add('error');
        password.classList.add('error');
        // passLabel.classList.add('label','error'); //? you're actually adding two classes here, label & error, since you re-wrote some of the css you can just add the error class. 
        passLabel.classList.add('error');
        // find a way to link the two together. 
    } else if (user.value === ''){
        username.classList.add('error');
        userLabel.classList.add('error');
        //! adding the code to remove the error class
        // password.classList.remove('error');
        // passLabel.classList.remove('error');
    } else if (password.value === '') {
        password.classList.add('error');
        passLabel.classList.add('error');
        //! adding the code to remove the error class
        // username.classList.remove('error');
        // userLabel.classList.remove('error');
    } else {
        userLabel.classList.remove('error');
        passLabel.classList.remove('error');
        password.classList.remove('error');
        username.classList.remove('error');
        user.innerHTML = username.value;
        //? Un-commented the below for hw #1
        username.value = '';
        password.value = '';  
        password.disabled = true;
        username.disabled = true; 
    }

    //? The below cause some errors  
    // s
    // submitBtn.addEventListener('checked' => (){
    //     localStorage.setItem()

    // })

})

