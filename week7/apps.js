let heading = document.querySelector("h1");// step 1
console.log(heading)
heading.textContent = 'Generic Heading'; // step 2
let div = document.querySelector('div');
console.log(div.innerHTML)
let paragraphs = document.querySelectorAll('div p');
let form = document.querySelector('form');
console.log(paragraphs); // node list 
let ul = document.querySelector('ul');
paragraphs.forEach( para => {
    paragraphs +=  para.classList.add('blue');
});
// paragraphs.textContent = '<p>Hello</p>'
// let newPara = document.createElement('p');
// let newTxt = document.createTextNode('hello world!');
// newPara.appendChild(newTxt);
// div.appendChild(newPara);
div.innerHTML += '<p>hello world</p>';

// step 6
const hobbies = ['soccer', 'coding', 'guitar', 'running', 'cycling']//step 6
console.log(hobbies);
for(let i = 0; i < hobbies.length; i++){
ul.innerHTML += '<li>' + hobbies[i] + '</li>'
}
form.addEventListener('click',(e) => {
    
    console.log(e.target);
    e.preventDefault();
    if (e.target.id === 'go' ){
        e.target.classList.add('go');
    } else if (e.target.id === 'stop') {
        e.target.classList.add('stop');
    } 
})