const promise1 = () => {
    return new Promise((resolve, reject) => {
        resolve('i have resolved');
    })
}
promise1().then(() => {
    console.log('Success');
}).catch(() => {
    console.log('there was an error');
});

const promise2 = (errorboolean) => {
    return new Promise((resolve, reject) => {
        if(errorboolean) {
            reject('there was an error');
        } else {
            resolve('your data you asked for');
        }
    })
}
promise2(true)
    .then(data => {console.log(data)})
    .catch(err => {console.log(err)})
promise2(false)
    .then(data => {console.log(data)})
    .catch(err => {console.log(err)})

const promise3 = new Promise((resolve, reject) => {
    resolve('promise3 is complete');
});

const promise4 = new Promise((resolve, reject) => {
    resolve('promise4 is complete');
})
promise4.then(data => {
    console.log(data)
}).catch(err => {
    console.log(err);
});

const promise5 = new Promise((resolve, reject) => {

})
Promise.all([promise3,promise4,promise5])
    .then(data => { console.log(data) })
    .catch(err => { console.log(err) })


let ul = document.querySelector('ul');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'http://api.icndb.com/jokes/random?limitTo=[nerdy]', true);

xhr.onload = function () {
	console.log(this.responseText);
	const joke = JSON.parse(this.responseText).value.joke;
	console.log(joke);
	ul.innerHTML = `<li>${joke}</li>`;
};

xhr.send();