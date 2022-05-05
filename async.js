// Asynchrone

const myPromise = new Promise((resolve, reject) => {
    if (true) {
    setTimeout(() => {
        resolve('I have succeeded');
    }, 2000);
    } else {
        reject('I have failed!');
    }
});

myPromise
    .then(data => data + ' !!!!')
    .then(newValue => console.log(newValue))
    .catch(error => console.log(error));