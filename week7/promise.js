const promise1 = () => {
    return new Promise((resolve, reject) => {
        resolve();
    })
}
promise1();
promise1.then(() => {
    console.log('success')
});
promise1.catch(() => {
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
