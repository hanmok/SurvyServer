// promise
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 3000) {
            failure('Connection Timeout :(');
        }
        else {
            success(`Here is your fake data from ${url}`);
        }
    }, delay);
};
fakeRequestCallback('books.com/page1', function (response) {
    console.log("IT WORKED!!");
    console.log(response);
    fakeRequestCallback('books.com/page2', function (response) {
        console.log("IT WORKED AGAIN!!!");
        console.log(response);
        fakeRequestCallback('books.com/page3', function (response) {
            console.log("IT WORKED AGAIN!!! (3rd)");
            console.log(response);
        }, function (err) {
            console.log("3rd req ERROR!!!", err);
        });
    }, function (err) {
        console.log("2nd req ERROR!!!", err);
    });
}, function (err) {
    console.log("ERROR!!!", err);
});
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay > 3000) {
                reject('Connection Timeout :(');
            }
            else {
                resolve(`Here is your fake data from ${url}`);
            }
        }, delay);
    });
};
fakeRequestPromise('yelp.com/api/coffee/page2')
    .then(() => {
    console.log('PROMISE RESOLVED! (1)');
    fakeRequestPromise('yelp.com/api/coffee/page2')
        .then(() => {
        console.log('PROMISE RESOLVED (2)!');
        fakeRequestPromise('yelp.com/api/coffee/page3')
            .then(() => {
            console.log("IT WORKED!!! (3)");
        })
            .catch(() => {
            console.log("OH, NO!! Error!! (3)");
        });
    })
        .catch(() => {
        console.log('OH NO, Error!!! (2)');
    });
})
    .catch(() => {
    console.log('OH NO, Error!!! (1)');
});
fakeRequestPromise('yelp.com/api/coffee/page1')
    .then((data) => {
    console.log('PROMISE RESOLVED! (1)');
    console.log(data);
    return fakeRequestPromise('yelp.com/api/coffee/page2');
})
    .then((data) => {
    console.log("IT WORKED!!! (page 2)");
    console.log(data);
    return fakeRequestPromise('yelp.com/api/coffee/page3');
})
    .then((data) => {
    console.log("IT WORKED!!! (page 3)");
    console.log(data);
})
    .catch((err) => {
    console.log("OH, NO! A Request failed!!!");
    console.log(err);
});
